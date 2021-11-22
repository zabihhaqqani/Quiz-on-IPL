let readlineSync = require("readline-sync");

//Taking input from the user//

let userName = readlineSync.question("Hi what's your name ? ")

console.log("Welcome", userName, "to the game on how well do you know about IPL")

let score = 0;

function questions(question, answer) {

  let userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right Answer")
    score = score + 1;
  } else {
    console.log("Wrong Answer")
  }
  console.log("current score =", score)
  console.log("---------------------")
}

let allQuestions = [{
  question: "Full Form of IPL ? ",
  answer: "Indian Premier League"

}, {
  question: "Who owns Kolkata Knight Riders ? ",
  answer: ("ShahRukhKhan")
}, {
  question: "Which team has won the most IPL Matches ? ",
  answer: "Mumbai Indians"
}

]


for (let i = 0; i < allQuestions.length; i++) {
  let currentquestions = allQuestions[i];
  questions(currentquestions.question, currentquestions.answer)


}
console.log("final score = ", score)
if (score === 3) {

  console.log("YAY you got all of them right")

} else {
  console.log("You got", score, "of them right")
}