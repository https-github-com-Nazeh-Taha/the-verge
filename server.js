var express = require("express");
var mongoose = require('mongoose');
// var morgan = require("morgan");
var path = require("path");
// var proxy = require("http-proxy-middleware");
// const request = require('request');
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/")));

//config DataBase

// const URI = require('../config/keys.js');
// mongoose.connect(URI.mongoURI, {useNewUrlParser: true});

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("We're Connected");
// });

// const CommentDB = require('./commentsDB.js');

// app.get('/comments', (req, res) => {
  
//   CommentDB.findAll(function(err, allComments){
//     if(err) {
//       console.log('Error in retrieving comments from database!!')
//     }
//     res.json(allComments);
//   })
// });

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "the-verge", "/index.html"));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
