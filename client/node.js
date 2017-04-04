/**
 * Globals
 */
global.cli = require('../config/log/logger.js')
cli.time(process.env.tst_id, cli.chalk.green('[connected]'))

/**
 * Test Client to simulate all kinds of requests
 */
const Nexus = require('../../nexus-stats-api/index.js')


class Client {
    constructor() {
        this.client = new Nexus({
            use_socket: true,
            user_key: 'TnKNwhSQ1n7XDxISYdo5qC555RBbt0T0H8uqWX7z8mU36J7lsCuyXBKg6CzMw58F',
            user_secret: 'JTl4A22PCebac6xVomRUQ6qEcs174NCzo9EdFI5mA1xwyrTX8aAra0UAxUSG0f8D'
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
                timestart: 3824983243892,
                timeend: 3894982348932
            }).then(item => {
                //cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
            })
        }
    }
}

module.export = new Client()
