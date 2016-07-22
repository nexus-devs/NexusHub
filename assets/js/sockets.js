$(document).ready(function () {
    io.socket.get('/hello', function serverResponded(body, JWR) {

        // JWR ==> "JSON WebSocket Response"
        console.log('Sails responded with: ', body);
        console.log('with headers: ', JWR.headers);
        console.log('and with status code: ', JWR.statusCode);
    });

})
