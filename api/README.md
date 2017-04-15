## Nexus API Node
Node.js server for validating, authorizing and distributing incoming requests.
- - - -
<br>

## Connection Types
By default, the server accepts both normal HTTP and Socket.io connections. HTTP requests are in standard CRUD format, **Socket requests should be called like this:** <br>

#### GET
```javascript
socket.emit("GET", "api.nexus-stats.com/foo", data => {
    console.log(data) // bar
})
```

#### POST
```javascript
socket.emit("POST", {
        url: "api.nexus-stats.com/resource/method",
        body: "Your POST data"
}, data => {
    // Do something with data
})
```

**The ack function as third parameter is heavily recommended** so as not to get bugs due to race-conditions.<br>
However you __can__ omit the ack and listen to incoming `res` events holding the same data.

<br>
<br>

## Writing Middleware
The server also provides a simple express-like middleware stack to be executed before each request gets passed to another node, but **after** native express/socket middleware.<br>

### Example
```javascript
let api = require('path/to/api-node.js')

api.use((req, res, next) => {
    if(req.user.uid === 'foo'){
        res.send("bar") // Same as res.status(200).send("bar")
    } else {
        next(new Error("I'm a teapot")) // Sends error and stops further actions
    }
})
```
Note that socket requests get modified to behave just like an express request, thus enabling the use of middleware functions fitting all connection types.

### Native Middleware
If necessary, you can still target native connection middleware which runs before the one explained above.
```javascript
let api = require('path/to/api-node.js')

api.http.app.use((req, res, next) => {}) // Native Express Middleware
api.sockets.io.use((socket, next) => {}) // Native Socket.io Middleware
```
Keep in mind that native socket middleware won't allow you to respond to requests with callback functions as of v1.7.3 or lower.

<br>
<br>

## Authentication
Simple authentication via JSON Web Tokens. Runs as native middleware for express. Initial authentication on Sockets is done natively - expiration check through own middleware.<br>
Tokens are provided by a [nexus-auth](https://github.com/kaptard/nexus-auth) server.

<br>
<br>

## Rate Limiting
We are using a rate limiting implementation following the token bucket algorithm.<br>

**Users without token:** 8 requests per 10 seconds. Min request difference of 1s.<br>
**Users with token:** 12 requests per 10 seconds. Min request difference of 0.75s.<br>
**Elevated users** (with token): 25 requests per 5 seconds. No min difference.
<br>
<br>
<br>
<br>

**Note:** You can easily get your credentials from `api.nexus-stats.com/register`<br>
From there, we recommend using the [nexus-stats-api](https://github.com/kaptard/nexus-stats-api) module which will avoid rate limits and handle token refreshing automatically.
