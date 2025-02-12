import { ANSWERS_LIST_ID, SKIP_QUESTION_BUTTON_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = question => {
    const element = document.createElement('div');

    // I use String.raw just to get fancy colors for the HTML in VS Code.
    element.innerHTML = String.raw`
  <h1 class="question-title">${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>
    <button id='${SKIP_QUESTION_BUTTON_ID}'>Skip</button>
    <button id="${NEXT_QUESTION_BUTTON_ID}">Next</button>
  `;

    return element;
};
