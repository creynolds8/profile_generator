const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  'What is your name? Or nickname if you have one?',
  'What is an activity you enjoy doing?',
  'What music do you listen to while you do that?',
  'Which meal is your favorite?',
  'What do you like to eat for that meal?',
  'Which sport is your favorite?',
  'What is your superpower? Something you are great at.'
]
const args = process.argv.slice(2)
const profile = 'Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.'

const askQuestion = function(index) {
  if (index === questions.length) {
    console.log(args);
    rl.close();
    return;
  }
  rl.question(questions[index], (answer) => {
    console.log(`${answer}, that's really cool.`);
    index++;
    args.push(answer);
    askQuestion(index);
  });
};

askQuestion(0);