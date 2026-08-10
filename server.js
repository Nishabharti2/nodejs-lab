const http = require('http');

const server = http.createServer (
    (req, res) => {
        res.writeHead(200, {
            'content-Type':'text/plain'
        });
        res.end('hello world from node.js');
    }

);
server.listen(3000,() => {
    console.log('server running...');
});