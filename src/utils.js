export const getRandomNum = () => Math.ceil(Math.random() * 100);

export const isEvenNum = (num) => num % 2 === 0;

export const getRandomExp = () => {
  const expressionsArray = [
    [`${Math.ceil(Math.random() * 50)} + ${Math.ceil(Math.random() * 50)}`],
    [`${Math.ceil(Math.random() * 50)} - ${Math.ceil(Math.random() * 50)}`],
    [`${Math.ceil(Math.random() * 50)} * ${Math.ceil(Math.random() * 50)}`],
  ];
  const randomIndex = Math.ceil(Math.random() * (expressionsArray.length - 1));
  const result = expressionsArray[randomIndex];

  return result;
};
