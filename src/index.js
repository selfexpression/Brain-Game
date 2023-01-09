import readlineSync from 'readline-sync';

export const countsRound = 3;

export default (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < countsRound; i += 1) {
    const [questionNum, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${questionNum}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log(`Congratulations, ${userName}`);
  }
};