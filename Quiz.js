const que01 = document.querySelectorAll(".que01");
const quizForm = document.querySelector(".quiz-form");
const submitAnsBtn = document.querySelector("#submit-btn");

const outputText = document.querySelector("#output-text");

const correctAnswers = ["30", "5", "equilateral", "250", "less than 90"];

 function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    outputText.innerText = "Your score is " + score;
 } 

 submitAnsBtn.addEventListener("click", calculateScore)