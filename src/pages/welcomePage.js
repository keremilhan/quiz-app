import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  CONFIRM_BUTTON_ID,
  INPUT_NAME_ID,
  INPUT_P_TAG_ID,
  WELCOME_MESSAGE_ID,
  CONTINUE_BUTTON_ID,
} from '../constants.js';
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
  const confirmButton = document.getElementById(CONFIRM_BUTTON_ID);
  const continueButton = document.getElementById(CONTINUE_BUTTON_ID);
  const startButton = document.getElementById(START_QUIZ_BUTTON_ID);
  const nameInput = document.getElementById(INPUT_NAME_ID);
  const namePrompt = document.getElementById(INPUT_P_TAG_ID);
  const welcomeMessage = document.getElementById(WELCOME_MESSAGE_ID);

  function updateConfirmButtonState() {
    nameInput.value = nameInput.value.trimStart();
    const name = nameInput.value;
    if (name) {
      confirmButton.classList.remove('button-disabled');
      confirmButton.classList.add('button-enabled');
      confirmButton.disabled = false;
      confirmButton.style.backgroundColor = 'rgb(221, 113, 162)';
      confirmButton.style.cursor = 'pointer';
    } else {
      confirmButton.classList.add('button-disabled');
      confirmButton.classList.remove('button-enabled');
      confirmButton.disabled = true;
      confirmButton.style.backgroundColor = 'rgb(232, 232, 232)';
      confirmButton.style.cursor = 'not-allowed';
    }
  }

  function updateContinueButtonState() {
    nameInput.value = nameInput.value.trimStart();
    const name = nameInput.value;
    const storagedPlayerName = localStorage.getItem('playerName');

    if (storagedPlayerName) {
      continueButton.classList.remove('button-disabled');
      continueButton.classList.add('button-enabled');
      continueButton.disabled = false;
      continueButton.style.backgroundColor = 'rgb(221, 113, 162)';
      continueButton.style.cursor = 'pointer';
    } else {
      continueButton.classList.add('button-disabled');
      continueButton.classList.remove('button-enabled');
      continueButton.disabled = true;
      continueButton.style.backgroundColor = 'rgb(232, 232, 232)';
      continueButton.style.cursor = 'not-allowed';
    }
  }

  updateConfirmButtonState();
  nameInput.addEventListener('input', updateConfirmButtonState);

  updateContinueButtonState();
  nameInput.addEventListener('input', updateContinueButtonState);

  confirmButton.addEventListener('click', () => {
    const playerName = nameInput.value.trim();
    const storagedPlayerName = localStorage.getItem('playerName');
    if (playerName) {
      if (playerName === storagedPlayerName) {
        const storagedQuestionIndex = localStorage.getItem('questionIndex');
        console.log('storagedQuestionIndex', storagedQuestionIndex);
        if (storagedQuestionIndex) {
          initQuestionPage(Number(storagedQuestionIndex));
        } else {
          initQuestionPage(undefined);
        }
      } else {
        localStorage.setItem('score', 0);
        welcomeMessage.innerText = `Welcome , ${playerName}`;
        welcomeMessage.classList.add('welcome-effect');
        welcomeMessage.style.padding = '20px';
        setTimeout(() => {
          welcomeMessage.style.opacity = 1;
          welcomeMessage.classList.add('green-text');
        }, 100);
        confirmButton.style.display = 'none';
        continueButton.style.display = 'none';
        startButton.style.display = 'block';
        nameInput.style.display = 'none';
        namePrompt.style.display = 'none';
        localStorage.setItem('playerName', playerName);
      }
    }
  });

  continueButton.addEventListener('click', () => {
    const storagedQuestionIndex = localStorage.getItem('questionIndex');
    console.log('storagedQuestionIndex', storagedQuestionIndex);
    if (storagedQuestionIndex) {
      initQuestionPage(Number(storagedQuestionIndex));
    } else {
      initQuestionPage(undefined);
    }
  });

  startButton.addEventListener('click', startQuiz);
};
const startQuiz = () => {
  console.log('Starting the game...');
  initQuestionPage();
};
