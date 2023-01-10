import generalLogic from '../index.js';
import { getRandomNum, isEvenNum } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNum(0, 100);
  const correctAnswer = (isEvenNum(question) ? 'yes' : 'no');

  return [question, correctAnswer];
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
