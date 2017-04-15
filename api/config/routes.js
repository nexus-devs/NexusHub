/**
 * HTTP Route Configuration
 */
module.exports = (http) => {

    /**
     * Render API Documentation on index
     */
    http.app.get('/', (req, res) => {
        res.send('Documentation gonna be here')
    })

    /**
     * Other Routes are created dynamically via events.js config
     */
}
