var express = require("express");
var app = express();
app.use(express.static(__dirname));

console.log(__dirname);

app.get("/", function(req, res) {
  res.render("index.js");
});

app.listen(3000);
console.log("Listening on port 3000");
