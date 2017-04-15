/**
 * Default Development Values for Env Variables
 */

const fs = require('fs');

// Environment
process.env['environment'] = 'development' // replace this with proper development env
process.env['version'] = 'v0.1.0'

// Sentry
process.env['raven_url'] = "https://014cba089bca4e9f879bf5517f9dbb62@sentry.io/158565"

// Local Nodes
process.env['api_port'] = 3400
process.env['src_port'] = 3405
process.env['web_port'] = 3000

// Databases
process.env['redis_port'] = 6379
process.env['mongo_port'] = 27017
process.env['mongo_url'] = 'mongodb://localhost/nexus-stats'

// Secrets
process.env['cert'] = fs.readFileSync('./config/certs/auth_public.pem')
process.env['src_user'] = "Vf9W14UqTOceb6p6hTarH9LCbJCIKpY1PLUFHFj68cpWnLM91S2pzELKUc8bGn9I"
process.env['src_secret'] = "wSIKrCEldMIeKi7W6Q0ITHSAudnzXWYUEAEFe1HmZEbPcyjnW4VNjjuwxpmAB05C"
