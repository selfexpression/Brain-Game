import generalLogic from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNum = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNum(0, 100);
  const correctAnswer = isEvenNum(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
