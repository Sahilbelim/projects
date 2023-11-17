const questions = [
  {
    question: `What is the result of the following code ?
python
x = 5
y = 2
result = x ** y
`,
    answers: [
      { text: "10", correct: false },
      { text: "25", correct: true },
      { text: "7", correct: false },
      { text: "32", correct: false },
    ],
  },
  {
    question: "What does the `zip()` function do in Python?",
    answers: [
      { text: "Unzips a file", correct: false },
      {
        text: "Creates an iterable of tuples from multiple iterables",
        correct: true,
      },
      { text: "Zips a file", correct: false },
      { text: "Deletes a file", correct: false },
    ],
  },
  {
    question:
      "How is an instance method in a class different from a static method?",
    answers: [
      {
        text: "Instance method is called on an instance, static method on the class",
        correct: true,
      },
      {
        text: "Instance method is called on a class, static method on an instance",
        correct: false,
      },
      { text: "They are the same", correct: false },
      {
        text: "Instance methods are used for mathematical operations, static methods for string operations",
        correct: false,
      },
    ],
  },
  {
    question: "What is the purpose of the `__init__` method in a Python class?",
    answers: [
      {
        text: "Initialization method called after an object is created",
        correct: true,
      },
      { text: "Method to initialize a variable", correct: false },
      { text: "Method to create a new object", correct: false },
      { text: "Special method for mathematical operations", correct: false },
    ],
  },
  {
    question: "What is the difference between a list and a tuple in Python?",
    answers: [
      { text: "Lists are immutable, tuples are mutable", correct: false },
      {
        text: "Lists are ordered and mutable, tuples are ordered and immutable",
        correct: true,
      },
      {
        text: "Lists can only contain integers, tuples can contain any data type",
        correct: false,
      },
      {
        text: "There is no difference between lists and tuples",
        correct: false,
      },
    ],
  },
  {
    question: "How can you handle exceptions in Python?",
    answers: [
      { text: "Using if-else statements", correct: false },
      { text: "Using the try-except block", correct: true },
      { text: "Using the raise statement", correct: false },
      { text: "Using the assert statement", correct: false },
    ],
  },
  {
    question: "What does the `__str__` method do in Python?",
    answers: [
      { text: "Converts an object to a string representation", correct: true },
      { text: "Creates a new string object", correct: false },
      { text: "Compares two strings", correct: false },
      { text: "Concatenates two strings", correct: false },
    ],
  },
  {
    question: "How do you open a file in Python for reading and writing?",
    answers: [
      { text: "open('file.txt', 'r')", correct: false },
      { text: "open('file.txt', 'w')", correct: false },
      { text: "open('file.txt', 'rw')", correct: false },
      { text: "open('file.txt', 'r+')", correct: true },
    ],
  },
  {
    question: "What is the purpose of the `__len__` method in Python?",
    answers: [
      { text: "Returns the length of a list or tuple", correct: true },
      { text: "Returns the length of a string", correct: false },
      { text: "Returns the length of an integer", correct: false },
      { text: "Returns the length of a dictionary", correct: false },
    ],
  },
  {
    question: "What is the purpose of the `super()` function in Python?",
    answers: [
      { text: "Calls a method in the parent class", correct: true },
      { text: "Calls a method in the child class", correct: false },
      { text: "Creates a new instance of a class", correct: false },
      { text: "Deletes an instance of a class", correct: false },
    ],
  },
];

const questionsElements = document.getElementById("question");
const answerbtn = document.getElementById("answer-buttons");
const nextbtn = document.getElementById("next-btn");

let currentQuestionindex = 0;
let score = 0;

function startQuiz() {
  currentQuestionindex = 0;
  score = 0;
  currentQuestion = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionindex];
  const questionNo = currentQuestionindex + 1;
  questionsElements.innerText = questionNo + " ." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    // console.log(answer.text);
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerbtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", checkAnswer);
  });
}
function checkAnswer(e) {
  const selectedbtn = e.target;
  const iscorrect = selectedbtn.dataset.correct;
  if (iscorrect) {
    score++;

    selectedbtn.classList.add("correct");
  } else {
    selectedbtn.classList.add("incorrect");
  }
  Array.from(answerbtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbtn.style.display = "block";
}
function resetState() {
  nextbtn.style.display = "none";
  while (answerbtn.firstChild) {
    answerbtn.removeChild(answerbtn.firstChild);
  }
}

nextbtn.addEventListener("click", () => {
  if (currentQuestionindex < questions.length) {
    // console.log(questions.length);
    hendleNextBtn();
  } else {
    // console.log("restarting...");
    // console.log(currentQuestionindex);
    // console.log(questions.length);

    startQuiz();
    // console.log("restarting...");
  }
});

function hendleNextBtn() {
  currentQuestionindex++;
  if (currentQuestionindex < questions.length) {
    showQuestion();
  } else {
    showscore();
  }
}

function showscore() {
  resetState();
  questionsElements.innerHTML = `<center><p>You have completed the quiz ! <br> <br> Nice , You got ${score} out of ${questions.length} questions</p></center>`;
  nextbtn.innerHTML = "star again";
  nextbtn.style.display = "block";
}
startQuiz();
