import startGames from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const startRound = () => {
  const randomNumber = Math.round(Math.random() * 10);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = (isEven(randomNumber) ? 'yes' : 'no');
  return [question, correctAnswer];
};

const progressGame = () => startGames(rule, startRound);

export default progressGame;
