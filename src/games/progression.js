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
  const firstNumber = getRandomInRange(0, 100);
  const stepSize = getRandomInRange(2, 10);
  const lengthProgression = getRandomInRange(5, 10);
  const progression = randomProgression(firstNumber, stepSize, lengthProgression);
  const hiddenIndex = getRandomInRange(0, lengthProgression - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgressionGame = () => startGames(rule, generateRound);

export default runProgressionGame;
