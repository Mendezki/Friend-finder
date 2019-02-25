var path = require("path");

var friends = require("../data/friends.js");

module.export = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    api.post("/api/friends", function (req, res) {
        var totalDiff = 0;
        var match = {
            name: "",
            photo: "",
            friendsDiff = 1000
        };
        var userdata = req.body;
        var userName = userdata.name;
        var userScores = userdata.score;
        
        var b = 
    })
}