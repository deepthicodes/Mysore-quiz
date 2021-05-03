var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question('May I have your name?');

 function welcome()
 {
   var welcomeMessage = "Welcome " + userName + " to the quiz on mysuru";
   console.log(chalk.red(welcomeMessage));
   console.log("NOTE: The quiz is case-sensitive")
   console.log();
 }

var score = 0;

// data of high score
var highScores = [
  {
    name: "Girija",
    score: 5,
  },

  {
    name: "Deepthi",
    score: 4,
  },
]

var questionanswer = [
  {
    question:"Which city is located in the southern part of karnataka?",
    answer:"mysore"
  },
  {
    question:"What is the another name of mysore?",
    answer:"heritage city"
  },
  {
    question:"Name the dynasty which ruled Mysore?",
    answer:"wadiyar"
  },
  {
    question:"Whats is the old name of Mysore?",
    answer:"mahishapura"
  },
  {
    question:"The city is located in the foothills of ?",
    answer:"chamundi hills"
  }
];

function play(question,answer)
{
    var userAnswer = readlineSync.question(question);
    if(userAnswer === answer)
    {
      console.log("✅ Correct! Yaay!");
      score = score + 1;
    }
    else 
    {
      console.log("❌ Wrong!");
      score = score -1;
    }
  console.log(userName+", your current score is "+score);
  console.log("______________________________________");
}

function game()
{
  for(var i=0;i<questionanswer.length;i++)
{
  var currentQuestion = questionanswer[i];
  play(currentQuestion.question,currentQuestion.answer)
}

}

function showScores() 
{
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores");

  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScores();

