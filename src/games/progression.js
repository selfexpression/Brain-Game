import generalLogic from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (startNum, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + step * i);
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const startNum = getRandomNum(0, 50);
  const step = getRandomNum(2, 8);
  const progression = getProgression(startNum, step);
  const randomIndex = getRandomNum(0, 9);

  const question = progression.join(' ');
  progression[randomIndex] = '..';
  const correctAnswer = String(progression[randomIndex]);

  return [question, correctAnswer];
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
