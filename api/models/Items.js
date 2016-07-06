/**
 * Items.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'prime',
    adapter: 'WARFRAMENEXUS',
    migrate: 'safe'

    Model.find({where: {id: { '>' : ['0'] }}, sort: 'id ASC' });

    //Item Model
    attributes: {
        "Title": {
            type: 'string'
        },
        "Type": {
            type: 'string'
        },
        "SupDem": {
            type: 'array'
        },
        "SupDemNum": {
            type: 'array'
        },
        "Components": [
            {
                "name": {
                    type: 'string'
                },
                "avg": {
                    type: 'string'
                },
                "data": {
                    type: 'array'
                },
                "fillOpacity": {
                    type: 'float',
                    defaultsTo: 0.15
                },
                "Comp_val_rt": "float"
            }
        ]
    }
};
