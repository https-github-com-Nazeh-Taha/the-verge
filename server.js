var express = require("express");
var path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/")));


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "the-verge", "/index.html"));
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
