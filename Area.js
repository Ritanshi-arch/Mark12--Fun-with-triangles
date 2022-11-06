const inputSides = document.querySelectorAll(".input");
const checkBtn = document.querySelector("#CheckArea");
const outPut = document.querySelector("#outputA");

function calculateArea(base , height) {
    const calculation = base * height /2 ;
    return(calculation);
} 


function triangleIs() {
    const calculation = calculateArea(Number(inputSides[0].value),Number(inputSides[1].value));
     if(inputSides[0].value == 0 )
    {
        outPut.innerText = ("😓Value can't be NULL in Base input 😓")
    }
    else if(inputSides[0].value < 0 )
    {
        outPut.innerText = ("😟Value can't be Negative in Base input 😟")
    }
    else if(inputSides[1].value == 0 )
    {
        outPut.innerText = ("😓Value can't be null in Height input 😓")
    }
    else if(inputSides[1].value < 0 )
    {
        outPut.innerText = ("😟Value can't be Negative in Height input 😟")
    }
    else {outPut.innerText = "😃 Area of Triangle is " + calculation + " cm² 😃 ";}
    
    }


checkBtn.addEventListener("click", triangleIs);