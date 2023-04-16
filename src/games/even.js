import startGames from '../index.js';
import getRandomInRange from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomInRange(0, 100);
  const question = randomNumber;
  const correctAnswer = (isEven(randomNumber) ? 'yes' : 'no');
  return [question, correctAnswer];
};

const runEvenGame = () => startGames(rule, generateRound);

export default runEvenGame;
