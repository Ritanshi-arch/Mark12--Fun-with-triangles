var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var outPut = document.querySelector("#output");

var checkBtn = document.querySelector("#check-btn");

function calculateSumOfAngles(){
  var sumOfAngles = Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
  if(sumOfAngles === 180){
    outPut.innerText = "Yay it is forms a triangle"
  }
  else if(angle1.value == "" || angle2.value == "" || angle3.value == ""){
    outPut.innerText = "Please input values in empty fields"
  }
  else{
    outPut.innerText = "No it does not form a triangle"
  }
}

function clickHandler(){
    
}

checkBtn.addEventListener("click", calculateSumOfAngles)