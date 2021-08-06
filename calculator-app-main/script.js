

var num1 = 0;
var num2 = 0;

var operator;
var ans = 0;

var temp1 = true;
var k = 10;
var p = 1;

var calculated;

var output = document.getElementById("output1");
var Expression = document.getElementById("expression");
var decimalFlag = false;


// Below function performs the input of two numbers num1 and num2
// k denotes entering of Integral part, p denotes entering of decimal part
function Input(n) {
    if (calculated) Reset();
    if (decimalFlag)
        p *= 10;
    if (temp1) {
        num1 *= k;
        num1 = num1 + n / p;
        output.innerText = num1;
    }
    else {
        num2 *= k;
        num2 += n / p;
        output.innerText = num2;
    }
    calculated = false;
}

// This functions defines what should happen when user clicks on a operator
function clickOperator() {
    removeActive();
    resetDecimal();
    output.innerText = "";
    temp1 = false;
    calculated = false;
}

// Add operrator
function Add() {
    clickOperator()
    document.getElementById("add").classList.add("active-operator");
    operator = 1;
}

// Subtract Operator
function Subtract() {
    clickOperator()
    document.getElementById("subtract").classList.add("active-operator");
    operator = 2;
}

// Multiply Operator
function Multiply() {
    clickOperator()
    document.getElementById("multiply").classList.add("active-operator");
    operator = 3;
}

// Divide Operator
function Divide() {
    clickOperator()
    document.getElementById("divide").classList.add("active-operator");
    operator = 4;
}

// If user press decimal then make  k = 1 means stop entering integral part and 
// make decimalflag = true means start entering decimal part
function Decimal() {
    k = 1;
    decimalFlag = true;
}

// performs the major calculation by using the selected operator
function Calculate() {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) { 
        return Number.NaN;
    }

    let strNum1 = num1 + '',
        strNum2 = num2 + '',
        dpNum1 = !!(num1 % 1) ? (strNum1.length - strNum1.indexOf('.') - 1) : 0,
        dpNum2 = !!(num2 % 1) ? (strNum2.length - strNum2.indexOf('.') - 1) : 0, 
        multiplier = Math.pow(10, dpNum1 > dpNum2 ? dpNum1 : dpNum2),
        tempNum1 = Math.round(num1 * multiplier),
        tempNum2 = Math.round(num2 * multiplier);


    calculated = true;
    var ch;
    if (operator == 1) {
        ans = (tempNum1 + tempNum2) / multiplier;
        ch = "+";;
    }
    if (operator == 2) {
        ans = (tempNum1 - tempNum2) / multiplier;
        ch = "-";
    }
    if (operator == 3) {
        ans = (tempNum1 * tempNum2) / (multiplier * multiplier);
        ch = "*";
    }
    if (operator == 4) {
        ch = "/";
        if (num2 == 0) {
            ans = "";
            alert("can't divide by 0");
            Reset();
            return;
        }
        ans = (tempNum1 / tempNum2);
    }
    output.innerText = ans;
    Expression.innerText = num1 + ch + num2 + " = " + ans;
    num1 = parseFloat(output.innerText);
    num2 = 0;

    removeActive();

}

// Deletes the rightmost digit
function Delete() {
    if (calculated) Reset();
    else if (temp1) {
        let strNum = num1 + '',
            dpNum = !!(num1 % 1) ? (strNum.length - strNum.indexOf('.') - 1) : 0,
            multiplier = Math.pow(10, dpNum),
            tempNum = Math.round(num1 * multiplier);


        if (multiplier == 1) {
            num1 = parseInt(num1 / 10);
        }
        else {
            p /= 10;
            tempNum = parseInt(tempNum / 10);
            num1 = 10 * tempNum / multiplier;
        }
        if (multiplier == 10) resetDecimal();
        output.innerText = num1;
    }
    else {
        let strNum = num2 + '',
            dpNum = !!(num2 % 1) ? (strNum.length - strNum.indexOf('.') - 1) : 0,
            multiplier = Math.pow(10, dpNum),
            tempNum = Math.round(num2 * multiplier);


        if (multiplier == 1) {
            num2 = parseInt(num2 / 10);
        }
        else {
            p /= 10;
            tempNum = parseInt(tempNum / 10);
            num2 = 10 * tempNum / multiplier;
        }
        if (multiplier == 10) resetDecimal();
        output.innerText = num2;
    }
}

// Resets the calculator
function Reset() {
    temp1 = true;
    num1 = 0;
    num2 = 0;
    output.innerText = 0;
    resetDecimal();
    removeActive();
    Expression.innerText = "";
}

//Resets the decimal : entering integer part on and entering decimal part off
function resetDecimal() {
    k = 10;
    p = 1;
    decimalFlag = false;
}

// removes the active operator
function removeActive() {
    document.getElementById("add").classList.remove("active-operator");
    document.getElementById("subtract").classList.remove("active-operator");
    document.getElementById("multiply").classList.remove("active-operator");
    document.getElementById("divide").classList.remove("active-operator");
}



// Theme changer    

const toggle = document.getElementById('toggle');

const body = document.body;
const buttons = document.getElementsByClassName("myButton");
const heading = document.getElementById("heading");
const input1 = document.getElementById("input1");
const output1 = document.getElementById("output1");
const Delete1 = document.getElementById("delete");
const reset = document.getElementById("reset");
const calculate = document.getElementById("calculate");

toggle.addEventListener('input', e => {
    const isChecked = e.target.checked;
    body.classList.toggle('theme-dark');
    body.classList.toggle('yellow-text-dark');
    heading.classList.toggle('yellow-text-dark');
    input1.classList.toggle("input-output-theme-dark");
    output1.classList.toggle("input-output-theme-dark");
    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.toggle('yellow-text-dark');
        buttons[i].classList.toggle('button-background-dark');
    }
    calculate.classList.toggle("equal-dark");
    reset.classList.toggle("delete-reset-dark");
    Delete1.classList.toggle("delete-reset-dark");

});

