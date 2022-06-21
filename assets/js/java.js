var starterBtn = document.querySelector("#starterBtn");
var pageContentEl = document.querySelector("#page-content");
var quizAnswerEl = document.querySelector("#answers");
var quizAnswerEl2 = document.querySelector("#answers2");
var firstClassDisplay = document.querySelector(".firstDisplay");
var secondClassHidden = document.querySelector(".secondHidden");
var quizEl = document.querySelector("#quiz");
var beforeQuiz = document.querySelector("#beforeQuiz");
var counter = 60;
var timerEl = document.getElementById("timer")
var questionEl = document.getElementById("question")
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
var answer5 = document.getElementById("answer5")
var answer6 = document.getElementById("answer6")
var answer7 = document.getElementById("answer7")
var answer8 = document.getElementById("answer8")
var scoreEl = document.getElementById("score")
var whatQuestion = 1;


var questions = [
    "Commonly used data types DO NOT include...",
    "A function is enclosed in what?",
]

var answers = [
    "Bolean",
    "String",
    "Numeric",
    "Value",
    "' '",
    "[]",
    "{}",
    "()"
]

//START QUIZ BUTTON
var startQuiz = function(event) {
    var targetEl = event.target;

    if (targetEl.matches("#starterBtn")) {
        Quiz();
    }
}
// QUIZ
var Quiz = function() {
    quizEl.className = "secondDisplay";
    beforeQuiz.className = "firstHidden";
    startCounter();
    questionEl.textContent = questions[0]
    
    answer1.textContent = answers[0]
    answer2.textContent = answers[1]
    answer3.textContent = answers[2]
    answer4.textContent = answers[3]
    

}


//START COUNTER
var startCounter = function() {

    counter = 30;

var timeInterval = setInterval(function () {
    
    if (counter > 1) {
      timerEl.textContent = counter + ' seconds remaining';
      counter--;
    } 
    else if (counter === 1) {
      timerEl.textContent = counter + ' second remaining';
      counter--;
    } 
    else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
    }
    noTime();
    
  }, 1000);

}

var usersAnswer = function(event) {
    var targetEl = event.target;
    

    if (targetEl.matches ("#answer4"))  {
        console.log("yes")
        counter = counter + 10;
        questionEl.textContent = questions[1];
        answer5.textContent = answers[4];
        answer6.textContent = answers[5];
        answer7.textContent = answers[6];
        answer8.textContent = answers[7];
        whatQuestion = whatQuestion + 1;
        console.log(whatQuestion)
        quizAnswerEl.className = "secondHidden";
        quizAnswerEl2.className = ""
        
    } 

    else {
        counter = counter - 15;
        questionEl.textContent = questions[1];
        answer5.textContent = answers[4];
        answer6.textContent = answers[5];
        answer7.textContent = answers[6];
        answer8.textContent = answers[7];
        whatQuestion = whatQuestion + 1;
        quizAnswerEl.className = "secondHidden";
        quizAnswerEl2.className = ""
    }
    

}

var secondAnswer = function(event) {
    var targetEl = event.target;
    var score = counter;
    
    if (targetEl.matches("#answer7")) {
        score = score + 10;
        quizEl.className = "secondHidden";
    }
    else {
        score = score - 15;
        quizEl.className = "secondHidden";
        
    }
    var name = prompt("The Game is over, What is your name?")
    counter = score
    scoreEl.textContent = name + "'s score is " + score
    alert(name + "'s score is " + score)
    
    
}
var noTime = function() {
if(counter <= 0) {
    quizEl.className = "secondHidden";
    quizAnswerEl.className = "secondHidden";
    alert("You have ran out of time! The game is over. Better luck next time!")
    var retry = confirm("Would you like to try again?")
    console.log(retry)
    
if (retry === true) {
    location.reload();
} 
    
    
}




}








quizEl.addEventListener("click", usersAnswer)
pageContentEl.addEventListener("click", startQuiz)
quizAnswerEl2.addEventListener("click", secondAnswer)


