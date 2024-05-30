/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key.toUpperCase()}: ${answerText}
  `;
  return element;
};

export const handleAnswerClick = (selectedKey) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;
  if (selectedKey === correctAnswer) {
    quizData.score += 1;
    console.log('Correct!');
  } else {
    console.log('incorrect!');
  }
  nextQuestion();
};
