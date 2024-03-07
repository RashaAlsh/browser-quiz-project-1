import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  const welcomeTitle = 'welcome-title';
  element.classList.add('block_white');
  element.innerHTML = String.raw`
    <h1 id="${welcomeTitle}">Welcome</h1>
    <button id="${START_QUIZ_BUTTON_ID}">START</button>
  `;
  return element;
};