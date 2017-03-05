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
const passport  = require('passport')
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
            user_id: 'AliasFalse',
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
    // RATE LIMITING for unauthenticated users will be IP-based
    // AUTHENTICATED USERS will have their role merged with default




/**
 * Describes interactions with mongo/redis for auth
 */
class Authentication {

    constructor() {
        this.secret = 'super secret'

        this.passport = passport

        this.configPassport()

        this.userModel;

        this.setModel()
    }


    /**
     * Passport Authentication Strategies
     */
    configPassport() {

        // Local Strategy
        this.passport.use(new LocalStrategy({
            usernameField: 'user_key',
            passwordField: 'user_secret',
            session: false
        }, (username, password, done) => {

            // match against "model"
            var user = users.filter(u => {
                return u.user_key === username && u.user_secret === password
            })

            // if user valid
            if (user.length === 1) {
                return done(null, user[0])
            } else {
                return done(null, false)
            }
        }))
    }


    /**
     * Force JWT auth on all routes
     * No token -> Default user
     */
    configExpress(app) {

        // Check Token on all routes
        app.use(ejwt({
            secret: this.secret,
            credentialsRequired: false,
            userProperty: 'tokenPayload'
        }).unless({
            path: ['/', '/auth']
        }))

        // Load user from db if token found
        app.use((req, res, next) => {
            if (req.tokenPayload) {

                console.log(req.tokenPayload) // IF EXPIRED: RETURN ERR?? (may do automatically already)

                req.user = users[req.tokenPayload.id];
            }
            if (req.user) {
                return next() // HOW TO RETURN USER?
            } else {
                return next() // default next function without passing user
            }
        })
    }


    /**
     * Check supplied user info & send token
     */
    matchPassport(req, res, next) {

        cli.log('Auth', 'ok', JSON.stringify(req.body), 'in')

        this.passport.authenticate('local', (err, user, info) => {
            if (err) return next(err)

            // No matching user found
            if (!user) {
                cli.log('Auth', 'err', '401. Unauthorized.', 'out')
                return res.status(401).json({
                    status: 'error',
                    code: 'unauthorized'
                })

            // User authenticated, send token
            } else {
                var token = jwt.sign({ id: user.id }, this.secret, {expiresIn: '1h'})
                cli.log('Auth', 'ok', '<token>', 'out')

                return res.json({
                    token: token,
                });
            }
        })(req, res, next);
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
