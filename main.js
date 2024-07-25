const http = require('http');
const fs = require('fs');

let count = 0;

http.createServer(function (req, res) {
    console.log("Request: ", req.url, ", Count: ", count++);

    res.writeHead(200, { 'content-type': 'image/gif' });
    fs.createReadStream('./public/test.gif').pipe(res);
}).listen(80);

console.log('server running at 80');