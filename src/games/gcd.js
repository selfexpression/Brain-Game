import generalLogic from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const firstNum = getRandomNum(0, 20);
  const secondNum = getRandomNum(0, 20);

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(getGcd(firstNum, secondNum));

  return [question, correctAnswer];
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
