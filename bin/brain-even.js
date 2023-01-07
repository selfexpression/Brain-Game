import readlineSync from 'readline-sync';

const getRandomNum = (max) => Math.ceil(Math.random() * max);

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const evenNum = getRandomNum(100) % 2 === 0;
    const que = `Question: ${getRandomNum(100)}`;
    console.log(que);

    const answer = readlineSync.question('Your answer: ');

    const checking1 = (answer === 'yes') && (evenNum === true);
    const checking2 = (answer !== 'yes') && (evenNum === false);

    if (checking1 === true) {
      console.log('Correct!');
    }
  }
};

export { getRandomNum, evenGame };
