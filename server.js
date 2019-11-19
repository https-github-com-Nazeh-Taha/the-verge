var express = require("express");
var path = require("path");
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

//------DataBase---------------------
const URI = require('./config/keys.js').mongoURI;
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

//database
const CommentDB = require('./database/db.js');

//--------- handle comments req -------------
app.get('/comments', (req, res) => {

  CommentDB.CommentModel.find({postId: 1 }, function(err, data){
    if (err) {
    console.log('Error');
      }
    res.json(data);
  });
});


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "the-verge", "/index.html"));
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
