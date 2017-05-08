// Dependencies
let query = require('../../npm-blitz-query/index.js')
let chai = require('chai')
let should = chai.should()

// Database
const mongodb = require("mongodb").MongoClient
let db = null
mongodb.connect('mongodb://localhost/warframe-nexus-test', (err, connected) => {
    if(err) throw(err)
    db = connected
})

// Parent test
describe('Requests', () => {
    // Empty database before each test
    beforeEach((done) => {
        db.collection('requests', (err, collection) => {
            collection.remove({}, (err, removed) => {
                done()
            })
        })
    })

    /*
     Test the /POST route
     */
    describe('/POST new requests', () => {
        let userObj = {
            user: 'TestUser',
            price: 75,
            offer: 'Selling',
            item: 'Nikana Prime',
            component: 'Set',
            type: 'Prime'
        }

        it("it shouldn't insert because user is unauthorized", (done) => {
            let server = new query({
                "user_key":"uxC3zU2154HRTb5kAMYgs7KHbHGNve5LUgSt5mlVEAcFvQZDk2ikxd6KnuSxIC22",
                "user_secret":"Cvlke9Hsnxs4NmtQsRpAqwembfsiBlQh4CpSIexYKsYWTs5pSeKUhfkocsWqTeNH",
                'ignore_limiter': true
            })
            server.on('ready', () => {
                server.post('/warframe/v1/requests/new', userObj).then((res) => {
                    res.statusCode.should.equal(401)
                    result(res).should.be.a('string')
                    result(res).should.have.string('Unauthorized')
                    done()
                }).catch((err) => done(err))
            })
        })

        it("it should insert 10 request", (done) => {
            let server = new query({
                'user_key': 'Vf9W14UqTOceb6p6hTarH9LCbJCIKpY1PLUFHFj68cpWnLM91S2pzELKUc8bGn9I',
                'user_secret': 'wSIKrCEldMIeKi7W6Q0ITHSAudnzXWYUEAEFe1HmZEbPcyjnW4VNjjuwxpmAB05C',
                'ignore_limiter': true
            })
            server.on('ready', () => {
                for (let i = 0; i < 9; i++) {
                    server.post('/warframe/v1/requests/new', userObj).then((res) => {
                        res.statusCode.should.equal(200)
                        result(res).should.be.a('string')
                        result(res).should.have.string('Request processed')
                    }).catch((err) => done(err))
                }
                server.post('/warframe/v1/requests/new', userObj).then((res) => {
                    res.statusCode.should.equal(200)
                    result(res).should.be.a('string')
                    result(res).should.have.string('Request processed')
                    db.collection('requests').count((err, count) => {
                        count.should.equal(10)
                        done()
                    })
                }).catch((err) => done(err))
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

// response obj function
function response(res) {
    res.body = res.body.match(/\(([^)]+)\)/)[1]
    return result(res)
}