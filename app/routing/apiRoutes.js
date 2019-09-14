// referring to all data post, get and fetch 

var friends = require('../data/friends');

module.exports = function(app){
    app.get('/', function(req,res){
      res.json(friends);
    });

    app.post('/api/friends', function(req,res){
        var friends = req.body.scores;
        var scores = [];
        var friends = 0;
        var match = 0;

    for(var i=0; i<friends.length; i++){
        var scores = 0;

        for(var j=0; j<newfriends.length; j++){
          scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
        }

      scores.push(scoresDiff);
    }

    for(var i=0; i<scoresArray.length; i++){
      if(scores[i] <= scores[bestMatch]){
        bestMatch = i;
      }
    }

    var match1 = friends[bestMatch];
    res.json(bff);

    friends.push(req.body);
  });
}
  