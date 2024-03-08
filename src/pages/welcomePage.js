import { START_QUIZ_BUTTON_ID, USER_INTERFACE_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

const userInterface = document.getElementById(USER_INTERFACE_ID);


   
let colors = ["#ccb4f5", "#b4f5ed", "#f5b4bc", "#dcf5b4"]; 
// let colors = ["#b4f5ed", "#dcf5b4"]; 
 let colorIndex = 1; 

var intervalID = setInterval (() => {  
   document.getElementById('start-quiz-button').style.backgroundColor = colors[colorIndex]; 
   colorIndex = (colorIndex + 1) % colors.length; 
 }, 300); 

export const initWelcomePage = () => {
  userInterface.innerHTML = '';
  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);


  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);

    
    
    
};

function saveName() {
  let usernameValue = document.querySelector('input[name="userName"]').value;
  localStorage.setItem('userName', usernameValue);
}


const startQuiz = () => {
  saveName();
  initQuestionPage(); 
  clearInterval(intervalID);
};




