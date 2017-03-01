/**
 * Logging
 */
const cli = require('../bin/logger.js')


module.exports = function (httpAdapter, auth, passport) {

    /**
     * Authentication endpoint to receive authorization token
     */
    httpAdapter.app.post('/auth', (req, res, next) => {
        auth.matchPassport(passport, req, res, next)
    })

    // Then set that token in the headers to access routes requiring authorization:
    // Authorization: Bearer <token here>
    httpAdapter.app.get('/message', (req, res) => {
        return res.json({
            status: 'ok',
            message: 'Congratulations ' + req.user.user_key + '. You have a token.'
        });
    });


    /**
     * Render API Documentation on index
     */
    httpAdapter.app.get('/', (req, res) => {
        cli.time('REST', '> ')
        cli.log('REST', 'ok', '/', 'in')
        cli.log('REST', 'ok', 'Documentation gonna be here', 'out')
        cli.timeEnd('REST', '> ')
        res.send('Documentation gonna be here')
    })


    /**
     * Items properties
     * Example: /warframe/v1/items/nikana prime/trends
     */
    httpAdapter.app.get('/warframe/v1/items/:item/:query', (req, res) => {
        httpAdapter.pass(req, res, ('items/' + req.params.item))
    })


    /**
     * If missing element in item query
     */
    httpAdapter.app.get('/warframe/v1/items/:query/', (req, res) => {
        httpAdapter.pass(req, res, 'items')
    })
}
