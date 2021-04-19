const express = require("express");
const app = express();
app.use(express.static(__dirname + '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  res.render("index.html");
});

let port = process.env.PORT || 8080;
app.listen(port);