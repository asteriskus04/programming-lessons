const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(80, () => console.log('start'));