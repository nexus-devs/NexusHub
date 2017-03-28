/**
 * Item Endpoints for recognition by RequestController
 * URL: api.nexus-stats.com/v1/items
 * Scope Types: private (local only), protected (for verified users), public
 */

const moment = require('moment')

module.exports = {
    'statistics': {
        method: 'getItemStats',
        target: 'dbs-local',
        scope: 'public',
        params: {
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
        target: 'dbs-local',
        scope: 'public',
        params: {
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
        target: 'dbs-local',
        scope: 'public',
        params: {
            name: {
                type: 'string',
                default: '',
                required: true
            }
        }
    }
}
