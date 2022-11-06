const que01 = document.querySelectorAll(".que01");
const que02 = document.querySelectorAll(".que02");
const que03 = document.querySelectorAll(".que03");
const que04 = document.querySelectorAll(".que04");
const que05 = document.querySelectorAll(".que05");
const quizBtn = document.querySelector("#quizBtn");
const quizOutput = document.querySelector("#output");


function checkChecked(){

    let score = 0;
    if(que01[1].checked){
        score++
    }

    if(que02[2].checked){
        score++
    }

    if(que03[0].checked){
        score++
    } 

    if(que04[0].checked){
        score++
    }

    if(que05[0].checked){
        score++
    }


    quizOutput.innerText = `Your Score is ${score}`
}

quizBtn.addEventListener("click", checkChecked);