/**
 * Default Development Values for Env Variables
 */

const fs = require('fs');

// Environment
process.env['environment'] = 'development'

// Local Nodes
process.env['api_id'] = "API"
process.env['api_port'] = 3400
process.env['src_id'] = "SRC"
process.env['src_port'] = 3405
process.env['web_id'] = "WEB"
process.env['web_port'] = 3000

// Databases
process.env['redis_port'] = 6379
process.env['mongo_port'] = 27017

// Secrets
process.env['cert'] = fs.readFileSync('./config/certs/auth_public.pem')
