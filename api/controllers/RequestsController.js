/**
 * RequestsController
 *
 * @description :: Server-side logic for managing requests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var projectController = require('./ItemListController');

module.exports = {
    create: function(req, res) {
         var request = req.body
         console.log(request)

         function ProcessRequest(err, request){
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

                console.log("item " + item)

                if (REQ_Comp === 'null') {
                    var request_status = 'valid'
                } else {

                    // Find Item in ItemList & compare component array
                    ItemList.find({
                        title: item
                    }).exec(function (err, itemschema) {
                        console.log("item " + item)
                        console.log(itemschema)
                        var request_status = 'false'
                        itemschema.components.forEach(function (itemcomponent) {
                            if (itemcomponent === component) {
                                var request_status = 'valid'
                            }
                        })
                    })
                }

                return (request_status)
            }


            console.log(validity(REQ_Main, REQ_Comp))

            // Do other stuff here, if validity === 'valid'



            // Clear current request
            Requests.destroy({})

            // Return info
            return res.json(request);
        }

        ProcessRequest('', request)
    }
};
