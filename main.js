const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calSumOfAngle(angle1 , angle2 , angle3) {
    const sumOfAngle = angle1 + angle2 + angle3;
    return sumOfAngle;
}

function isTriangle() {
    const sumOfAngle = calSumOfAngle(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(inputs[0].value == 0 )
    {
        outputEl.innerText = ("๐Value can't be null in Angle 1 ๐")
    }
    else if(inputs[0].value < 0 )
    {
        outputEl.innerText = ("๐Value can't be Negative in Angle 1 ๐")
    }
    else if(inputs[1].value == 0 )
    {
        outputEl.innerText = ("๐Value can't be null in Angle 2 ๐")
    }
    else if(inputs[1].value < 0 )
    {
        outputEl.innerText = ("๐Value can't be Negative in Angle 2 ๐")
    }
    else if(inputs[2].value == 0 )
    {
        outputEl.innerText = ("๐Value can't be null in Angle 3 ๐")
    }
    else if(inputs[2].value < 0 )
    {
        outputEl.innerText = ("๐Value can't be Negative in Angle 3๐")
    }
   
    else if(sumOfAngle === 180){
        outputEl.innerText = " ๐ Yay, The angles form a triangles ๐ ";
    } else{
        outputEl.innerText = "๐ฅ oh, oh! The angles don't form a triangle ๐ฅ";    
    }
}


isTriangleBtn.addEventListener("click", isTriangle); 