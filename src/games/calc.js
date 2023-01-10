import generalLogic from '../index.js';
import { getRandomNum } from '../utils.js';

const description = 'What is the result of the expression?';

const getRandomOperationSymbol = (symbols) => {
  const randomIndex = getRandomNum(0, symbols.length);
  const randomSymbol = symbols[randomIndex];
  return randomSymbol;
};

const getQuestionAndAnswer = () => {
  const operand1 = getRandomNum(0, 20);
  const operand2 = getRandomNum(0, 20);

  const expressions = [
    [`${operand1} + ${operand2}`],
    [`${operand1} - ${operand2}`],
    [`${operand1} * ${operand2}`],
  ];

  const operators = [
    ['+'],
    ['-'],
    ['*'],
  ];

  const question = getRandomOperationSymbol(expressions);
  const operator = getRandomOperationSymbol(operators);
  const middleChar = question.length / 2;

  let correctAnswer;

  switch (question.charAt(middleChar) === operator) {
    case '+':
      correctAnswer = operand1 + operand2;
      break;
    case '-':
      correctAnswer = operand1 + operand2;
      break;
    case '*':
      correctAnswer = operand1 + operand2;
      break;
    default:
  }

  return [question, correctAnswer];
};

export default () => {
  generalLogic(description, getQuestionAndAnswer);
};
