var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const port = process.env.PORT || 3004;

var app = express();

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({ extended: true }));

//config DataBase
var mongoose = require('mongoose');
const URI = require('../config/keys.js');
mongoose.connect(URI.mongoURI, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We're Connected");
});

const CommentDB = require('../database/db.js');



app.get('/comments', (req, res) => {
  
  CommentDB.findAll(function(err, allComments){
    if(err) {
      console.log('Error in retrieving comments from database!!')
    }
    res.json(allComments);
  })
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../public"));
});
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});
