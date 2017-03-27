/**
 * Converts standard URL string into JSON object usable by dbs nodes
 */
class RequestParser {
    parse(req, res, next){
        let body = req.body
        let json = {}

        console.log(req)

        // Proper request format?
        //if(body instanceof String){
            body = body.replace("https://", "")
            body = body.replace("http://", "")

            // Slice sub-categories
            body = body.slice("/")
            console.log(body)

            // Slice params in last sub
            //json.method = (body[body.length - 1].slice("?"))[0]
            //json.query = body[body.length - 1].slice("")
            next()

        //}

        // Improper request format
        //else next("Invalid Request Format. Please provide URL string")
    }
}

module.exports = new RequestParser()
