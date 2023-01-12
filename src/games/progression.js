import generalLogic from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (startNum, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }

  return progression.join(' ');
};

const hideRandomIndex = (str) => {
  const strToArr = str.split(' ');
  const randomIndex = getRandomNum(0, 9);
  const index = strToArr[randomIndex];
  for (let i = 0; i < strToArr.length - 1; i += 1) {
    if (strToArr[i] === index) {
      strToArr[i] = '...';
    }
  }

  const hideIndex = strToArr.join(' ');
  return [hideIndex, index];
};

const getQuestionAndAnswer = () => {
  const startNum = getRandomNum(0, 50);
  const step = getRandomNum(2, 8);
  const progression = getProgression(startNum, step);
  const [hideIndex, index] = hideRandomIndex(progression);

  const question = hideIndex;
  const correctAnswer = String(index);

  return [question, correctAnswer];
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
