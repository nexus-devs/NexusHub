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
            //use_socket: false,
            //ignore_limiter: true,
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


        // Send POST manually while none in api package
        this.client.connection.client.socket.emit("POST", {
                url: "https://api.nexus-stats.com/warframe/v1/items/request",
                body: {test: "test"}
        }, ack => {
            //console.log('\n' + ack.body)
        })

        //this.client.connection.client.send('POST', 'http://localhost:3400/warframe/v1/items/request', //{test: "test"})


        // Emit without callback
        //this.client.connection.client.socket.emit("GET", "trololo")
        //this.client.connection.client.socket.on("res", data => console.log(data))


        // Rate Limit Testing
        for (var i = 0; i < 15000; i++) {
            this.client.getItem('Nikana Prime', {
                component: "Blade",
                //timestart: 3824983243892,
                timeend: 3894982348932
            }).then(item => {
                //cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
            }).catch(err => {
                console.log('Error: ' + err.body)
            })
        }
    }
}

module.export = new Client()
