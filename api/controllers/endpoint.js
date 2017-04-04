/**
 * Listens to enndpoint config and distributes to adapters
 */
 class Endpoint{

     /**
      * Store references to adapter objects
      */
      constructor(adapters){
          this.adapters = adapters
      }


     /**
      * Applies endpoints to given adapter reqcontrollers
      */
     apply() {
         this.adapters.forEach((adapter) => {
            // adapter.request.endpoints = this.schema
         })
     }


     /**
      * Listens to incoming endpoint configs from core nodes
      */
     listen() {
         this.sockets.root.on('connection', (socket) => {
             socket.on('config', (schema) => {
                 console.log(schema)
                 schema.forEach((endpoint) => {
                     this.http.app.all(endpoint.route, (req, res) => {
                         res.send(req.url)
                         //this.http.prepass(req, res)
                     })
                 })
             })
         })
     }
 }

module.exports = new Endpoint()
