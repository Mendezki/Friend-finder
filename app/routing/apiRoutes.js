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
            friendDifference: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userScores = userData.scores;

        var b = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log("Name: " + userName);
        console.log("User Score " + userScores);

        var sum = b.reduce((a, b) => a + b, 0);

        console.log("Sum of users score " + sum);
        console.log("Best match friend diff " + match.friendDifference);
        console.log("+++++++=================++++++++++");

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDiff = 0;
            console.log("Total Diff " + totalDiff);
            console.log("Best match friend diff " + match.friendDifference);

            var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + bfriendScore);
            totalDiff += Math.abs(sum - bfriendScore);
            console.log("-------------------------> " + totalDiff);

            if (totalDiff <= match.friendDifference) {
                match.name = friends[i].name;
                match.photo = friends[i].photo;
                match.friendDifference = totalDiff;
            }
            console.log(totalDiff + " Total Difference");
        }
        console.log(match);

        friends.push(userData);
        console.log("New user added");
        console.log(userData);
        res.json(match);
    });
};