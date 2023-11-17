const questions = [
  {
    question: "first question",
    answers: [
      { text: "first", correct: false },
      { text: "second", correct: true },
      { text: "third", correct: false },
      { text: "forth", correct: false },
    ],
  },
  {
    question: "second question",
    answers: [
      { text: "first", correct: true },
      { text: "second", correct: false },
      { text: "third", correct: false },
      { text: "forth", correct: false },
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

function showQuestion()
{
    resetState();
    const currentQuestion = questions[currentQuestionindex];
    const questionNo = currentQuestionindex + 1;
    questionsElements.innerText = questionNo + " ." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        // console.log(answer.text);
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if (answer.correct)
        {
            button.dataset.correct = answer.correct;
            }
        button.addEventListener("click", checkAnswer);
    });
}
function checkAnswer(e)
{
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct;
    if (iscorrect) {
        score++;
        
        selectedbtn.classList.add("correct");

    }
    else
    {
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display = "block";

}
function resetState()
{
    nextbtn.style.display = "none";
    while (answerbtn.firstChild) {
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

nextbtn.addEventListener("click", () => {
    if (currentQuestionindex < (questions.length))
    {
        // console.log(questions.length);
        hendleNextBtn();    
    }
    else {
        // console.log("restarting...");
        // console.log(currentQuestionindex);
        // console.log(questions.length);
        
        startQuiz();  
        // console.log("restarting...");
    }
})

function hendleNextBtn()
{
    currentQuestionindex++;
    if (currentQuestionindex < questions.length)
    {
        
        showQuestion();
    }
    else
    {
        showscore();
        }
}

function showscore()
{
    resetState();
    questionsElements.innerText = "Your score  " + score + "out of " + questions.length + "!.";
    nextbtn.innerHTML = "star again"
    nextbtn.style.display = "block";
}
startQuiz();
