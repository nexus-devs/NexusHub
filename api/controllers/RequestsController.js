/**
 * RequestsController
 *
 * @description :: Server-side logic for managing requests
 *                 Validates requests from python POST, generates list of users and their respective requests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



// Import Dependencies
var bcrypt = require('bcryptjs');
var fs = require('fs');


module.exports = {

    // Request Processing
    // -------------------------------------------------
    create: function (req, res) {
        var request = req.body // catch data sent from python POST

        function ProcessRequest(err, request) {


            //Convert data from Python to similar variables
            var REQ_User = request.username;
            var REQ_TO = request.to;
            var REQ_Main = request.item;
            var REQ_Type = request.type;
            var REQ_Comp = request.comp;
            var REQ_Price = request.price;
            var REQ_Obj = {
                user: REQ_User,
                requests: [{
                    title: REQ_Main,
                    type: REQ_Type,
                    updatedAt: new Date(),
                    components: [{
                        to: REQ_TO,
                        name: REQ_Comp,
                        data: REQ_Price
                    }]
                }]
            }

            // Error Handling
            if (err) {
                return res.negotiate(err);
            }


            // Request Processing Main Functions
            async.waterfall([

                    // Get local pwd
                    function getPwd(callback) {
                    Root.find({
                        user: request.user
                    }).exec(function (err, user) {
                        if (err) {
                            callback(err, null)
                            return
                        }
                        callback(null, user[0].pass)
                    });
                    },


                    // Compare Passwords
                    function authenticate(pass, callback) {
                    //console.log(hash)
                    if (request.user === 'python' && bcrypt.compareSync(request.password, pass) === true) {
                        callback();
                    } else {
                        console.log('Connection to Requests forbidden.')
                        res.forbidden()
                    }
                    },


                    // Get itemschema from itemlist
                    function generateItemSchema(callback) {
                    ItemList.find({
                        name: REQ_Main
                    }).exec(function (err, itemschema) {
                        if (err) {
                            callback(err, null)
                            return
                        }
                        callback(null, itemschema)
                    });
                    },


                    // Check if requested item component exists
                    function validateItemComponent(itemschema, callback) {
                    var request_status = 'false'

                    // Component not given
                    if (REQ_Comp === 'Set') {
                        var request_status = 'valid'
                        callback(null, request_status)

                        // Component is given
                    } else {

                        // Check if component found for each item in itemschema
                        itemschema[0].components.forEach(function (itemcomponent) {
                            if (itemcomponent === REQ_Comp && itemschema[0].type === REQ_Type) {
                                var request_status = 'valid'
                                callback(null, request_status)
                            }
                        })
                    }
                    },


                    // Cancel if request is invalid
                    function cancelOnError(request_status, callback) {
                    if (request_status === 'valid') {
                        callback();
                    } else {
                        return res.forbidden();
                    }
                    },


                    // Ensure user exists. If not, create
                    function updateUserList(callback) {
                    Users.find({
                        user: REQ_User
                    }).exec(function (err, user) {
                        if (typeof user[0] === 'undefined') {
                            Users.create({
                                user: REQ_User
                            }).exec(function createCB(err, created) {
                                console.log('Created user with name ' + created.user);
                            });
                        } else {
                            console.log(REQ_User + ' already in db')
                        }
                        callback();
                    })
                    },


                    // Create Request entries
                    function createEntries(callback) {
                    Users.find({
                        user: REQ_User
                    }).exec(function (err, request) {
                        console.log(request)
                        if (typeof request[0] !== 'undefined') {
                            Users.native(function (err, collection) {
                                collection.insert(REQ_Obj),
                                    function (error, result) {
                                        console.log(result);
                                    }
                            })
                        }
                    })

                    // if req_item exists > if date larger 1 > create new + component
                    // else if req_item exists > if date smaller 1 > update values / create component if not exist
                    // else > if req_item NOT exist > create new + component
                    callback();
                                },

                                // final logs
                                function showResults(callback) {
                    console.log(REQ_Main + ' ' + REQ_Comp)
                    console.log('valid')
                    console.log('--------------')

                    // Return info
                    return res.json(request);
                                }
                            ])
        }

        // Call function above
        ProcessRequest('', request)
    }
}
