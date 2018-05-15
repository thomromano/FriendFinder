//Required Dependencies
var path = require("path");

var friends = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function() {
        res.json(friends);
    });

    //Add friend
    app.post('/api/friends', function(req, res) {
        var userInput = req.body;
        console.log('userInput = ' + JSON.stringify(userInput));

        var userResponses = userInput.scores;
        console.log('userResponses = ' + userResponses);
    
        var matchName = "";
        var matchImage = "";
        var totalDifference = 10000;

        for (var i = 0; i < friends.length; i++) {
            console.log('friend = ' + JSON.stringify(friends[i]));

            //calculate differences 
            var qDifference = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            if (diff < totalDifference) {
                totalDifference = qDifference;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }
        friends.push(userInput);
        res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
    });
};