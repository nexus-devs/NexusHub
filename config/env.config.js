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
process.env['src_user'] = "cBRZWiFh6vZWnRrOhxTv8afuuk06S2X7yuHzCqk2fJZwNnEAXoP3LNd0L3ktLOSd"
process.env['src_secret'] = "XsgD8QuGzUlBdeJDdJAdviK0llHOmxUgHG5T1FECnaliQ57HBA9YqvojQBIfLyKc"
process.env['web_id'] = "WEB"
process.env['web_port'] = 3000
process.env['test_id'] = "TST"

// Databases
process.env['redis_port'] = 6379
process.env['mongo_port'] = 27017

// Secrets
process.env['cert'] = fs.readFileSync('./config/certs/auth_public.pem')
