var num1 = 0;
var num2 = 0;

var operator;
var ans;

var temp1 = true;
var temp2 = false;

var output = document.getElementById("output");


function Input(n){
    if(temp1){
        num1 *= 10;
        num1 += n;
        output.innerText = num1;
    }
    else{
        num2 *= 10;
        num2 += n;
        output.innerText = num2;
    }
}

function Add(){
    document.getElementById("add").classList.add("active-operator");
    document.getElementById("subtract").classList.remove("active-operator");
    document.getElementById("multiply").classList.remove("active-operator");
    document.getElementById("divide").classList.remove("active-operator");
    output.innerText = "";
    temp1 = false;
    operator = 1;
}

function Subtract(){
    document.getElementById("subtract").classList.add("active-operator");
    document.getElementById("add").classList.remove("active-operator");
    document.getElementById("multiply").classList.remove("active-operator");
    document.getElementById("divide").classList.remove("active-operator");
    output.innerText = "";
    temp1 = false;
    operator = 2;
}
function Multiply(){
    document.getElementById("multiply").classList.add("active-operator");
    document.getElementById("subtract").classList.remove("active-operator");
    document.getElementById("add").classList.remove("active-operator");
    document.getElementById("divide").classList.remove("active-operator");
    output.innerText = "";
    temp1 = false;
    operator = 3;
}

function Divide(){
    document.getElementById("divide").classList.add("active-operator");
    document.getElementById("subtract").classList.remove("active-operator");
    document.getElementById("multiply").classList.remove("active-operator");
    document.getElementById("add").classList.remove("active-operator");
    output.innerText = "";
    temp1 = false;
    operator = 4;
}

function Calculate(){
    if(operator == 1)
        ans = num1 + num2;
    if(operator == 2)
        ans = num1 - num2;
    if(operator == 3)
        ans = num1 * num2;
    if(operator == 4){
        if(num2 == 0){
            ans ="";
            alert("can't divide by 0");
            Reset();
         }
        else
         ans = num1 / num2;
    }
    output.innerText = ans;
    num1 = parseInt(output.innerText);
}

function Reset(){
    temp1 = true;
    temp2 = false;
    num1 = 0;
    num2 = 0;
    output.innerText = 0;
    document.getElementById("add").classList.remove("active-operator");
    document.getElementById("subtract").classList.remove("active-operator");
    document.getElementById("multiply").classList.remove("active-operator");
    document.getElementById("divide").classList.remove("active-operator");
}