/**
 * Globals
 */
global.cli = require('../config/log/logger.js')
cli.time(process.env.test_id, cli.chalk.green('[connected]'))

/**
 * Test Client to simulate all kinds of requests
 */
const Nexus = require('../../nexus-stats-api/index.js')


class Client {
    constructor() {
        this.client = new Nexus({
            use_socket: false,
            user_key: 't8urhaKsLBpIZ7xLeRCDtlPFaeX5oRXArPjR7aynSAxsB4Rz8HWhe7dKQdcMuZHq',
            user_secret: '1jRBkbi9MCTZUXj14VcIHry0q9lWEA7PbfSY5czdKfA4jEL0Nq55QEu4AoHEdprq'
        })

        this.client.on('ready', () => {

            // Finish time measurement
            cli.timeEnd(process.env.test_id, cli.chalk.green('[connected]'))

            // Launch test requests
            this.test()
        })
    }


    /**
     * Test Commands
     */
    test() {

        // Token Expiration Test
        setTimeout(() => {
            this.client.getItem('Nikana Prime').then(item => {
                cli.log(process.env.tst_id, 'neutral', 'API      | ' + item ? item.toString() : item, 'in')
            })
        }, 15000)

        // Token Expiration Test
        setTimeout(() => {
            this.client.getItem('Nikana Prime').then(item => {
                cli.log(process.env.tst_id, 'neutral', 'API      | ' + item ? item.toString() : item, 'in')
            })
        }, 25000)

        // Circumvent standard module connection & send malformed request
        //this.client.connection.client.socket.emit("GET", "yourmom", ack => {
        //    console.log('\n' + ack.body)
        //})

        // Rate Limit Testing
        for (var i = 0; i < 15; i++) {
            this.client.getItem('Nikana Prime', {
                component: "Blade",
                timestart: 3824983243892,
                timeend: 3894982348932
            }).then(item => {
                //cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
            })
        }
    }
}

module.export = new Client()
