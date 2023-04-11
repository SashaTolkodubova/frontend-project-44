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
  return a.toString();
};

const generateRound = () => {
  const randomNumber1 = getRandomInRange(10, 1);
  const randomNumber2 = getRandomInRange(10, 1);
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGreatestCommonDivisor(randomNumber1, randomNumber2);
  return [question, correctAnswer];
};

const progressGame = () => startGames(rule, generateRound);

export default progressGame;
