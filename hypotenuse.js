const inputs = document.querySelectorAll(".inputs-isTriangle");
const calculateBtn = document.querySelector("#calculate-btn");
const output = document.querySelector("#output-hypo")


function calculateSumOfSquares(a, b){
     const sumOfSquares = a*a + b*b;
     return sumOfSquares;
}

function calculateHypo(){

   if(inputs[0].value == "" || inputs[1].value == "" || inputs[0].value <= 0 || inputs[1].value <= 0){
      output.innerText = "Please check your input values";
   }
   else{

      const sumOfSquares = calculateSumOfSquares(Number(inputs[0].value), Number(inputs[1].value));
   
      const hypotenuseLength = Math.sqrt(sumOfSquares).toFixed(2);
   
      output.innerText = "The length of the Hypotenuse is " + hypotenuseLength;
   }
      
   }
   
   calculateBtn.addEventListener("click", calculateHypo)