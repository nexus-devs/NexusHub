/**
 * NexusBotController
 *
 * @description :: Server-side logic for managing Nexusbots
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res) {

        res.locals.flash = _.clone(req.session.flash);
        req.session.flash = {}; // clear flash


        var package = req.originalUrl;
        var data = require(`../../json/nexusbot.json`);

        return res.view('nexusbot', {
            content: data,
            page_title: data.PageTitle,
            main_title: data.Headline,
            desc: data.Desc,
            BotCHeadline: data.BotCommandHeadline,
            BotCDesc: data.BotCommandDesc,
            Note: data.Note,
            css: "/css/",
            js: "/js/",
            img: "/img/"
        });
    },

    create: function (req, res, next) {
        NexusBot.create(req.params.all(), function NexusBotCreated(err, user) {

            // Error
            if (err) {
                console.log(err)
                req.session.flash = {
                    err: err
                }

                return res.redirect('/nexusbot')
            }
            // Redirect on Success
            res.json(user);
            req.session.flash = {}
        })
    }
};
