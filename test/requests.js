// Dependencies
let query = require('blitz-js-query')
let server = new query()
let chai = require('chai')
let should = chai.should()

// Parent test
describe('Requests', () => {
    // Empty database before each test
    beforeEach((done) => {
        let MongoClient = require('mongodb').MongoClient

        MongoClient.connect('mongodb://localhost/warframe-nexus-test', (err, db) => {
            db.collection('requests', (err, collection) => {
                collection.remove({}, (err, removed) => {
                    done()
                })
            })
        })
    })

    /*
     Test the /GET route
     */
    describe('/GET request', () => {
        it('it should GET all requests', (done) => {
            server.get('/warframe/v1/items/Nikana Prime/statistics').then((res) => {
                res.body.should.be.a('array')
                res.statusCode.should.equal(200)
                done()
            })
        })
    })
})
