const fs = require('fs');
const express = require('express');

var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let residents_online = 0;
let tab_management = "";

io.on('connection', (socket) => {
  console.log('User connected: ', socket.id);
  
  residents_online = residents_online + 1;

  socket.on('disconnect', function() {
    console.log('User disconnected.');
    
    residents_online = residents_online - 1;
  });
});

app.get('', function (req, res) {
  const user_ip = req.ip;
  const index = __dirname + '/public/static/index.html';
  const close = __dirname + '/public/static/close.html';

  res.sendFile(index);
});

app.get('/online', function (req, res) {
  res.send(String(residents_online));
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});