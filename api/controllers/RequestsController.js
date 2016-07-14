/**
 * RequestsController
 *
 * @description :: Server-side logic for managing requests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



// Import Foreign Collections
var projectController = require('./ItemListController');



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

            console.log(REQ_Main + ' ' + REQ_Comp)



            async.waterfall([
                function generateItemSchema(callback) {
                    ItemList.find({ name: REQ_Main }).exec(function (err, itemschema) {
                        if (err) {
                            callback(err, null);
                            return;
                        }
                        callback(null, itemschema);
                    });
                },
                function validateItemComponent(itemschema, callback) {

                    // Component not given
                    if (REQ_Comp === 'null') {
                        var request_status = 'valid'
                        callback(null, request_status)

                    // Component is given
                    } else {
                        var request_status = 'false'

                        // Check if component found for each item in itemschema
                        itemschema[0].components.forEach(function (itemcomponent) {
                            if (itemcomponent === REQ_Comp) {
                                var request_status = 'valid'
                                callback(null, request_status)
                            }
                            // else: if itemschema len at end ++ request status 'false' -> callback error
                        })
                    }
                },
                function showResults(request_status, callback) {
                    console.log(request_status)
                    console.log('--------------')

                    // Clear current request
                    Requests.destroy({})

                    // Return info
                    return res.json(request);
                }
                ])
        }
        ProcessRequest('', request)
    }
}
