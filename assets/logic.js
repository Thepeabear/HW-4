const timerEl = document.querySelector("#timer");
const scoresEl = document.querySelector("#scores");
const testBtn = document.getElementById("test-btn");
const currentScore = document.querySelector("#currentScore");
const questionsContainer = document.getElementById("questions-container");
const choicesContainer = document.getElementById("choices-container");
const answersContainer = document.getElementById("answers-container");
testBtn.addEventListener("click", function () {
  getNextQuestion();
});

let currentIndex = 0;
let score = 0;

function getNextQuestion() {
  const currentQuestion = testQuestions[currentIndex];
  console.log("currentQuestion", currentQuestion);

  const questionTextEl = document.createElement("p");
  questionTextEl.textContent = currentQuestion.question;
  questionsContainer.appendChild(questionTextEl);

  const newChoicesContainer = document.createElement("div");
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choiceEl = document.createElement("button");
    choiceEl.innerText = currentQuestion.choices[i];
    choiceEl.addEventListener("click", function () {
      checkAnswer(choiceEl.innerText);
    });

    newChoicesContainer.appendChild(choiceEl);
  }

  choicesContainer.appendChild(newChoicesContainer);

  const answerInputEl = document.createElement("input");
  answerInputEl.setAttribute("type", "text");
  answerInputEl.setAttribute("placeholder", "Enter your answer here...");
  answersContainer.appendChild(answerInputEl);

  currentScore.textContent = "current Score" + score;

  function checkAnswer(answerInputEl) {
    const correctAnswer = currentQuestion.answers;
    let score = "0";
    if (answerInputEl === currentQuestion.correctAnswer) {
      score++;
    } else {
      score--;
    }

    if (score < 0) {
      score = 0;
    }

    const resultMessageEl = document.createElement("p");
    resultMessageEl.textContent =
      answerInputEl === correctAnswer ? "Correct!" : "Wrong!";
    questionsContainer.appendChild(resultMessageEl);

    removeQuestion();
  }

  function removeQuestion() {
    currentIndex++;

    answerInputEl.disabled = true;

    setTimeout(() => {
      questionsContainer.removeChild(questionTextEl);
      choicesContainer.removeChild(newChoicesContainer);
      answersContainer.removeChild(answerInputEl);

      if (currentIndex < testQuestions.length) {
        getNextQuestion();
      } else {
        const endMessageEl = document.createElement("p");
        endMessageEl.textContent = "All questions answered!";
        questionsContainer.appendChild(endMessageEl);
      }
    }, 2000);
  }

  //answerInputEl.addEventListener("keypress", function (event) {
  //if (event.key === "Enter") {
  //const userAnswer = answerInputEl.value.trim().toLowerCase();

  // Check if the user's answer is correct or wrong
  //const isCorrect =
  //Array.isArray(currentQuestion.answers) &&
  //currentQuestion.answers.includes(userAnswer);

  // Display the result message to the user
  //const resultMessageEl = document.createElement("p");
  //resultMessageEl.textContent = isCorrect ? "Correct!" : "Wrong!";
  //questionsContainer.appendChild(resultMessageEl);

  //removeQuestion();
  //}
  //});
}

function startTimer(duration) {
  secondsLeft = duration;

  // Update the timer element with the initial time
  timerEl.textContent = "Time remaining: " + secondsLeft + " seconds";

  const timerInterval = setInterval(() => {
    secondsLeft--;

    if (secondsLeft < 0) {
      // Clear the interval when the timer reaches 0
      clearInterval(timerInterval);

      // Display end message when time runs out
      const endMessageEl = document.createElement("p");
      endMessageEl.textContent = "Time's up! You didn't finish all questions.";
      questionsContainer.appendChild(endMessageEl);
    } else {
      // Update the timer element with the remaining time
      timerEl.textContent = "Time remaining: " + secondsLeft + " seconds";
    }
  }, 1000); // Set the interval to update once per second
}
