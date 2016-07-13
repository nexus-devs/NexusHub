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



            // Check if component matches item

            if (REQ_Comp === 'null') {
                var request_status = 'valid'
            } else {


                ItemList.find({
                    name: REQ_Main
                }).exec(function (err, itemschema) {
                    var request_status = 'false'

                    // Check if component found for each item in ItemList
                    itemschema[0].components.forEach(function (itemcomponent) {
                        if (itemcomponent === REQ_Comp) {
                            var request_status = 'valid'
                        }
                    })
                })
            }


            // Check Validity for Request
            console.log(request_status)

            // Do other stuff here, if validity === 'valid'



            // Clear current request
            Requests.destroy({})

            // Return info
            return res.json(request);
        }

        ProcessRequest('', request)
    }
};
