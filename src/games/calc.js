import generalLogic from '../index.js';
import { getRandomExp, getResultExp } from '../utils.js';

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const question = getRandomExp();
  const correctAnswer = String(getResultExp(question));

  return [question, correctAnswer];
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
