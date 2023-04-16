import startGames from '../index.js';
import getRandomInRange from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomInRange(0, 100);
  const question = randomNumber;
  const correctAnswer = (isNumberPrime(randomNumber) ? 'yes' : 'no');
  return [question, correctAnswer];
};

const runPrimeGame = () => startGames(rule, generateRound);

export default runPrimeGame;
