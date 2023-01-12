import generalLogic from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (startNum, step) => {
  const progressionArray = [];
  for (let i = startNum; i < progressionLength; i += step) {
    progressionArray.push(i + step);
  }

  const result = progressionArray.join(' ');
  return `${startNum} ${result}`;
};

const hideRandomIndex = (str) => {
  const strToArr = str.split('');
  const randomIndex = getRandomNum(0, 9);

  for (let i = 0; i < strToArr.length - 1; i += 1) {
    if (strToArr[i] === strToArr[randomIndex]) {
      strToArr[i] = '...';
    }
  }
  return strToArr.join(' ');
};

const getQuestionAndAnswer = () => {
  const startNum = getRandomNum(0, 50);
  const step = getRandomNum(2, 8);

  const progression = getProgression(startNum, step);
  const randomIndex = getRandomNum(0, 9);
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
