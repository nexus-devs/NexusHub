"use strict";

/**
 * Helper class to Convert Socket.io requests into res-like objects. This allows uniform pre-pass middleware.
 */
class Converter {

    /**
     * Convert Socket.io request into req-like object
     */
    convertReq(request, socket, verb) {
        let req = {}
        let url = null

        // request string, object or invalid?
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

            // Pseudo res.json to stay parallel with express
            res.json = (data) => {
                data = JSON.stringify(data)
                return res.send(data)
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

            // Pseudo res.json to stay parallel with express
            res.json = (data) => {
                data = JSON.stringify(data)
                return res.send(data)
            }
        }

        // Modified res object
        return res
    }
}

module.exports = new Converter()
