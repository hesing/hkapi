var PORT = process.env.PORT || 5000;
var ENV = process.env.NODE_ENV || 'development';

// setup http + express + socket.io
var express = require('express');
var cors = require('cors');
var compression = require('compression');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, {'log level': 0});


// setup deployd
require('deployd').attach(server, {
    socketIo: io,  // if not provided, attach will create one for you.
    env: ENV,
    db: {
    host: 'ds061199.mongolab.com',
    port: 61199,
    name: 'api',
    credentials: {
      username: 'papasingh',
      password: 'papa@1'
    }
  }
});

app.use(cors());
app.use(function(req, res, next) {
    res.setHeader("Cache-Control", "public, max-age=604800"); // 7 days
    res.setHeader("Expires", new Date(Date.now() + 604800000).toUTCString());  
    next();
});

app.use(express.static("public"));
app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.use(compression());
app.use(server.handleRequest); // should be in last so handle all request defined above to it

// start server
server.listen(PORT, function() {
  console.log("Node app is running at http://localhost:" + PORT); 
});