let readlineSync = require("readline-sync");

const chalk = require('chalk');

//Taking input from the user//


let userName = readlineSync.question("Hi what's your name ?\n")

console.log("Welcome", userName, "to the game on how well do you know about IPL")

let score = 0;

// processing the data //
function questions(question, answer) {

  let userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right Answer"));
    score = score + 10;
  } else {
    console.log(chalk.red("Wrong Answer"));
  }
  console.log("current score =", score)
  console.log("---------------------")
}

let allQuestions = [{
  question: "Full Form of IPL ?\n",
  answer: "Indian Premier League"

}, {
  question: "Who owns Kolkata Knight Riders ?\n",
  answer: ("ShahRukhKhan")
}, {
  question: "Which team has won the most IPL Matches ?\n",
  answer: "Mumbai Indians"
}

]

// giving the output //

for (let i = 0; i < allQuestions.length; i++) {
  let currentquestions = allQuestions[i];
  questions(currentquestions.question, currentquestions.answer)


}
console.log(chalk.blue("final score = ", score));
if (score === 30) {

  console.log(chalk.blue("YAY you got all of them right"));

}