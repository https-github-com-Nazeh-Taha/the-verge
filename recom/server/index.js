var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const port = process.env.PORT || 3003;

var app = express();

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/items", function(req, res) {
  console.log(req.body);
  res.end("heeeeeeeeeey");
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../public"));
});
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});
