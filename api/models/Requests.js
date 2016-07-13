/**
 * Requests.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcryptjs');

module.exports = {

    schema: true,

    attributes: {
        item: {
            type: 'string',
            required: true,
        },
        comp: {
            type: 'string',
            required: true,
        },
        type: {
            type: 'string',
            required: true,
        },
        price: {
            type: 'integer',
            required: true,
        },
        to: {
            type: 'string',
            required: true,
        },
        user: {
            type: "string",
            required: true,
            unique:true
        },
        password: {
            type: "string",
            required:true
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },
    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    }
};

