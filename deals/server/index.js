var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var path = require("path");
const port = process.env.PORT || 3002;

const URI = require('../config/keys.js').mongoURI;
mongoose.connect(URI, {userNewUrlParser: true});

var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
  console.log('connected successfully');
 });

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../public"));
});
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});
