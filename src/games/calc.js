import generalLogic from '../index.js';
import { getRandomNum } from '../utils.js';

const description = 'What is the result of the expression?';

export const getRandomOperationSymbol = (symbols) => {
  const randomIndex = getRandomNum(0, symbols.length);
  const randomSymbol = symbols[randomIndex];
  return randomSymbol;
};

export const calculateOperations = (symbol, firstValue, secondValue) => {
  switch (symbol) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const operationSymbols = [
    ['+'],
    ['-'],
    ['*'],
  ];
  const randomSymbol = getRandomOperationSymbol(operationSymbols);
  const firstNum = getRandomNum(0, 20);
  const secondNum = getRandomNum(0, 20);

  const question = `${firstNum} ${randomSymbol} ${secondNum}`;
  const correctAnswer = String(calculateOperations(randomSymbol, firstNum, secondNum));

  return [question, correctAnswer];
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
