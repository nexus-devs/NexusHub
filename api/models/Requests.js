/**
 * Requests.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        username:{
            type: 'string',
        },
        item: {
            type: 'string',
            required: true,
        },
        comp: {
            type: 'string',
        },
        type: {
            type: 'string',
        },
        price: {
        },
        to: {
            type: 'string',
        },
        user:{
            type:'string',
        },
        password: {
            type:'string',
        }
    }

};

