import generalLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const getRandomNum = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
  const questionNum = getRandomNum(0, 100);
  const isEven = () => questionNum % 2 === 0;
  const correctAnswer = (isEven(questionNum) ? 'yes' : 'no');

  return [questionNum, correctAnswer];
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
