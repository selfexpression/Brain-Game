import readlineSync from 'readline-sync';

const greetAndAskForName = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const getRandomNum = (max) => Math.ceil(Math.random() * max);

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const evenNum = getRandomNum(100) % 2 === 0;
    const que = `Question: ${getRandomNum(100)}`;
    console.log(que);

    const answerUser = readlineSync.question('Your answer: ');

    const checking1 = (answerUser === 'yes') && (evenNum);
    const checking2 = (answerUser === 'no') && (!evenNum);
    const correctAnswer = (answerUser === 'yes' ? 'no' : 'yes');
    const errorMessage = `${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, Bill!`;

    if (checking1 === true || checking2 === true) {
      console.log('Correct!');
    } else {
      console.log(errorMessage);
      break;
    }
  }

  console.log(`Congratulations, ${greetAndAskForName()}`);
};

export { getRandomNum, evenGame, greetAndAskForName };
