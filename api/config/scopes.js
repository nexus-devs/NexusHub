/**
 * Placeholder file for hierarchy of access scopes
 * Scopes are used to authorize access to certain endpoints
 */
 let basic = ['basic-read', 'basic-read-write']
 let elevated = ['elevated-read', 'elevated-read-write']
 let root = ['root-read', 'root-read-write']
 let scopes = basic.concat(elevated).concat(root)

module.exports = scopes
