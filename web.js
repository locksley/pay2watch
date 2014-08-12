var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan')
var app = express();

app.use(morgan("combined"));

// Static Asset links
app.use(gzippo.staticGzip(__dirname + "/dist/"));

// 404, redirect to home, event for 404 assets
app.get("*", function(req, res) {
  res.sendfile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 3000);
