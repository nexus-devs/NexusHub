/**
 * HTTP Route Configuration
 */
module.exports = (http) => {

    /**
     * Render API Documentation on index
     */
    http.app.get('/', (req, res) => {
        cli.log(process.env.api_id, 'ok', 'REST     | ' + req.ip + ' /', 'in')
        cli.log(process.env.api_id, 'ok', 'REST     | Documentation gonna be here', 'out')
        res.send('Documentation gonna be here')
    })
}
