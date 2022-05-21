let readlineSync = require("readline-sync");

const chalk = require('chalk');

//Taking input from the user//


let userName = readlineSync.question("Hi what's your name ?\n")

console.log("Welcome", userName, "to the game on \nHow well do you know about IPL")

let score = 0;

// processing the data //
function questions(question, answer) {

  let userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You are aboslutely right"));
    score = score + 10;
  } else {
    console.log(chalk.red("Wrong Answer"));
  }
  console.log("current score =", score);
  console.log("----------------------------------------")
}

let allQuestions = [{
  question: "Which team has won the most IPL Matches ?\n A = Mumbai Indians\n B = Chennai super kings\n C = Kolkata Knight Riders\n",
  answer: "A"
}, {
  question: "Who owns Kolkata Knight Riders ?\n A = Salman Khan \n B = ShahRukhKhan\n C = Aamir Khan\n" ,
  answer: ("B")
}, {
  question: "What is the Full form of IPL?\n A = Indian Premier League \n B = International Premier League\n ",
  answer: "A"
}, {
  question: "IPL is owned by ?\n A = BCCI \n B = DID\n ",
  answer: "A"

},{
  question: "Which team does virat kohli play for in IPL ?\n A = KKR \n B = CSK\n C = RCB\n",
  answer: "C"
},{
  question: "What was Sunrises Hyd prevousily called ?\n A = Deccan Charger \n B = Hyderabad Royals \n C = Hyderabad Titans\n",
  answer: "A"
},{
  question: "Who is the owner of punjab team ?\n A = SRK \n B = Preity zinta\n C = kareena kapoor\n",
  answer: "B"
}

]

// giving the output //

for (let i = 0; i < allQuestions.length; i++) {
  let currentquestions = allQuestions[i];
  questions(currentquestions.question, currentquestions.answer)


}
console.log(chalk.blue("final score = ", score));
if (score === 70) {

  console.log(chalk.blue("YAY you got all of them right"));

}

else{
 console.log(chalk.yellowBright("THE CORRECT ANSWERS ARE\n 1. A (Mumbai Indians)\n 2. B (Shahrukh khan)\n 3. A (Indian Premier League)\n 4. A (BCCI)\n 5. C (RCB)\n 6. A (Deccan Chargers)\n 7. B (preity zinta)"));
}