import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  CONTINUE_QUIZ_BUTTON_ID,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { quizData, resetQuizData } from '../data.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  const startButton = document.getElementById(START_QUIZ_BUTTON_ID);
  const continueButton = document.getElementById(CONTINUE_QUIZ_BUTTON_ID);
  const confirmButton = document.getElementById('confirm-button');
  const nameInput = document.getElementById('player-name-input');
  const namePrompt = document.getElementById('name-prompt');
  const welcomeMessage = document.getElementById('welcome-message');

  // Add event listener to start button
  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);

  // Show "Continue" button if the user has already started the quiz
  if (quizData.currentQuestionIndex > 0) {
    continueButton.style.display = 'block';
    continueButton.addEventListener('click', initQuestionPage);
  }

  // Add event listener to name input field
  nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();
    confirmButton.style.display = name ? 'block' : 'none'; // Show confirm button when input has value
    if (name) {
      continueButton.style.display = 'none'; // Hide continue button when a new name is entered
    }
  });

  // Add event listener to confirm button
  confirmButton.addEventListener('click', () => {
    const playerName = nameInput.value.trim();
    if (playerName) {
      welcomeMessage.innerText = `Welcome, ${playerName}`;
      confirmButton.style.display = 'none'; // Hide confirm button
      startButton.style.display = 'block'; // Show start game button
      nameInput.style.display = 'none'; // Hide the input field
      namePrompt.style.display = 'none'; // Hide the <p> tag

      // Reset quiz data for new user
      resetQuizData();
    }
  });

  // Function to start the quiz
  startButton.addEventListener('click', () => startQuiz());
};

const startQuiz = () => {
  console.log('Starting the game...');
  initQuestionPage();
};
