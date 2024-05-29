import { quizData, loadQuizData, saveQuizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

/**
 * Load the application and initialize the welcome page
 */
const loadApp = () => {
  loadQuizData();
  quizData.currentQuestionIndex = quizData.currentQuestionIndex || 0;

  initWelcomePage();
  window.addEventListener('beforeunload', saveQuizData); // Save data before the window is unloaded
};

window.addEventListener('load', loadApp);
