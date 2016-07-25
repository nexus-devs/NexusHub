module.exports = {
    index: function (req, res) {

        Itemcache.find(function (err, items) {
            var pop_old_1 = 0
            var pop_old_2 = 0
            var pop_old_3 = 0
            var pop_obj_1 = {}
            var pop_obj_2 = {}
            var pop_obj_3 = {}
            var pop_1 = ''
            var pop_2 = ''
            var pop_3 = ''

            // Random Number for last 2 entries (need some SEO)
            var ran_one = (Math.floor(Math.random() * (items.length)))
            var ran_two = (Math.floor(Math.random() * (items.length)))
            var ran_obj_1 = {}
            var ran_obj_2 = {}
            var i = 0

            items.forEach(function (item) {
                var popularity = (item.SupDemNum[0] + item.SupDemNum[1])

                if (i === ran_one){
                    ran_obj_1 = item
                }
                else if (i === ran_two){
                    ran_obj_2 = item
                }
                else if (popularity > pop_old_1) {
                    pop_obj_3 = pop_obj_2
                    pop_obj_2 = pop_obj_1
                    pop_old_1 = popularity
                    pop_obj_1 = item
                } else {
                    if (popularity > pop_old_2) {
                        pop_obj_3 = pop_obj_2
                        pop_old_2 = popularity
                        pop_obj_2 = item
                    } else {
                        if (popularity > pop_old_3) {
                            pop_old_3 = popularity
                            pop_obj_3 = item
                        }
                    }
                }
                i++
            })

            var pop_items = [pop_obj_1, pop_obj_2, pop_obj_3, ran_obj_1, ran_obj_2]

            return res.view('index', {
                content: pop_items,
                css: "/css/",
                js: "/js/",
                img: "/img/"
            });
        });
    }
};
