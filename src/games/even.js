import generalLogic from '../index.js';
import { getRandomNum, isEvenNum } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const questionNum = getRandomNum();
  const correctAnswer = (isEvenNum(questionNum) ? 'yes' : 'no');

  return [questionNum, correctAnswer];
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
