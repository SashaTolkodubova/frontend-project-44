import startGames from '../index.js';
import getRandomInRange from '../utils.js';

const rule = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(operators.length - 1, 0)];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return `${num1 + num2}`;
    case '-': return `${num1 - num2}`;
    case '*': return `${num1 * num2}`;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const generateRound = () => {
  const randomNumber1 = getRandomInRange(10, 0);
  const randomNumber2 = getRandomInRange(10, 0);
  const operator = getRandomOperator();
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const correctAnswer = calculate(randomNumber1, randomNumber2, operator);
  return [question, correctAnswer];
};

const progressGame = () => startGames(rule, generateRound);

export default progressGame;
