/**
 * Default Development Values for Env Variables
 */

const fs = require('fs');

// Environment
process.env['environment'] = 'development'

// Local Nodes
process.env['api_id'] = "API"
process.env['api_port'] = 3400
process.env['src_id'] = "COR"
process.env['src_port'] = 3405
process.env['src_user'] = "alaIz8cqU7cv2d336ssww28f0DufMbdJaMXZyg6BlaSiK453pspSygd81X5kLYMk"
process.env['src_secret'] = "DNQt6oBMzTisRPHDXqbpxqEYpvtlpn2aHLMuKdEJMnrFNi6qxP87Al9iS3eP9Yui"
process.env['web_id'] = "WEB"
process.env['web_port'] = 3000
process.env['tst_id'] = "TST"

// Databases
process.env['redis_port'] = 6379
process.env['mongo_port'] = 27017

// Secrets
process.env['cert'] = fs.readFileSync('./config/certs/auth_public.pem')
