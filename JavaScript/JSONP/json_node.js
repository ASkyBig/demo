// index.js
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function (req, res) {
  if (req.url === '/favicon.ico') {
    return;
  }
  const parseUrl = url.parse(req.url, true);
  console.log('parseUrl', parseUrl)
  res.writeHead(200, {'content-Type':'text/plain;charset=UTF-8'})
  const data = "{age: 26}"

  const str = parseUrl.query.callback + '(' + JSON.stringify(data) + ')'
  // res.write(str)
  console.log('str', str)
  res.end(str)
});

server.listen(3002, function () {
  console.log('server is starting on port 3002');
});
