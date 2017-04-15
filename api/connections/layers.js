"use strict"

/**
 * Lodash for array deep clone
 */
const lo = require("lodash")


/**
 * Variables outside scope for .next() to be callable
 */
let _req = null
let _res = null
let _stack = []
let _next = null
let _resolve = null
let _reject = null


/**
 * Middleware Handler for connection adapters
 */
class Layer {

    /**
     * Runs through middleware functions before adapter.pass
     */
    next(err) {

        // Error occured? Send back to client.
        if (err) {
            _res.status(400).send(err)
            _reject()
        }

        // Otherwise, continue waterfall
        else if (_stack.length >= 1) {

            // Take out next function to process
            _stack.pop()
            let fn = _stack.slice(-1)[0]

            // Call next function if not falsy
            if (fn) {
                try {
                    fn(_req, _res, _next)
                } catch (err) {
                    _next(err)
                }
            }

            // Next function is falsy (usually empty)
            else {
                _resolve()
            }
        }
    }


    /**
     * Executes middleware functions
     */
    runStack(req, res, stack) {
        return new Promise((resolve, reject) => {

            // Pass  request & function stack to middleware
            this.new(req, res, stack)

            // Make resolve/reject accessible to next()
            _resolve = resolve
            _reject = reject

            // Trigger stack waterfall
            this.next()
        })
    }


    /**
     * Modify Layer for new requests
     */
    new(req, res, stack) {
        _req = req
        _res = res
        _stack = lo.cloneDeep(stack) // clone original stack

        _next = this.next

        // Stack needs buffer to be popped on first next()
        _stack.push(null)
    }


    /**
     * Convert Socket.io request into req-like object
     */
    convertReq(request, socket, verb) {
        let req = {}
        let url = null

        if(verb === "GET" && typeof request === "string" && request.includes("/")) {
             url = request.split("/")
        }

        else if ((verb === "POST" || verb === "PUT") && request !== null && typeof request === "object" && typeof request.url === 'string' && request.url.includes("/")) {
            url = request.url.split("/")
        }

        else {
            url = []
        }

        // Remove domain from url
        for(var i = 0; i < url.length; i++) {
            if(url[i].includes("localhost") || url[i].includes("nexus-stats.com")){
                url.splice(0, i + 1)
            }
        }

        url = "/" + url.join("/")
        req.body = request.body
        req.url = url
        req.user = socket.user
        req.method = verb
        req.channel = "Sockets"
        return req
    }

    /**
     * Convert Socket.io ack callback into res-like object
     */
    convertRes(socket, ack) {

        // Default response value
        let res = {
            statusCode: 200,
            body: "<empty>"
        }

        // Socket.io ack passed?
        if (ack) {

            // Send method, invoking client callback with previously customized data
            res.send = (data) => {
                if (!res.sent) {
                    res.sent = true
                    res.body = data
                    ack(res)
                } else {
                    console.error(" ")
                    console.error("Can't respond to same request multiple times.")
                    console.error(" ")
                    throw(new Error("Can't respond to same request multiple times."))
                }
            }

            // Apply Status before res.send
            res.status = (code) => {
                res.statusCode = code
                return res
            }
        }

        // Non-ack request
        else {

            // Simple socket emit
            res.send = (data) => {
                res.body = data
                socket.emit("res", res.msg)
            }

            // Apply Status before res.send
            res.status = (code) => {
                res.statusCode = code
                return res
            }
        }

        // Modified res object
        return res
    }
}

module.exports = Layer
