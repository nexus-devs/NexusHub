#!/usr/bin/env node

/**
 * Start Logging Timers
 */
global.cli = require('../config/log/logger.js')
cli.time(process.env.src_id, cli.chalk.reset("Port: " + process.env.src_port) + cli.chalk.green(' [online]'))


/**
 * Load Nexus API
 */
const Nexus = require('../../nexus-stats-api/index.js')
const api = new Nexus({
    game: 'warframe',
    use_socket: true,
    //ignore_limiter: true, // Root-Access not getting limited anyway

    // Example Credentials taken from <nexus-auth>/register
    user_key: 'alaIz8cqU7cv2d336ssww28f0DufMbdJaMXZyg6BlaSiK453pspSygd81X5kLYMk',
    user_secret: 'DNQt6oBMzTisRPHDXqbpxqEYpvtlpn2aHLMuKdEJMnrFNi6qxP87Al9iS3eP9Yui'
})

cli.timeEnd(process.env.src_id, cli.chalk.reset("Port: " + process.env.src_port) + cli.chalk.green(' [online]'))


/**
 * When connected to API
 */
api.on('ready', () => {

    // Token Expiration Test
    setTimeout(() => {
        api.getItem('Nikana Prime').then(item => {
            cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
        })
    }, 15000)

        // Token Expiration Test
    setTimeout(() => {
        api.getItem('Nikana Prime').then(item => {
            cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
        })
    }, 25000)


    //api.connection.client.socket.emit("GET", "yourmom", ack => {
    //    console.log('\n' + ack.body)
    //})

    /**
     * get nikana prime stats test command
     */
    for(var i = 0; i < 10; i++){
    api.getItem('Nikana Prime', {component: "Blade"}).then(item => {
        //cli.log(process.env.src_id, 'neutral', 'API      | ' + item, 'in')
    })
    }
})
