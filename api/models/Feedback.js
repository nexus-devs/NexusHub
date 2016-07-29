/**
 * Feedback.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        comment: {
            type: 'string',
            required: true,
        },
        title: {
            type: 'string',
            required: true,
        },
        toJSON: function () {
            var obj = this.toObject();
            delete obj.name;
            delete obj._csrf;
            return obj;
        }
    }
};
