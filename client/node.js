/**
 * Test Client to simulate all kinds of requests
 */
const Nexus = require('../nexus-stats-api/index.js')

class Client {
    constructor() {
        this.client = new Nexus({
            game: 'warframe',
            use_socket: true,
            //ignore_limiter: true, // Root-Access not getting limited anyway
            user_key: 'Xp1D1zBl6SpPLCQCFeG2VwnDTe3JC9LImZywghBspieNaNTkPSGNTEoVXavM2wPK',
            user_secret: 'y5Ygb3zhK8c5YiC2G27Gd4Dafj0ePuIExZ3YzwdrcomSloSxVMc2AD8aUkI190fn'
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
                cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
            })
        }, 15000)

        // Token Expiration Test
        setTimeout(() => {
            this.client.getItem('Nikana Prime').then(item => {
                cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
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

modules.export = new Client()
