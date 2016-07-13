/**
 * RequestsController
 *
 * @description :: Server-side logic for managing requests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var projectController = require('./ItemListController');

module.exports = {
    create: function (req, res) {

        Requests.create(req.body, function NexusBotCreated(err, request) {

            if (err) {
                return res.negotiate(err);
            }

            function GenerateItemsList(callback) {
                var REQ_User = request.username;
                var REQ_TO = request.to;
                var REQ_Main = request.item;
                var REQ_Type = request.type;
                var REQ_Comp = request.comp;
                var REQ_Price = request.price;


                // Check if component matches item
                function validity(item, component) {

                    if (REQ_Comp === 'null') {
                        var request_status = 'valid'
                    } else {

                        // Find Item in ItemList & compare component array
                        ItemList.find({
                            title: item
                        }).exec(function (err, itemschema) {
                            console.log("item" + item)
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



                callback();
            }

            function wait10sec() {
                setTimeout(function () {
                    GenerateItemsList(wait10sec);
                }, 5555000);
            }

            GenerateItemsList(wait10sec);


            // Clear tmp request
            Requests.destroy({})

            return res.json(request);
        });
    }
};
