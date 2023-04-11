import startGames from '../index.js';
import getRandomInRange from '../utils.js';

const rule = 'What number is missing in the progression?';

const randomProgression = (a, step, b) => {
  const progression = [a];
  let nextNumber = a + step;
  for (let i = 1; i < b; i += 1) {
    progression.push(nextNumber);
    nextNumber += step;
  }
  return progression;
};

const generateRound = () => {
  const firstNumber = getRandomInRange(100, 0);
  const stepSize = getRandomInRange(10, 2);
  const lengthProgression = getRandomInRange(10, 5);
  const progression = randomProgression(firstNumber, stepSize, lengthProgression);
  const indexMax = lengthProgression - 1;
  const index = getRandomInRange(indexMax);
  const correctAnswer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressGame = () => startGames(rule, generateRound);
export default progressGame;
