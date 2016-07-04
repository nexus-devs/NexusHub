/**
 * Items.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    //Item Model
    attributes: {
                "Title": "Nikana",
                "Type": "Prime",
                "SupDem": [28, 72],
                "SupDemNum": [4345, 13349],
                "Components": [
                    {
                        "name": "Blueprint",
                        "avg": "35p",
                        "data": [55, 50, 55, 50, 65, 55, 65],
                        "fillOpacity": 0.15,
                        "Comp_val_rt": "real time price"
            },
                    {
                        "name": "Blade",
                        "avg": "35p",
                        "data": [35, 30, 25, 30, 25, 35, 45],
                        "fillOpacity": 0.15,
                        "Comp_val_rt": "real time price"
            },
                    {
                        "name": "Handle",
                        "avg": "35p",
                        "data": [15, 20, 15, 10, 15, 15, 15],
                        "fillOpacity": 0.15,
                        "Comp_val_rt": "real time price"
            }
        ]
        }
};
