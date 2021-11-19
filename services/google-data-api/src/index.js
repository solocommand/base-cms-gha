const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('{"status": "ok", "service": "google-data-api"}');
});
server.listen(80);
