import startGames from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const generateRandomNumber = (max = 10, min = 1) => {
  const randomized = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomized;
};

const getGreatestCommonDivisor = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a.toString();
};
const startRound = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
  return [question, correctAnswer];
};
const progressGame = () => startGames(rule, startRound);

export default progressGame;
