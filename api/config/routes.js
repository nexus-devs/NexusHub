module.exports = function (app, passport, httpAdapter, cli) {

    /**
     * Authentification endpoints
     * Necessary for local connections
     * Also used for higher rate limits
     */
    app.get('/authenticate', (req, res) => {
        cli.log('REST', 'warn', 'Auth attempted', 'in')
        res.send('Documentation gonna be here')
    })


    /**
     * Render API Documentation on index
     */
    app.get('/', (req, res) => {
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
    app.get('/warframe/v1/items/:item/:query', (req, res) => {
        httpAdapter.res(req, res, ('items/' + req.params.item))
    })


    /**
     * If missing element in item query
     */
    app.get('/warframe/v1/items/:query/', (req, res) => {
        httpAdapter.res(req, res, 'items')
    })


    app.get('/exit', (req, res) => {
        cli.log('Root', 'warn', 'Going down.', false)
        process.exit(0)
    })
}
