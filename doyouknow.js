var readlineSync = require('readline-sync');
var score = 0;
// var userName = readlineSync.question("what's your name ?");

// data of high score
var highScores = [
  {
    name: "ashish",
    score: 5,
  },

  {
    name: "sreyansh",
    score: 4,
  },
]
//console.log("welcome"+ userName + "DO YOU KNOW PRADEEP");
// var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question("what's your name ? :");
console.log("welcome "+ userName + " DO YOU KNOW ASHISH ?");
 

// play function

function play(question,answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("right");
    score = score + 1
  } else {
    console.log("wrong!");
  }

  console.log("current score : "+ score);
  console.log("---------------");
}

// array of objects
var questions = [{
  question:"where does he live? :",
  answer: "banaras"
},{
  question: "his favorite sportperson would be? :",
  answer:"virat kohli"
},{
  question: "what is he doing currently in his study ?:",
  answer:"coding"
},{
  question: "which state is his birth place? :",
  answer:"up"
},{
  question: "what is his highest degree ?:",
  answer:"diploma"
}];

//loop

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}

function showScores() {
  console.log("Hey! You SCORED: ", score);

  console.log("Check out the high scores, if you scored more or equal than me , I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

// welcome();
// game();
showScores();

console.log("THANKS FOR PLAYING")