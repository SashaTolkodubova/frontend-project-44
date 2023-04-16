import startGames from '../index.js';
import getRandomInRange from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

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
  return a;
};

const generateRound = () => {
  const randomNumber1 = getRandomInRange(1, 10);
  const randomNumber2 = getRandomInRange(1, 10);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(getGreatestCommonDivisor(randomNumber1, randomNumber2));
  return [question, correctAnswer];
};

const runGcdGame = () => startGames(rule, generateRound);

export default runGcdGame;
