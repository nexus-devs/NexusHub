/**
 * FeedbackController
 *
 * @description :: Server-side logic for managing Feedbacks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res) {

        res.locals.flash = _.clone(req.session.flash);
        req.session.flash = {}; // clear flash

        return res.view('feedback', {
            css: "/css/",
            js: "/js/",
            img: "/img/",
            result: 'false'
        });
    },

    create: function (req, res) {
        Feedback.create(req.params.all(), function CreateFeedback(err, user) {

            // Error
            if (err) {
                console.log(err)
                req.session.flash = {
                    err: err
                }

                return res.redirect('/feedback')
            }
            // Redirect on Success
            return res.view('feedback', {
                // Input Data
                clanName: user.clanName,
                result: 'true',

                // Standard Data
                css: "../css/",
                js: "../js/",
                img: "../img/",
                flash: {}
            });
            req.session.flash = {}
        })
    }
};

