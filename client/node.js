/**
 * Globals
 */
global.cli = require('../config/log/logger.js')
cli.time(process.env.tst_id, cli.chalk.green('[connected]'))

const Nexus = require('../../nexus-stats-api/index.js')


/**
 * Test Client to simulate all kinds of requests
 */
class Client {
    constructor() {
        this.client = new Nexus({
            use_socket: true,
            user_key: 'P4dE2whXjcCobnv8vdifPPEstOSBPXBjyRSY0I9HVJFAeJg5ag239zJdmwmEIQMN',
            user_secret: 'jwZAbyVCUEI8w2opF3huddTBXWuQkKAvS0v9GtBFYrwLBY765d6DQVFy0QhR2OO4'
        })

        this.client.on('ready', () => {

            // Finish time measurement
            cli.timeEnd(process.env.tst_id, cli.chalk.green('[connected]'))

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
                //timestart: 3824983243892,
                timeend: '3894982348932'
            }).then(item => {
                //cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
            })
        }
    }
}

module.export = new Client()
