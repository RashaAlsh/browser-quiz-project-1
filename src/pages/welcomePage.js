import {
  START_QUIZ_BUTTON_ID,
  USER_INTERFACE_ID,
  CONTINUE_QUIZ_BUTTON_ID,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { progress } from '../localStorage.js';

export const initWelcomePage = (canContinue = false) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const welcomeElement = createWelcomeElement(canContinue);
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);

  if (document.getElementById(CONTINUE_QUIZ_BUTTON_ID)) {
    document
      .getElementById(CONTINUE_QUIZ_BUTTON_ID)
      .addEventListener('click', continueQuiz);
  }
};

const startQuiz = () => {
  progress.resetProgress();
  progress.saveUserName(document.querySelector('input[name="userName"]').value);
  initQuestionPage();
};

const continueQuiz = () => {
  initQuestionPage(true);
};
