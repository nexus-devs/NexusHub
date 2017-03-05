/**
 * HTTP Route Configuration
 */

module.exports = (http, auth) => {

    /**
     * Authentication endpoint to receive authorization token
     */
    http.app.post('/auth', (req, res, next) => {
        auth.matchPassport(req, res, next)
    })

    // Then set that token in the headers to access routes requiring authorization:
    // Authorization: Bearer <token here>
    http.app.get('/message', (req, res) => {
        return res.json({
            status: 'ok',
            message: 'Congratulations ' + req.user.user_key + '. You have a token.'
        })
    });


    /**
     * Render API Documentation on index
     */
    http.app.get('/', (req, res) => {
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
    http.app.get('/warframe/v1/items/:item/:query', (req, res) => {
        http.pass(req, res, ('items/' + req.params.item))
    })


    /**
     * If missing element in item query
     */
    http.app.get('/warframe/v1/items/:query/', (req, res) => {
        http.pass(req, res, 'items')
    })
}
