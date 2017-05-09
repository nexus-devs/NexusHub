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
let timestart = new Date().getTime()
let timeend = new Date().getTime()
for (let i = 0; i < 50; i++) {
    let requestObj = {
        user: 'TestUser' + i,
        price: 75,
        offer: Math.random() < 0.5 ? "Buying" : "Selling",
        item: 'Nikana Prime',
        component: 'Set',
        type: 'Prime',
        createdAt: new Date(new Date().getTime() - 1000*60*60*24*i)
    }
    timeend = requestObj.createdAt.getTime() - 1
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

        it("it should have no duplicate items", (done) => {
            let server = new query({
                "user_key":"pMsMWnSl6g9RzIXmedhiuWwCJnX48M7Goq6Gg5PRXfyYCcNUuBLZM0cUcEfzOyrS",
                "user_secret":"tRD0CaE1sWVND3DzpQQEPiAzp4TciwZ01jsNcPMCozVKklxQC3m41oGYnMnvNBLq",
                "ignore_limiter": true
            })
            server.on('ready', () => {
                server.get('/warframe/v1/items/list').then((res) => {
                    res.statusCode.should.equal(200)
                    result(res).should.be.a('array')
                    let duplicates = []
                    for (let i = 0; i < result(res).length; i++) {
                        if (duplicates.indexOf(result(res)[i].name) == -1) duplicates.push(result(res)[i].name)
                    }
                    duplicates.should.have.length(result(res).length)
                    done()
                }).catch((err) => done(err))
            })
        })
    })

    /*
    Test the item statistics
     */
    describe('/GET statistics', () => {
        it("it shouldn't get a result because rate limitation", (done) => {
            let server = new query({
                "user_key":"uxC3zU2154HRTb5kAMYgs7KHbHGNve5LUgSt5mlVEAcFvQZDk2ikxd6KnuSxIC22",
                "user_secret":"Cvlke9Hsnxs4NmtQsRpAqwembfsiBlQh4CpSIexYKsYWTs5pSeKUhfkocsWqTeNH",
                "ignore_limiter": true
            })
            server.on('ready', () => {
                server.get('/warframe/v1/items/Nikana Prime/statistics').then((res) => {
                    res.statusCode.should.equal(200)
                    done()
                }).catch((err) => done(err))
                server.get('/warframe/v1/items/Nikana Prime/statistics').then((res) => {
                    res.statusCode.should.equal(429)
                    done()
                }).catch((err) => done(err))
            })
        })

        it("it should have the correct formatting and names", (done) => {
            let server = new query({
                "user_key":"Vf9W14UqTOceb6p6hTarH9LCbJCIKpY1PLUFHFj68cpWnLM91S2pzELKUc8bGn9I",
                "user_secret":"wSIKrCEldMIeKi7W6Q0ITHSAudnzXWYUEAEFe1HmZEbPcyjnW4VNjjuwxpmAB05C",
                "ignore_limiter": true
            })
            server.on('ready', () => {
                server.get('/warframe/v1/items/Nikana Prime/statistics?timeend='+timeend).then((res) => {
                    res.statusCode.should.equal(200)
                    res = result(res)
                    res.should.be.a('object')
                    res.title.should.equal('Nikana Prime')
                    res.type.should.equal('Prime')
                    res.components.should.be.a('array')
                    res.supply.should.be.a('object')
                    res.demand.should.be.a('object')
                    for (let i = 0; i < res.components.length; i++) {
                        res.components[i].interval.should.be.a('array')
                        res.components[i].supply.should.be.a('object')
                        res.components[i].demand.should.be.a('object')
                        for (let j = 0; j < res.components[i].interval.length; j++) {
                            res.components[i].interval[j].should.be.a('object')
                            res.components[i].interval[j].supply.should.be.a('object')
                            res.components[i].interval[j].demand.should.be.a('object')
                        }
                    }
                    done()
                }).catch((err) => done(err))
            })
        })

        it("it should have intervals with a day each", (done) => {
            let server = new query({
                "user_key":"Vf9W14UqTOceb6p6hTarH9LCbJCIKpY1PLUFHFj68cpWnLM91S2pzELKUc8bGn9I",
                "user_secret":"wSIKrCEldMIeKi7W6Q0ITHSAudnzXWYUEAEFe1HmZEbPcyjnW4VNjjuwxpmAB05C",
                "ignore_limiter": true
            })
            server.on('ready', () => {
                server.get('/warframe/v1/items/Nikana Prime/statistics?timeend='+timeend).then((res) => {
                    res.statusCode.should.equal(200)
                    res = result(res)
                    res.should.be.a('object')
                    res.components.should.have.length(1)
                    res.components[0].interval.should.have.length(7)
                    for (let i = 0; i < 7; i++) {
                        res.components[0].interval[i].avg.should.equal(objects[i].price)
                    }
                    done()
                }).catch((err) => done(err))
            })
        })

        it("it should have the correct count and percentages", (done) => {
            let server = new query({
                "user_key":"Vf9W14UqTOceb6p6hTarH9LCbJCIKpY1PLUFHFj68cpWnLM91S2pzELKUc8bGn9I",
                "user_secret":"wSIKrCEldMIeKi7W6Q0ITHSAudnzXWYUEAEFe1HmZEbPcyjnW4VNjjuwxpmAB05C",
                "ignore_limiter": true
            })
            server.on('ready', () => {
                server.get('/warframe/v1/items/Nikana Prime/statistics?timeend='+timeend).then((res) => {
                    res.should.be.a('object')
                    res.statusCode.should.equal(200)
                    res = result(res)
                    let sumCount = res.supply.count + res.demand.count
                    sumCount.should.equal(objects.length)
                    res.supply.percentage.should.equal(res.supply.count / sumCount)
                    res.demand.percentage.should.equal(res.demand.count / sumCount)
                    done()
                }).catch((err) => done(err))
            })
        })

        it("it should have correct component avg/min/max", (done) => {
            let requestObj = {
                user: 'OtherTestUser',
                price: objects[0].price - 10,
                offer: Math.random() < 0.5 ? "Buying" : "Selling",
                item: 'Nikana Prime',
                component: 'Set',
                type: 'Prime',
                createdAt: new Date()
            }
            let requestObj2 = {
                user: 'OtherTestUser2',
                price: objects[0].price + 10,
                offer: Math.random() < 0.5 ? "Buying" : "Selling",
                item: 'Nikana Prime',
                component: 'Set',
                type: 'Prime',
                createdAt: new Date()
            }
            db.collection('requests', (err, collection) => {
                collection.insertMany([requestObj, requestObj2], (err, r) => {
                    if (err) done(err)

                    let server = new query({
                        "user_key":"Vf9W14UqTOceb6p6hTarH9LCbJCIKpY1PLUFHFj68cpWnLM91S2pzELKUc8bGn9I",
                        "user_secret":"wSIKrCEldMIeKi7W6Q0ITHSAudnzXWYUEAEFe1HmZEbPcyjnW4VNjjuwxpmAB05C",
                        "ignore_limiter": true
                    })
                    server.on('ready', () => {
                        server.get('/warframe/v1/items/Nikana Prime/statistics?timeend='+timeend).then((res) => {
                            res.should.be.a('object')
                            res.statusCode.should.equal(200)
                            result(res).components[0].avg.should.equal(objects[0].price)
                            result(res).components[0].min.should.equal(requestObj.price)
                            result(res).components[0].max.should.equal(requestObj2.price)
                            done()
                        }).catch((err) => done(err))
                    })
                })
            })
        })

        it("it should correctly prevent price spoofing", (done) => {
            let minSpoofObj = {
                user: 'OtherTestUser',
                price: objects[0].price*0.8,
                offer: Math.random() < 0.5 ? "Buying" : "Selling",
                item: 'Nikana Prime',
                component: 'Set',
                type: 'Prime',
                createdAt: new Date()
            }
            let maxSpoofObj = {
                user: 'OtherTestUser2',
                price: objects[0].price*10,
                offer: Math.random() < 0.5 ? "Buying" : "Selling",
                item: 'Nikana Prime',
                component: 'Set',
                type: 'Prime',
                createdAt: new Date()
            }
            db.collection('requests', (err, collection) => {
                collection.insertMany([minSpoofObj, maxSpoofObj], (err, r) => {
                    if (err) done(err)

                    let server = new query({
                        "user_key":"Vf9W14UqTOceb6p6hTarH9LCbJCIKpY1PLUFHFj68cpWnLM91S2pzELKUc8bGn9I",
                        "user_secret":"wSIKrCEldMIeKi7W6Q0ITHSAudnzXWYUEAEFe1HmZEbPcyjnW4VNjjuwxpmAB05C",
                        "ignore_limiter": true
                    })
                    server.on('ready', () => {
                        server.get('/warframe/v1/items/Nikana Prime/statistics?timeend='+timeend).then((res) => {
                            res.should.be.a('object')
                            res.statusCode.should.equal(200)
                            result(res).components[0].min.should.not.equal(minSpoofObj.price)
                            result(res).components[0].max.should.not.equal(maxSpoofObj.price)
                            done()
                        }).catch((err) => done(err))
                    })
                })
            })
        })

        it("should correctly prevent mass request spoofing", (done) => {
            let spoofObjDoubleRequest = objects[0]
            spoofObjDoubleRequest.price += 5
            delete spoofObjDoubleRequest._id

            let spoofObjCorrectOne = objects[1]
            spoofObjCorrectOne.price -= 5
            spoofObjCorrectOne.createdAt = objects[objects.length-2].createdAt
            delete spoofObjCorrectOne._id

            db.collection('requests', (err, collection) => {
                collection.insertMany([spoofObjDoubleRequest, spoofObjCorrectOne], (err, r) => {
                    if (err) done(err)

                    let server = new query({
                        "user_key":"Vf9W14UqTOceb6p6hTarH9LCbJCIKpY1PLUFHFj68cpWnLM91S2pzELKUc8bGn9I",
                        "user_secret":"wSIKrCEldMIeKi7W6Q0ITHSAudnzXWYUEAEFe1HmZEbPcyjnW4VNjjuwxpmAB05C",
                        "ignore_limiter": true
                    })
                    server.on('ready', () => {
                        server.get('/warframe/v1/items/Nikana Prime/statistics?timeend='+timeend).then((res) => {
                            res.should.be.a('object')
                            res.statusCode.should.equal(200)
                            result(res).components[0].max.should.not.equal(spoofObjDoubleRequest.price)
                            result(res).components[0].min.should.equal(spoofObjCorrectOne.price)
                            done()
                        }).catch((err) => done(err))
                    })
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