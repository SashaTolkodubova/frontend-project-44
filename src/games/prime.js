import startGames from '../index.js';

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

const startRound = () => {
  const randomNumber = Math.round(Math.random() * 100);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = (isNumberPrime(randomNumber) ? 'yes' : 'no');
  return [question, correctAnswer];
};

const progressGame = () => startGames(rule, startRound);

export default progressGame;
