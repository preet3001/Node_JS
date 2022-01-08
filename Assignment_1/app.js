const http = require('http');
const routes = require('./routes');
const PORT = 3000;
const server = http.createServer(routes);
console.log('hey im here')
server.listen(PORT);