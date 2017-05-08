// Dependencies
let query = require('../../npm-blitz-query/index.js')
/*let serverAuthed = new query({
    'user_key': 'Vf9W14UqTOceb6p6hTarH9LCbJCIKpY1PLUFHFj68cpWnLM91S2pzELKUc8bGn9I',
    'user_secret': 'wSIKrCEldMIeKi7W6Q0ITHSAudnzXWYUEAEFe1HmZEbPcyjnW4VNjjuwxpmAB05C'
})*/
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
    describe('/POST new request', () => {
        let userObj = {
            user: 'TestUser',
            price: 75,
            offer: 'Selling',
            item: 'Nikana Prime',
            component: 'Set',
            type: 'Prime'
        }

        let server = new query()

        it("it shouldn't insert because user is unauthorized", (done) => {
            server.post('/warframe/v1/requests/new', userObj).then((res) => {
                res.statusCode.should.equal(401)
                result(res).should.be.a('string')
                result(res).should.have.string('Unauthorized')
                done()
            }).catch((err) => done(err))
        })
        it("it shouldn't insert because request is wrong", (done) => {
            server.post('/warframe/v1/requests/new', {}).then((res) => {
                res.statusCode.should.equal(405)
                result(res).should.be.a('string')
                result(res).should.have.string('Invalid Request')
                done()
            }).catch((err) => done(err))
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