import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const userAnswer = readlineSync.question('Your answer: ');
  const errorMessage = `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}`;

  for (let i = 0; i < 3; i += 1) {
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(errorMessage);
      break;
    }
    console.log(`Congratulations, ${userName}`);
  }
};
