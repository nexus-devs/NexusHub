/**
 * HTTP Route Configuration
 */

module.exports = (http, auth) => {

    /**
     * Render API Documentation on index
     */
    http.app.get('/', (req, res) => {
        cli.time('REST', '> ')
        cli.log('REST', 'ok', req.ip + ': /', 'in')
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
