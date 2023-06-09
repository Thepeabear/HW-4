const questions = require("./questions");
const timerEl = document.querySelector("#timer");
const scoresEl = document.querySelector("#scores");
const testBtn = document.getElementById("test-btn");
const questionsContainer = document.getElementById("questions-container");
const choicesContainer = document.getElementById("choices-container");
const answersContainer = document.getElementById("answers-container");

testBtn.addEventListener("click", function () {
  getNextQuestion();
});

let currentIndex = 0;

function getNextQuestion() {
  const currentQuestion = questions[currentIndex];

  const questionTextEl = document.createElement("p");
  questionTextEl.textContent = "Question: " + currentQuestion.question;
  questionsContainer.appendChild(questionTextEl);

  const choicesTextEl = document.createElement("p");
  choicesTextEl.textContent = "Choices: " + currentQuestion.choices.join(", ");
  choicesContainer.appendChild(choicesTextEl);

  const answersTextEl = document.createElement("p");
  answersTextEl.textContent = "Answers: " + currentQuestion.answers;
  answersContainer.appendChild(answersTextEl);

  currentIndex++;

  // Remove previous question
  setTimeout(() => {
    questionsContainer.removeChild(questionTextEl);
    choicesContainer.removeChild(choicesTextEl);
    answersContainer.removeChild(answersTextEl);

    if (currentIndex < questions.length) {
      // Display next question
      getNextQuestion();
    } else {
      // Display end message when all questions have been answered
      const endMessageEl = document.createElement("p");
      endMessageEl.textContent = "All questions answered!";
      questionsContainer.appendChild(endMessageEl);
    }
  }, 5000); // Change this to however long you want to display each question

  return currentQuestion;
}
