/**
 * HTTP Route Configuration
 */
module.exports = (http) => {

    /**
     * Render API Documentation on index
     */
    http.app.get('/', (req, res) => {
        cli.time(process.env.api_id, '> ')
        cli.log(process.env.api_id, 'ok', 'REST     | ' + req.ip + ' /', 'in')
        cli.log(process.env.api_id, 'ok', 'REST     | Documentation gonna be here', 'out')
        cli.timeEnd(process.env.api_id, '> ')
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
