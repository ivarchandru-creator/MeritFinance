const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;
const server = http.createServer((req, res) => {
  // Decode URL to handle spaces/special characters
  const decodedUrl = decodeURIComponent(req.url);
  const parsedPath = decodedUrl.split('?')[0];
  let filePath = path.join(__dirname, parsedPath === '/' ? 'index.html' : parsedPath);
  
  const ext = path.extname(filePath);
  let contentType = 'text/html';
  if (ext === '.js') contentType = 'text/javascript';
  else if (ext === '.css') contentType = 'text/css';
  else if (ext === '.png') contentType = 'image/png';
  else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
  else if (ext === '.svg') contentType = 'image/svg+xml';
  else if (ext === '.json') contentType = 'application/json';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
