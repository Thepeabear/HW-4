const testQuestions = [
  {
    question:
      "#1: What is the output of the following code:\n\nvar x = 5;\n\nvar y = “5”;\n\nconsole.log(x == y);",
    choices: ["true", "false", "undefined", "Error"],
    answer: 0, // Index of the correct answer within the choices array
  },
  {
    question: "What does the “this” keyword refer to in JavaScript?",
    choices: [
      "The current function",
      "The global object",
      "The object that the function belongs to",
      "The parent object of the current object",
    ],
    answer: 2, // Index of the correct answer within the choices array
  },
  {
    question: "What is the correct syntax for a “for” loop in JavaScript?",
    choices: [
      "for (var i = 0; i < 5; i++)",
      "for (i = 0; i < 5; i++)",
      "for (var i = 5; i > 0; i–)",
      "for (i = 5; i > 0; i–)",
    ],
    answer: 0, // Index of the correct answer within the choices array
  },
  {
    question:
      "What is the difference between “==” and “===” operators in JavaScript?",
    choices: [
      "They are interchangeable",
      "“==” performs a strict comparison, while “===” performs a loose comparison",
      "“===” performs a strict comparison, while “==” performs a loose comparison",
      "They both perform the same type of comparison",
    ],
    answer: 2, // Index of the correct answer within the choices array
  },
  {
    question: "Which of the following is not a data type in JavaScript?",
    choices: ["Boolean", "String", "Number", "Character"],
    answer: 3, // Index of the correct answer within the choices array
  },
  {
    question:
      "Which of the following is not a valid way to declare a function in JavaScript?",
    choices: [
      "function myFunction() {}",
      "var myFunction = function() {}",
      "() => {}",
      "function = {}",
    ],
    answer: 3, // Index of the correct answer within the choices array
  },
  {
    question: "Which of the following is not a loop in JavaScript?",
    choices: ["for", "while", "do...while", "next"],
    answer: 3, // Index of the correct answer within the choices array
  },
  {
    question:
      "What is the output of the following code: console.log(“5” == 5);",
    options: ["a) true", "b) false", "c) Error", "d) NaN"],
    answer: "a", //true
  },
];
function displayQuestions() {
  let correctAnswers = 0;
  for (let i = 0; i < testQuestions.length; i++) {
    let userAnswer = prompt(
      testQuestions[i].question + "\n" + testQuestions[i].options.join("\n")
    );
    if (userAnswer === testQuestions[i].answer) {
      alert("Correct!");
      correctAnswers++;
    } else {
      alert("Incorrect! The correct answer is " + testQuestions[i].answer);
    }
  }
  alert(
    "You got " +
      correctAnswers +
      " out of " +
      testQuestions.length +
      " questions correct."
  );
}

displayQuestions();
