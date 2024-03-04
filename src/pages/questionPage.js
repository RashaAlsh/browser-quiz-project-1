import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

    // adds event listeners to all the answer elements. so user can select an answer
  for (const answerElement of answersListElement.children) {
    answerElement.addEventListener('click', selectEventHandler);
  }  
}


// handler (I think)
function selectEventHandler(){
  selectAnswer(this);
}

// add active class to selected to answer
const selectAnswer = (selectElement) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  
  // modify the data
  currentQuestion.selected = selectElement.innerHTML.split(":")[0].trim();
  
  // remove the click events listeners since user answered already and we showed the answer
  for (const answerElement of selectElement.parentElement.children) {
    answerElement.removeEventListener('click', selectEventHandler);     
  }
 
  // if the answer is wrong, add .wrong
  if(!answerIsCorrect(currentQuestion)){
    selectElement.classList.add('wrong');
  }

  // add .correct to the correct answer
  showCorrectAnswer(currentQuestion);
  
}

const answerIsCorrect = (question) => {
  return question.selected === question.correct;
}

// color the correct answer to green
const showCorrectAnswer = (question) => {
  const answersList = document.getElementById(ANSWERS_LIST_ID);
  for (const answerElement of answersList.children) {
    if (answerElement.innerHTML.trim().startsWith(question.correct)) {
      answerElement.classList.add('correct');
    }
  }
}

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
}
