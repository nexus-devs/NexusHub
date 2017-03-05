/**
 * Item Endpoints for recognition by RequestController
 * URL: api.nexus-stats.com/v1/items
 * Scope Types: private (local only), protected (for verified users), public
 */

const moment = require('moment')

module.exports = {
    'statistics': {
        method: 'getItemStats',
        target: 'coreDB',
        scope: 'public',
        attributes: {
            component: {
                type: 'string',
                default: '',
                required: false
            },
            timeStart: {
                type: 'object',
                default: moment().toJSON(),
                required: false
            },
            timeEnd: {
                type: 'object',
                default: moment().subtract(21, 'day').toJSON(),
                required: false
            }
        }
    },
    'list': {
        method: 'getList',
        target: 'coreDB',
        scope: 'public',
        attributes: {
            timeStart: {
                type: 'object',
                default: moment().toJSON(),
                required: false
            },
            timeEnd: {
                type: 'object',
                default: moment().subtract(21, 'day').toJSON(),
                required: false
            }
        }
    },
    'fuzzy-list': {
        method: 'getFuzzyList',
        target: 'coreDB',
        scope: 'public',
        attributes: {
            name: {
                type: 'string',
                default: '',
                required: true
            }
        }
    }
}
