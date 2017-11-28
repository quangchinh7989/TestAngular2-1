const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Khong the ket noi toi server', err);
  }else {
    console.log('Dang ket no toi server', config.db);
  }
});

app.use(express.static(__dirname + '/client/dist/'));
app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080 ,()=>{
  console.log('Dang rinh cong 8080');
});
