/**
 * RequestsController
 *
 * @description :: Server-side logic for managing requests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// Import Foreign Collections
var projectController = require('./ItemListController');

module.exports = {

    // Process Request
    create: function(req, res) {
         var request = req.body // catch data sent from python POST

         function ProcessRequest(err, request){

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


            // Check if component matches item
            function validity(item, component) {

                // If No component -> nothing to compare -> Full item
                if (REQ_Comp === 'null') {
                    var request_status = 'valid'
                } else {

                    // Find Item in ItemList & compare component array
                    ItemList.find({
                        title: item
                    }).exec(function (err, itemschema) {

                        // Set validity to false by default, changes when component is found
                        var request_status = 'false'
                        // Check if component found for each item in ItemList
                        itemschema.components.forEach(function (itemcomponent) {
                            if (itemcomponent === component) {
                                var request_status = 'valid'
                            }
                        })
                    })
                }

                // Return if the Component was found for the respective item
                return (request_status)
            }


            var request_validity = validity(REQ_Main, REQ_Comp)
            console.log(request_validity)

            // Do other stuff here, if validity === 'valid'



            // Clear current request
            Requests.destroy({})

            // Return info
            return res.json(request);
        }

        ProcessRequest('', request)
    }
};
