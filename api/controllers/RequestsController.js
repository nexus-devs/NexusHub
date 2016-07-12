/**
 * RequestsController
 *
 * @description :: Server-side logic for managing requests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {
    index: function (req, res) {


        function GenerateItemsList(callback) {
            Requests.find().exec(function (err, dbItem) {
                    dbItem.forEach(function (user) {
                            user.requests.forEach(function (request) {
                                // Check Time between Request and now
                                var prevTime = new Date(request.updatedAt);
                                var thisTime = new Date();
                                var diff = thisTime.getTime() - prevTime.getTime();
                                var delta = (diff / (1000 * 60 * 60 * 24));

                                // Generate weekly item values
                                if (delta + 1 < 7) {
                                    Itemsweekly.find().exec(function (err, item) {
                                        console.log(item)

                                        // Create history collection with stats for day -> item controller generates weekly/monthly/full values on request (incl sockets updates) + maybe indexable makes it faster

                                        // contains every day (by number, e.g. '3' -> 3 days ago -> pos 7 - 3 in data array for weekly)

                                        // each day contains every item requested

                                        // findOrCreate ItemName in day of request distance (overrides from same day, keeps from older days)

                                        // wtbcount = wtbcount + 1 // or // wtscount = wtscount + 1
                                        // price = count * existing price / request price (!= null)
                                        // avg = avg price + 'p'

                                        // Item controller function:
                                        // If weekly: select arrays "1-7"
                                        // Transfer history data from selected arrays FOR REQUESTED ITEM to weekly
                                        // If monthly: same as above, into itemsmonthly collection
                                        // If all time: same as above, but select all arrays into itemsall collection
                                    })
                                }

                            })
                        })
                        //var itemcheck = JSON.stringify(dbItem)
                        //i++

                    // If found, redirect to proper url
                    //if (itemcheck !== '[]' && viewrendered == 'false') {
                    //    viewrendered = 'true'
                    //    var itembase = dbItem[0].Type
                    //    var itemname = dbItem[0].Title
                    //   return res.redirect(`../../${itembase}/${itemname}`)

                    // Else, if end of function: return 404
                    //} else {
                    //   if (viewrendered == 'false' && i == stringArray.length) {
                    //       res.notFound(`${fullstring} couldn't be found. Please check your spelling`)
                    //   }

                    // }

                    //next()

                }) // End Query
            callback();
        }

        function wait10sec() {
            setTimeout(function () {
                GenerateItemsList(wait10sec);
            }, 5555000);
        }

        GenerateItemsList(wait10sec);

    }
};
