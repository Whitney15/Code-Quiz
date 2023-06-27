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

var currentQuestionNumber = 0;
var score = 0;
var isWin = false;
var timer;
var timerCount;

// The startGame function is called when the start button is clicked
    function startQuiz() {
    currentQuestionNumber = 0;
    score = 0;
    timerCount = 10;
    nextButton.innerHTML = "next";
    showQuestion();
  }
//  showing the question html page
  function showQuestion(){
    resetState();
    var currentQuestion = questions[currentQuestionNumber];
    var questionsNo = currentQuestionNumber + 1;
    questionsAsked.innerHTML = questionsNo + ". " + currentQuestion.question;

// showing answer on html page
    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
  }
function  resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
     answerButton.removeChild(answerButton.firstChild);
    }
}

  startQuiz();