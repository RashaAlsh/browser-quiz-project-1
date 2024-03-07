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

// If I add events with arrow functions or declare functions in "addEventListener" I can not use removeEventListener and I  can't remove them later. This is because there is no reference to the function. my creating a function and passing it to the event listener, I can remove it later.
function selectEventHandler(){
  selectAnswer(this);
}

// Answer selecting process
// Selects the answer and shows the correct answer
const selectAnswer = (selectElement) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  
  // Modify the data. there is a selected property in the question object. we want to store the selected answer there. 
  // This is important for checking if the answer is correct later 
  // and for showing the correct answer 
  // and calculating the score
  currentQuestion.selected = selectElement.innerHTML.split(":")[0].trim();
  
  // Remove the click events listeners since user answered already and we showed the answer
  for (const answerElement of selectElement.parentElement.children) {
    answerElement.removeEventListener('click', selectEventHandler);     
  }

  // if the answer is correct, add 1 to the score.
  if(answerIsCorrect(currentQuestion)){
    quizData.currentScore++;
  }else{
    // if the answer is wrong, add .wrong to the selected answer
    selectElement.classList.add('wrong');
  }

  // add .correct to the correct answer.
  // This is not in the if statement because we want to show the correct answer even if the user selected the wrong answer
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
