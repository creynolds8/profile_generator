const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  'What is your name? Or nickname if you have one?',
  'What is an activity you enjoy doing?',
  'What do you listen to while you do that?',
  'Which meal is your favorite?',
  'What do you like to eat for that meal?',
  'Which sport is your favorite?',
  'What is your superpower? Something you are great at.'
]
const answers = process.argv.slice(2)

const askQuestion = function(index) {
  if (index === questions.length) {
    console.log(`${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`);
    rl.close();
    return;
  }
  rl.question(questions[index], (answer) => {
    console.log(`${answer}, that's really cool.`);
    index++;
    answers.push(answer);
    askQuestion(index);
  });
};

askQuestion(0);