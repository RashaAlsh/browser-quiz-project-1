import { START_QUIZ_BUTTON_ID, USER_INTERFACE_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  initQuestionPage(); 
};

//start quiz button animation

export function switchColor() {
  let colors = ["#ccb4f5", "#b4f5ed", "#f5b4bc", "#dcf5b4"]; 
 // let colors = ["#b4f5ed", "#dcf5b4"]; 
  let colorIndex = 0; 
  setInterval(function() {
    document.getElementById('start-quiz-button').style.backgroundColor = colors[colorIndex]; 
    colorIndex = (colorIndex + 1) % colors.length; 
  }, 300); 
}

switchColor(); 
