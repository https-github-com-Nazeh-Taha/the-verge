var express = require("express");
var request = require('request');
var path = require("path");
var http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



const Article = require("./data/db.js").Article;
const Auther = require("./data/db.js").Auther;
var dbDeals = require('./data/db.js').Deal;
//------DataBase---------------------
const URI = require('./config/keys').mongoURI;
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
//-------DB Connect-------------------
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

  console.log("we're connected!");
});
app.use(express.static(path.join(__dirname, "/")));
//----------post----------------
app.get('/article', function(req, res){
  Promise.all([
  Article.find({auth_id: "5dc9b092a15d1f8a5d3fd345"}).limit(5),
  Article.find({_id: "5dc9c822bf4abd8c9eea9f24"}),
  Auther.find({_id: "5dc9b092a15d1f8a5d3fd345"})
]).then(authers => res.json(authers));
});
//-----------deals-------
app.get('/deals', (req, res) => {
  dbDeals.find({}).limit(3)
  .then(deals => res.json(deals))
  .catch(err => res.status(400).json('error',err));
});
// app.get("/article", function(req, res) {
// console.log('hello');
// });

// app.get('/article', function(req, res){ 
//   request("http://localhost:3001/bundle.js", function (error, response, body) { 
//     if (!error && response.statusCode === 200) { 
      
//       res.send(body); 
//     } 
//    }); 
// });
// app.get('*', function(req, res){ 
//   request("http://localhost:3001/bundle.js", function (error, response, body) { 
//     if (!error && response.statusCode === 200) { 
      
//       res.send(body); 
//     } 
//    }); 
// });
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
