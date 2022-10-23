const baseInput = document.querySelector("#input-base");
const heightInput = document.querySelector("#input-height");
const outputText = document.querySelector("#output-area");

const calculateBtn = document.querySelector("#calculate-btn");


function calculateArea(){
    if(baseInput.value < 0 || heightInput.value < 0 || baseInput.value == "" || heightInput.value == ""){
        outputText.innerText = "please input valid values"
    }
    else{

    
    const calculateTheArea = (baseInput.value * heightInput.value)/2

    outputText.innerText = "The area of the triangle is " + calculateTheArea + " unit sq.";
}
}

calculateBtn.addEventListener("click", calculateArea)