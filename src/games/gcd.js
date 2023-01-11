import generalLogic from '../index.js';
import { getRandomNum } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const firstNum = getRandomNum(0, 20);
  const secondNum = getRandomNum(0, 20);

  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(gcd(firstNum, secondNum));

  return [question, correctAnswer];
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
