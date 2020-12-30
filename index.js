const fs = require('fs');
const https = require('https');
const axios = require('axios');
var request = require("request");
const express = require('express');

var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var sanitizer = require('sanitizer');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let residents_online = 0;
let tab_management = "";

let public_servers = "";

const {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
} = process.env;

const serviceAccount = {
	type,
	project_id,
	private_key_id,
	private_key,
	client_email,
	client_id,
	auth_uri,
	token_uri,
	auth_provider_x509_cert_url,
	client_x509_cert_url
};

const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

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

app.get('/client', function (req, res) {
  const server_file = __dirname + '/public/static/client.html';
  
  res.sendFile(server_file);
});

app.get('/get-sms', async function (req, res) {
  const smsRef = db.collection('sms').doc('chatlog');
  const doc = await smsRef.get();

  res.send(doc.data().log);
});

app.get('/public-servers', function (req, res) {
  res.send(public_servers);
});

app.post('/sms', async function (req, res) {
  const message = req.body.txt;
  const cleaned_msg = sanitizer.escape(message);

  console.log(cleaned_msg);

  const smsRef = db.collection('sms').doc('chatlog');
  const doc = await smsRef.get();

  const append_data = {
    log : doc.data().log + "<div class='sms'>" + cleaned_msg + "</div><br/>"
  }

  smsRef.set(append_data);
});

app.post('/public', function (req, res) {
  const server_address = sanitizer.escape(req.body.serv_add);
  const server_custom_text = sanitizer.escape(req.body.custom);

  let server_listing_box = `<div class="server-list">
    <h3>` + server_address + `</h3>
    <hr/>
    <h4>` + server_custom_text + `</h4>
  </div><br/>`;

  if (public_servers.includes(server_listing_box)) {
    console.log("EXISTS");

    res.send("exists");
  }

  else {
    public_servers = public_servers + server_listing_box;

    res.send("success");
  }
});

app.post('/connect', function (req, res) {
  const url_ip = req.body.thing;
  const salvation = url_ip.replace("https://", "");

  request({
    uri: url_ip + "/json",
  }, function(error, response, body) {
    console.log(body);

    res.send(body);
  });
});

app.use(function(req, res) {
  const file_404 = __dirname + '/public/static/errors/404.html';

  res.sendFile(file_404);
});

app.use(function(error, req, res, next) {
  const file_500 = __dirname + '/public/static/errors/500.html';

  res.sendFile(file_500);
});

http.listen(port, function(){
  console.log('listening on *:' + port);

  const smsRef = db.collection('sms').doc('chatlog');

  async function fixSMS () {
    const doc = await smsRef.get();

    if (!doc.exists) {
      const fix_data = {
        log : ""
      }

      await smsRef.set(fix_data);

      console.log("FIXED");
    }

    else {
      console.log("No Fix needed.");
    }
  }

  fixSMS();
});