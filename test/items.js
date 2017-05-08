// Dependencies
let query = require('../../npm-blitz-query/index.js')
let chai = require('chai')
let should = chai.should()
let fs = require('fs')

// Database
const mongodb = require("mongodb").MongoClient
let db = null
mongodb.connect('mongodb://localhost/warframe-nexus-test', (err, connected) => {
    if(err) throw(err)
    db = connected
})

let objects = []
for (let i = 0; i < 7; i++) {
    let requestObj = {
        user: 'TestUser',
        price: 75,
        offer: Math.random() < 0.5 ? "Buying" : "Selling",
        item: 'Nikana Prime',
        component: 'Set',
        type: 'Prime',
        createdAt: new Date(new Date().getTime() - 1000*60*60*24*i)
    }
    objects.push(requestObj)
}

let items = []

// Parent test
describe('Items', () => {
    // Empty database before each test and fill with requests
    beforeEach((done) => {
        db.collection('requests', (err, collection) => {
            collection.remove({}, (err, removed) => {
                collection.insertMany(objects, (err, result) => {
                    done()
                })
            })
        })
    })

    // Empty database before each test and fill with item list
    beforeEach((done) => {
        db.collection('items', (err, collection) => {
            collection.remove({}, (err, removed) => {
                fs.readFile('test/itemlist.json', 'utf8', (err, data) => {
                    if (err) throw err
                    items = JSON.parse(data)
                    for (let i = 0; i < items.length; i++) {
                        items[i].updatedAt = new Date(items[i].updatedAt['$date'])
                    }
                    collection.insertMany(items, (err, result) => {
                        if (err) throw err
                        done()
                    })
                })
            })
        })
    })

    /*
    Test the item list
     */
    describe('/GET list', () => {
        it("it should get the correct item count", (done) => {
            let server = new query({
                "user_key":"uxC3zU2154HRTb5kAMYgs7KHbHGNve5LUgSt5mlVEAcFvQZDk2ikxd6KnuSxIC22",
                "user_secret":"Cvlke9Hsnxs4NmtQsRpAqwembfsiBlQh4CpSIexYKsYWTs5pSeKUhfkocsWqTeNH",
                "ignore_limiter": true
            })
            server.on('ready', () => {
                server.get('/warframe/v1/items/list').then((res) => {
                    res.statusCode.should.equal(200)
                    result(res).should.be.a('array')
                    result(res).should.have.length(items.length)
                    done()
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