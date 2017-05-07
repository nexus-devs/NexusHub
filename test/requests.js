// Dependencies
let server = require('../testserver')
let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should()
chai.use(chaiHttp)

// Parent test
describe('Requests', () => {
    // Empty database before each test
    beforeEach((done) => {
        let MongoClient = require('mongodb').MongoClient

        MongoClient.connect('mongodb://localhost/warframe-nexus-test', function(err, db) {
            db.collection('requests', function(err, collection) {
                collection.remove({}, function(err, removed){})
            })
        })
    })
})