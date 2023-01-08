import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const getRandomNum = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
    const questionNum = getRandomNum(0, 100);
    const isEven = () => questionNum % 2 === 0;

    const que = `Question: ${questionNum}`;
    console.log(que);

    const answerUser = readlineSync.question('Your answer: ');
    const correctAnswer = (isEven(questionNum) ? 'yes' : 'no');
    const errorMessage = `${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}`;

    if (answerUser === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(errorMessage);
      break;
    }
  }

  console.log(`Congratulations, ${userName}`);
};
