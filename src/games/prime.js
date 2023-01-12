import generalLogic from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num % 2 === 0) {
    return false;
  }

  const halfNum = num / 2;

  for (let i = 2; i < halfNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNum(0, 100);
  const correctAnswer = (isPrime(question) ? 'yes' : 'no');

  return [question, correctAnswer];
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
