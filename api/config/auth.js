/**
 * Token based authentication using JWT & Passport
 */

/**
 * Connect to mongodb
 */
const db = require('mongoose').connect('mongodb://localhost/nexus-stats')


/**
 * Dependencies
 */
const LocalStrategy = require('passport-local').Strategy
const BearerStrategy = require('passport-http-bearer').Strategy


/**
 * Secret Secrecy
 */
const secret = 'super secret'
const bcrypt = require('bcryptjs')

var users = [
    {id: 0, username: 'test', password: 'test'}
]


/**
 * Describes interactions with mongo/redis for auth
 */
class Authentication {

    /**
     * Initialize Model
     */
    constructor() {

        this.userModel;

        this.setModel()
    }


    /**
     * Passport Authentication Strategies
     */
    configPassport(passport){

        // Local Strategy
        passport.use(new LocalStrategy(function (username, password, cb) {
            var user = users.filter(function (u) {
                return u.username === username && u.password === password
            });
            if (user.length === 1) {
                return cb(null, user[0]);
            } else {
                return cb(null, false);
            }
        }))
    }


    /**
     * Sets up auth Schema
     */
    setModel() {
        this.userModel = db.Schema({
            local: {
                username: {
                    type: String,
                    required: false
                },
                password: {
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
