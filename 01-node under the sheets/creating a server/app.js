const http = require('http');

const server = http.createServer((res,req) => {
    console.log(req);
    process.exit();
});

const PORT = 3000;

server.listen(3000);