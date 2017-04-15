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
}

module.exports = Layer
