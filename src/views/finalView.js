import { RESTART_QUIZ_BUTTON_ID } from '../constants.js';

export const createFinalElement = (score, maxScore, userName = 'Guest') => {
  const element = document.createElement('div');
  element.classList.add('last-page-div');
  
  //different text depending on a score
  if (score === 0) {
    element.innerText = `Better luck next time, ${userName}. You earned ${score} points out of ${maxScore} points`;
    const gif = document.createElement('img');
    gif.classList.add('gif-style');
    gif.src = './public/images/tryAgain.gif';
    element.appendChild(gif);
  } else if (score > 0 && score <= 4) {
    element.innerText = `Good job, ${userName}! You earned ${score} points out of ${maxScore} points.`;
    const gif = document.createElement('img');
    gif.classList.add('gif-style');
    gif.src = './public/images/wellDone.gif';
    element.appendChild(gif);
  } else {
    element.innerText = `Well done, ${userName}! You earned ${score} points out of ${maxScore}  points.`;
    const gif = document.createElement('img');
    gif.classList.add('gif-style');
    gif.src = './public/images/missionDone.gif';
    element.appendChild(gif);
  }

  element.innerHTML += String.raw`
    <button id="${RESTART_QUIZ_BUTTON_ID}"> New Game</button>
    `;

  return element;
};
