import http from 'http';

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
}).listen(8000);

console.log('Server in http://127.0.0.1:8000/');
