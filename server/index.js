// Mini Node Server

// http comes with node
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {


  setTimeout(() => {
    res.write("Still on...");
    res.end();
  }, 3000)
});

server.listen(8080);
