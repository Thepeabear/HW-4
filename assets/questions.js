const testQuestions = [
  {
    question:
      "#1: What is the output of the following code:\n\nvar x = 5;\n\nvar y = “5”;\n\nconsole.log(x == y);",
    choices: ["a): true", "b): false", "c): undefined", "d): Error"],
    answers: "A", // Index of the correct answer within the choices array
  },
  {
    question: "#2: What does the “this” keyword refer to in JavaScript?",
    choices: [
      "a): The current function",
      "b): The global object",
      "c): The object that the function belongs to",
      "d): The parent object of the current object",
    ],
    answer: "C", // Index of the correct answer within the choices array
  },
  {
    question: "#3: What is the correct syntax for a “for” loop in JavaScript?",
    choices: [
      "a): for (var i = 0; i < 5; i++)",
      "b): for (i = 0; i < 5; i++)",
      "c): for (var i = 5; i > 0; i–)",
      "d): for (i = 5; i > 0; i–)",
    ],
    answer: "B", // Index of the correct answer within the choices array
  },
  {
    question:
      "#4: What is the difference between “==” and “===” operators in JavaScript?",
    choices: [
      "a):They are interchangeable",
      "b):“==” performs a strict comparison, while “===” performs a loose comparison",
      "c):“===” performs a strict comparison, while “==” performs a loose comparison",
      "d):They both perform the same type of comparison",
    ],
    answer: "C", // Index of the correct answer within the choices array
  },
  {
    question: "#5: Which of the following is not a data type in JavaScript?",
    choices: ["a):Boolean", "b):String", "c):Number", "d):Character"],
    answer: "D", // Index of the correct answer within the choices array
  },
  {
    question:
      "#6: Which of the following is not a valid way to declare a function in JavaScript?",
    choices: [
      "a):function myFunction() {}",
      "b):var myFunction = function() {}",
      "c):() => {}",
      "d):function = {}",
    ],
    answer: "D", // Index of the correct answer within the choices array
  },
  {
    question: "#7: Which of the following is not a loop in JavaScript?",
    choices: ["a):for", "b):while", "c):do...while", "d):next"],
    answer: "D", // Index of the correct answer within the choices array
  },
  {
    question:
      "#8: What is the output of the following code: console.log(“5” == 5);",
    options: ["a):true", "b):false", "c):Error", "d):NaN"],
    answer: "A", //true
  },
  {
    question:
      "#9: What is the difference between “let” and “const” keywords in JavaScript?",
    options: [
      "a): They are interchangeable",
      "b): “let” variables cannot be reassigned, while “const” variables can",
      "c): “const” variables cannot be reassigned, while “let” variables can",
      "d): “let” and “const” both refer to constant variables",
    ],
    answer: "c",
  },
  {
    question:
      "#10: Which of the following is not a comparison operator in JavaScript?",
    options: ["a) ==", "b) ===", "c) !=", "d) =<"],
    answer: "d",
  },
  {
    question:
      "#11: What is the output of the following code?\nvar x = 5;\nconsole.log(x++);",
    options: ["a) 4", "b) 5", "c) 6", "d) Error"],
    answer: "b",
  },
];
