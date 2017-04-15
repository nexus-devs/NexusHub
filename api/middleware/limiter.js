"use strict"


/**
 * Redis Client for rate limiting
 */
const Redis = require("redis")
const client = Redis.createClient()


/**
 * Rolling Rate Limiting
 */
const RateLimiter = require("rolling-rate-limiter")

// Rate Limiter for privileged scope
const low_limit = RateLimiter({
    redis: client,
    namespace: "LowAccessLimit",
    interval: 5000,
    maxInInterval: 25
})

// Rate Limiter for registered users
const mid_limit = RateLimiter({
    redis: client,
    namespace: "MidAccessLimit",
    interval: 10000,
    maxInInterval: 12,
    minDifference: 750
})

// Rate Limiter for no tokens
const high_limit = RateLimiter({
    redis: client,
    namespace: "HighAccessLimit",
    interval: 10000,
    maxInInterval: 8,
    minDifference: 1000
})


/**
 * Rolling Rate limiting Implementation
 */
 class Limiter {

     /**
      * Rolling Rate Limiting with Redis
      */
     check(req, res, next) {

         // No Token provided -> High limit, 1req/s
         if (!req.user.scp) {
             high_limit(req.user.uid, (err, timeLeft) => this.limit(err, req, res, next, timeLeft))
         }

         // User is root -> skip limiting
         else if (req.user.scp.includes("root")) {
             return next()
         }

         // Token provided & privileged user -> No minDifference, 5req/s
         else if (req.user.scp.includes("elevated")) {
             low_limit(req.user.uid, (err, timeLeft) => this.limit(err, req, res, next, timeLeft))
         }

         // Token provided & default user -> Enhanced limits, 2req/s
         else if (req.user.scp.includes("basic")) {
             mid_limit(req.user.uid, (err, timeLeft) => this.limit(err, req, res, next, timeLeft))
         }

         else return next("Undocumented Authorization Scope. Please contact a developer on our discord server. https://discord.gg/8mCNvKp")
     }


     /**
      * Rate Limit error handling
      */
     limit(err, req, res, next, timeLeft) {

         // Return any errors
         if (err) {
             return next(new Error("Uncaught Exception"))
         }

         // Limit Rate if necessary
         else if (timeLeft) {

             // Figure out why request got limited
             if (timeLeft > 0) {
                 var err = "Rate limit exceeded. Request intervals too close."
             } else {
                 var err = "Rate limit exceeded. Max requests per interval reached."
             }

             // Figure out Source of Request
             if (req.channel === "Sockets") var prefix = "Sockets"
             else var prefix = "REST"

             // Respond with error
             return res.status(429).send(err)
         }

         // Otherwise allow
         else {
             return next()
         }
     }
 }


 module.exports = new Limiter()
