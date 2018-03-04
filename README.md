# Friend finder (express app)
Friend finder helps you find your next best friend! This app is based on a matchmaking algorithm using Express.js to handle routing.

[Application](https://hidden-hollows-91221.herokuapp.com/)
## How to use
The user answers a series of 10 questions to match them with the most compatible friend. Below is the matchmaking algorithm:
```
function matchingAlgorithm(userData) {
  $.ajax({
    url: currentURL + '/api/friends',
      method: 'GET'
   }).done(function(data) {

     var friendRatings = [];
     var minIndex;

   // 'data.length - 1' to avoid self-count.
   for (var i = 0; i < data.length - 1; i++) {
     var userScore = userData.scores;
     var friendScore = data[i].scores;
     friendRatings[i] = 0;

     // go through each question and find difference
     for (var j = 0; j < 10; j++) {
       friendRatings[i] +=
         Math.abs((parseInt(userScore[j]) - parseInt(friendScore[j])));
     }

     // Lowest score is best score = friend
     if (i > 0) {
       if (friendRatings[i - 1] < friendRatings[i]) {
         minIndex = i - 1;
       } else {
         minIndex = i;
       }
     }
   }
    friendModal(data[minIndex].photo, data[minIndex].name);
  });
}
```
The user is compared with each friend in `friend.js`. The differences of the scores for each friend are determined and summed. The least score is the most compatible.
## Built with
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
### NPM packages
* [body-parser](https://www.npmjs.com/package/body-parser)
* [path](https://www.npmjs.com/package/path)
