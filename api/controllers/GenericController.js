/**
 * GenericController
 *
 * @description :: Server-side logic for managing generics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    index: function (req, res) {
       var package = req.originalUrl;
       var data = require('../../json' + package + '.json');

        return res.view('generic',{
            content: data,
            page_title: data.PageTitle,
            main_title: data.Headline,
            title: "Title",
            desc: "Desc",
            css: "/css/",
            js: "/js/",
            img: "/img/"
        });
    }
};
