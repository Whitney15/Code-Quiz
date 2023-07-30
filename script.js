// 6 query questions
var questions = [
    {
        question: "What is JavaScript?",
        answers: [
            {text: "The process of performing particular computations, usually by designing and building executable computer programs.", correct: false},
            {text: "A lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.", correct: true},
            {text: "A style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.", correct: false},
            {text: "a programming paradigm based on the concept of (objects), which can contain data and code.", correct: false},
        ]
    },
    {
        question: "What are the features of JavaScript?",
        answers: [
            {text: "It is a lightweight, interpreted programming language.", correct: false},
            {text: "It is designed for creating network-centric applications.", correct: false},
            {text: "It is complementary to and integrated with Java.", correct: false},
            {text: "all of the above", correct: true},
        ]
    },
    {
        question: "What are the advantages of JavaScript?",
        answers: [
            {text: "Less server interaction", correct: true},
            {text: "Decreased interactivity", correct: false},
            {text: "Terrible interfaces", correct: false},
            {text: "Slower feedback to the visitors", correct: false},
        ]
    },
    {
        question: "Is JavaScript a case-sensitive language?",
        answers: [
            {text: "Yes", correct: true},
            {text: "No", correct: false},
            
        ]
    }, 
    {
        question: "What is Callback?",
        answers: [
            {text: "When you call someone back over the phone", correct: false},
            {text: "A country band name ", correct: false},
            {text: "A plain JavaScript function passed to some method as an argument or option.", correct: true},
            {text: "A phone comapnies slogan", correct: false},
        ]
    },
    {
        question: "What are some of JavaScript Frameworks?",
        answers: [
            {text: "Angular", correct: false},
            {text: "React", correct: false},
            {text: "Vue", correct: false},
            {text: "All of the above", correct: true},
        ]
    }
];

var questionsAsked = document.getElementById("questions");
var answerButton = document.getElementById("answers");
var nextButton = document.getElementById("next-btn");
var timeLeft = document.querySelector(".time-left");

var currentQuestionNumber = 0;
var score = 0;
// var isWin = false;
// var timer;
var count = 6;
var countdown;
const initialTime = 10;


function resetTimer() {
    count = initialTime;
    timeLeft.innerHTML = `${count}s`;
  }

// Function to show the "Start Quiz!" button and hide the quiz prompts
function showStartButton() {
    var startButton = document.getElementById("start-btn");
    startButton.style.visibility = "visible"; // or startButton.style.display = "block";
    questionsAsked.style.display = "none";
    answerButton.style.display = "none";
    nextButton.style.display = "none";
  }
  
  // Function to hide the "Start Quiz!" button and show the quiz prompts
  function showQuizPrompts() {
    var startButton = document.getElementById("start-btn");
    startButton.style.visibility = "hidden"; // or startButton.style.display = "none";
    questionsAsked.style.display = "block";
    answerButton.style.display = "block";
    nextButton.style.display = "block";
  }
  
  // The startGame function is called when the start button is clicked
  function startQuiz() {


    // Call the function to show the quiz prompts and hide the "Start Quiz!" button
    showQuizPrompts();
  
    // Call the function to show the first question and answers
    showQuestion();
      // Reset the timer when the quiz starts
  resetTimer();
  }
  
  // Add an event listener to the "Start Quiz!" button when the page loads
  document.addEventListener("DOMContentLoaded", function () {
    showStartButton();
    var startButton = document.getElementById("start-btn");
    startButton.addEventListener("click", startQuiz);
  });

//  showing the question html page
  function showQuestion(){
    resetState();
    var currentQuestion = questions[currentQuestionNumber];
    var questionsNo = currentQuestionNumber + 1;
    questionsAsked.innerHTML = questionsNo + ". " + currentQuestion.question;

 // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {
//         // Tests if win condition is met
//         if (isWin && timerCount > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//           winGame();
//         }
//       }
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000);
//   }





// showing answer on html page
    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    
  }
function  resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
     answerButton.removeChild(answerButton.firstChild);
    }
    // where to put the timer enterval??????
    // clearInterval(countdown);
    // timerDisplay(); 
}

function selectAnswer(e){
    resetTimer();
    var selectBtn = e.target;
    var isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect){
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
        // Subtract additional time for an incorrect answer
        count -= 5; // Adjust this value as needed
        if (count < 0) {
          count = 0; // Make sure the timer doesn't go below 0
        }
      }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    // // where to put the timer enterval??????
    clearInterval(countdown);
    timerDisplay();
    
    
}

function showScore(){
    resetState();
    questionsAsked.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    // Reset the timer before showing the next question
    resetTimer();
  
    currentQuestionNumber++;
    if (currentQuestionNumber < questions.length) {
      showQuestion();
    } else {
      showScore();
        // ????
        clearInterval(countdown);
        timerDisplay ();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionNumber < questions.length){
        handleNextButton();   
    }else{
        startQuiz();
        // ???
        clearInterval(countdown);
        timerDisplay();
    }
});

// Timer Display
var timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;

    if (count === 0) {
      clearInterval(countdown);
      timeLeft.innerHTML = "Time's up!";
      // Show the correct answer when the timer runs out
      showCorrectAnswer();
      nextButton.style.display = "block";
      nextButton.innerHTML = "Next";
      disableAnswerButtons();
    }
  }, 1000);
};

function showCorrectAnswer() {
  // Find the button with the correct answer
  var correctButton = Array.from(answerButton.children).find((button) => {
    return button.dataset.correct === "true";
  });

  // Add a class to the correct button to highlight it
  if (correctButton) {
    correctButton.classList.add("correct");
  }
}

function disableAnswerButtons() {
  // Disable all answer buttons
  Array.from(answerButton.children).forEach((button) => {
    button.disabled = true;
  });
}




