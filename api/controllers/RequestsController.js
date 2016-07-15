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

            // Error Handling
            if (err) {
                return res.negotiate(err);
            }


            // Request Processing Main Functions
            async.waterfall([

                    // Get local pwd
                    function getPwd(callback) {
                    Root.find(
                        {user: request.user}
                    ).exec(function (err, user) {
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
                            if (itemcomponent === REQ_Comp) {
                                var request_status = 'valid'
                                callback(null, request_status)
                            }
                        })
                    }
                    },


                    // Cancel if request is invalid
                    function cancelOnError(request_status, callback) {
                    if (request_status === 'valid') {
                        callback(null, request_status);
                    } else {
                        return res.forbidden();
                    }
                    },


                    //function updateUserList(callback) {
                    // -------------------------------------------------------------------------
                    // Generate WTB/WTS list here. Item is confirmed to be valid at tihs point.
                    // -------------------------------------------------------------------------
                    //},

                    // final logs
                    function showResults(request_status, callback) {
                    console.log(REQ_Main + ' ' + REQ_Comp)
                    console.log(request_status)
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
