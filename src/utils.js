export const getRandomNum = () => Math.ceil(Math.random() * 50);

export const isEvenNum = (num) => num % 2 === 0;

export const getRandomExp = () => {
  const expressionsArray = [
    [`${getRandomNum()} + ${getRandomNum()}`],
    [`${getRandomNum()} - ${getRandomNum()}`],
    [`${getRandomNum()} * ${getRandomNum()}`],
  ];
  const randomIndex = Math.ceil(Math.random() * (expressionsArray.length - 1));
  const result = expressionsArray[randomIndex];

  return result;
};

export const getResultExp = (string) => {
  const stringToArray = string.split(' ');
  const [operand1, operator, operand2] = stringToArray;

  switch (operator) {
    case '+':
      return (+operand1 + +operand2);
    case '-':
      return (operand1 - operand2);
    case '*':
      return (operand1 * operand2);
    default:
      return null;
  }
};
