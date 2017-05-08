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

// Parent test
describe('Items', () => {
    // Empty database before each test
    beforeEach((done) => {
        db.collection('requests', (err, collection) => {
            collection.remove({}, (err, removed) => {
                collection.insertMany(objects, (err, result) => {
                    done()
                })
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