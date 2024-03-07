
import { ANSWERS_LIST_ID, START_QUIZ_BUTTON_ID, NEXT_QUESTION_BUTTON_ID } from '../constants.js';

import { quizData } from './data.js';



/*
if(localStorage.getItem('quizData')) {
    
    quizData = JSON.parse(localStorage.getItem('quizData'));

  }
  

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('quizData', JSON.stringify(quizData));
  }) 

  */

  let retrievedObject = JSON.parse(window.localStorage.getItem('results'));

if(!retrievedObject ){
alert('Empty, initializing');
retrievedObject  = [];
}

retrievedObject.push('quiz.results' + retrievedObject.length);
window.localStorage.setItem('results', JSON.stringify(retrievedObject));

quizData.currentScore
