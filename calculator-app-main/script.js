

var num1 = 0;
var num2 = 0;

var operator;
var ans = 0;

var temp1 = true;
var k = 10;
var p = 1;

var output = document.getElementById("output");


function Input(n) {
    if (temp1){
        num1 *= k;
        num1 += n/p;
        output.innerText = num1;
    }
    else{
        num2 *= k;
        num2 += n/p;
        output.innerText = num2;
    }
}


function Add() {
    removeActive();
    document.getElementById("add").classList.add("active-operator");
    output.innerText = "";
    temp1 = false;
    operator = 1;
}


function Subtract() {
    removeActive();
    document.getElementById("subtract").classList.add("active-operator");
    output.innerText = "";
    temp1 = false;
    operator = 2;
}


function Multiply() {
    removeActive();
    document.getElementById("multiply").classList.add("active-operator");
    output.innerText = "";
    temp1 = false;
    operator = 3;
}


function Divide() {
    removeActive();
    document.getElementById("divide").classList.add("active-operator");
    output.innerText = "";
    temp1 = false;
    operator = 4;
}

function Decimal(){
    if(temp1){
        k = 1;
        p = 10;
    }
}

function Calculate() {
    if (operator == 1)
        ans = num1 + num2;
    if (operator == 2)
        ans = num1 - num2;
    if (operator == 3)
        ans = num1 * num2;
    if (operator == 4) {
        if (num2 == 0) {
            ans = "";
            alert("can't divide by 0");
            Reset();
        }
        else
            ans = num1 / num2;
    }
    output.innerText = ans;
    num1 = parseInt(output.innerText);
    num2 = 0;

    removeActive();
}


function Delete() {
    if (temp1) {
        num1 = parseInt(num1 / 10);
        output.innerText = num1;
    }
    else {
        num2 = parseInt(num2 / 10);
        output.innerText = num2;
    }
}


function Reset() {
    temp1 = true;
    temp2 = false;
    num1 = 0;
    num2 = 0;
    output.innerText = 0;
    p = 1;
    removeActive();
}


function removeActive() {
    document.getElementById("add").classList.remove("active-operator");
    document.getElementById("subtract").classList.remove("active-operator");
    document.getElementById("multiply").classList.remove("active-operator");
    document.getElementById("divide").classList.remove("active-operator");
}

