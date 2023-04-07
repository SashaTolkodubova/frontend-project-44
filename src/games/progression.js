import startGames from '../index.js';

const generateRandomNumber = (max = 100, min = 0) => {
  const randomized = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomized;
};

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

const startRound = () => {
  const firstNumber = generateRandomNumber();
  const stepMax = 10;
  const stepMin = 1;
  const stepSize = generateRandomNumber(stepMax, stepMin);
  const lengthMax = 10;
  const lengthMin = 5;
  const lengthProgression = generateRandomNumber(lengthMax, lengthMin);
  const progression = randomProgression(firstNumber, stepSize, lengthProgression);
  const indexMax = lengthProgression - 1;
  const index = generateRandomNumber(indexMax);
  const correctAnswer = progression[index].toString();
  progression[index] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, correctAnswer];
};
const progressGame = () => startGames(rule, startRound);
export default progressGame;
