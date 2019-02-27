var express = require("express");
var path = require("path");
var bodyParser = require("body-parser")

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});