const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const https = require('https');

https.createServer({
  key: fs.readFileSync('../certs/key.pem'),
  cert: fs.readFileSync('../certs/cert.pem')
}, app).listen(2080);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

/*
app.listen(2080, function() {
  console.log('Streaming app at port 2080!');
})
*/
