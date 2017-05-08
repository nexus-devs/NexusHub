// Dependencies
let query = require('../../npm-blitz-query/index.js')
let server = new query()
let chai = require('chai')
let should = chai.should()

/*process.on("unhandledRejection", (err) => {
    console.error(err)
})*/

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
    describe('/POST new request', () => {
        let userObj = {
            user: 'TestUser',
            price: 75,
            offer: 'Selling',
            item: 'Nikana Prime',
            component: 'Set',
            type: 'Prime'
        }

        it("it shouldn't insert because user is unauthorized", (done) => {
            server.post({url:'/warframe/v1/requests/new', data: userObj}).then((res) => {
                res.statusCode.should.equal(401)
                result(res).should.be.a('string')
                result(res).should.equal('Unauthorized')
                done()
            })
        })
    })
})

// result function
function result(res) {
    try {
        return JSON.parse(res.body)
    } catch(e) {
        return res.body
    }
}