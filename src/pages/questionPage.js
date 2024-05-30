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


  const skipButton = document.createElement('button');
  skipButton.textContent = 'Skip';
  skipButton.classList.add("skipButton")
  skipButton.addEventListener('click', skipButtonClickHandler);
  userInterface.appendChild(skipButton); 


  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};


///
const answerClickHandler = (selectedAnswer, correctAnswer) => {
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  const answerElements = answersListElement.getElementsByTagName('button');

  for (const answerElement of answerElements) {
    if (answerElement.id === selectedAnswer) {
      answerElement.style.backgroundColor = selectedAnswer === correctAnswer ? 'green' : 'red';
    }
    if (answerElement.id === correctAnswer) {
      answerElement.style.backgroundColor = 'green';
    }
  }
};
///

const skipButtonClickHandler = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  const answerElements = answersListElement.getElementsByTagName('button');

  for (const answerElement of answerElements) {
    if (answerElement.id === currentQuestion.correctAnswer) {
      answerElement.style.backgroundColor = 'green';
    }
  }

  // Optionally, you can display a message or perform additional actions here
  console.log('Correct answer revealed.');
};
//

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};