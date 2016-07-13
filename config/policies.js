module.exports.policies = {

    '*': true,

    'RequestsController': {
        '*': 'isAuthenticated'
    },

};
