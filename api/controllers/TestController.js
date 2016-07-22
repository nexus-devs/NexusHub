/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    create: function (req, res) {
        Test.find({name:'benis'}).exec(function (err, NikanaItems){
            if (err) {
                return res.negotiate(err);
            }
            sails.log('Wow, there are %d users named Finn.  Check it out:', NikanaItems.length, NikanaItems);
            return res.json(NikanaItems);
        });
    }

};

