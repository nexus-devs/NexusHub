/**
 * Token based authentication using JWT & Passport
 */

/**
 * Connect to mongodb
 */
const db = require('mongoose').connect('mongodb://localhost/nexus-stats')


/**
 * Passport Strategies
 */
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy


/**
 * JSON Web Tokens
 */
const jwt = require('jsonwebtoken')
const ejwt = require('express-jwt')


/**
 * Secret Secrecy
 */
const bcrypt = require('bcryptjs')
var users = [
        {
            id: 0,
            user_key: 'test',
            user_secret: 'test',
            permissions: {
                items: {
                    someprivatequery: true,
                    anotherprivatequery: true,
                    usuallypublic: false,
                },
                otherendpoint: {
                    all: true
                }
            },
            rate_limit: 800 // Referring to requests per minute. 0 is banned, false is infinite
    }
]
    // NOTE: Also create default user containing all specifications
    // EVERYONE WITHOUT AUTH will be using default user specifications
    // AUTHENTICATED USERS will have their role merged with default




/**
 * Describes interactions with mongo/redis for auth
 */
class Authentication {

    constructor() {
        this.secret = 'super secret'

        this.userModel;

        this.setModel()
    }


    /**
     * Passport Authentication Strategies
     */
    configPassport(passport) {

        // Local Strategy
        passport.use(new LocalStrategy((username, password, cb) => {
            var user = users.filter(user => {
                return user.user_key === username && user.user_secret === password
            })
            if (user.length === 1) {
                return cb(null, user[0])
            } else {
                return cb(null, false)
            }
        }))
    }


    /**
     * Force JWT auth on all routes
     */
    configExpress(app) {
        app.use(ejwt({
            secret: this.secret,
            credentialsRequired: false,
            userProperty: 'tokenPayload'
        }).unless({path: ['/', '/auth']}))
    }


    /**
     * Function to check supplied user info & send token
     */
    matchPassport(passport, req, res, next) {
        passport.authenticate('local', (err, user, info) => {
            if (err) return next(err);
            if (!user) {
                return res.status(401).json({
                    status: 'error',
                    code: 'unauthorized'
                });
            } else {
                return res.json({
                    token: jwt.sign({
                        id: user.id
                    }, this.secret)
                });
            }
        })(req, res, next);
    }


    /**
     * Load user from db if token found
     */
    matchToken(req, res, next) {
        if (req.tokenPayload) {
            req.user = users[req.tokenPayload.id];
        }
        if (req.user) {
            return next();
        } else {
            return res.status(401).json({
                status: 'error',
                code: 'unauthorized'
            });
        }
    }


    /**
     * Validate token for restricted routes
     */
    validateToken() {

    }


    /**
     * Sets up auth Schema
     */
    setModel() {
        this.userModel = db.Schema({
            local: {
                user_key: {
                    type: String,
                    required: false
                },
                user_secret: {
                    type: String,
                    required: false
                }
            }
        })

        // generating a hash
        this.userModel.methods.generateHash = function (password) {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
        }

        // checking if password is valid
        this.userModel.methods.validPassword = function (password) {
            return bcrypt.compareSync(password, this.local.password)
        }
    }

    getModel() {
        return (db.model('User', this.userModel))
    }
}

module.exports = new Authentication()
