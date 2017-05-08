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
                fs.readFile('itemlist.json', 'utf8', (err, data) => {
                    let json = JSON.parse(data)
                    items = json
                    collection.insertMany(json, (err, result) => {
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
        it("it should get ")
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