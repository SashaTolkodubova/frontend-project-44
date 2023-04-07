#!/usr/bin/env node
import startGames from '../src/index.js';

const randomOperatorGenerator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[randomIndex];
  return operator;
};

const rule = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  let answer;
  switch (operator) {
    case '+':
      answer = `${num1 + num2}`;
      break;
    case '-':
      answer = `${num1 - num2}`;
      break;
    case '*':
      answer = `${num1 * num2}`;
      break;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
  return answer;
};

const startRound = () => {
  const randomNumber1 = Math.round(Math.random() * 10);
  const randomNumber2 = Math.round(Math.random() * 10);
  const operator = randomOperatorGenerator();
  const question = `Question: ${randomNumber1} ${operator} ${randomNumber2}`;
  const correctAnswer = calculate(randomNumber1, randomNumber2, operator);
  return [question, correctAnswer];
};

const progressGame = () => startGames(rule, startRound);
progressGame();

export default progressGame;
