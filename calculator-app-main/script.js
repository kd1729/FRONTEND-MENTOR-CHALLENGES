

var num1 = 0;
var num2 = 0;

var operator;
var ans = 0;

var temp1 = true;
var k = 10;
var p = 1;

var calculated;

var output = document.getElementById("output");


function Input(n) {
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
}

function clickOperator() {
    removeActive();
    resetDecimal();
    output.innerText = "";
    temp1 = false;
    calculated = false;
}

function Add() {
    clickOperator()
    document.getElementById("add").classList.add("active-operator");
    operator = 1;
}


function Subtract() {
    clickOperator()
    document.getElementById("subtract").classList.add("active-operator");
    operator = 2;
}


function Multiply() {
    clickOperator()
    document.getElementById("multiply").classList.add("active-operator");
    operator = 3;
}


function Divide() {
    clickOperator()
    document.getElementById("divide").classList.add("active-operator");
    operator = 4;
}

var decimalFlag = false;
function Decimal() {
    k = 1;
    decimalFlag = true;
}


function Calculate() {

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (isNaN(num1) || isNaN(num2)) { // Values validation
        return Number.NaN;
    }

    let strNum1 = num1 + '',
        strNum2 = num2 + '',
        dpNum1 = !!(num1 % 1) ? (strNum1.length - strNum1.indexOf('.') - 1) : 0, // Get total decimal places of num1
        dpNum2 = !!(num2 % 1) ? (strNum2.length - strNum2.indexOf('.') - 1) : 0, // Get total decimal places of num2
        multiplier = Math.pow(10, dpNum1 > dpNum2 ? dpNum1 : dpNum2), // Compare dpNum1 and dpNum2, then find value of 10 to the power of the largest between them.
        tempNum1 = Math.round(num1 * multiplier), // Multiply num1 by multiplier to eliminate all decimal places of num1.
        tempNum2 = Math.round(num2 * multiplier); // Multiply num2 by multiplier to eliminate all decimal places of num2.


    calculated = true;
    if (operator == 1)
        ans = (tempNum1 + tempNum2) / multiplier;
    if (operator == 2)
        ans = (tempNum1 - tempNum2) / multiplier;
    if (operator == 3)
        ans = (tempNum1 * tempNum2) / (multiplier * multiplier);
    if (operator == 4) {
        if (num2 == 0) {
            ans = "";
            alert("can't divide by 0");
            Reset();
        }
        else
            ans = (tempNum1 / tempNum2);
    }
    output.innerText = ans;
    num1 = parseFloat(output.innerText);
    num2 = 0;

    removeActive();
}


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
        if(multiplier == 10) resetDecimal();
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
        if(multiplier == 10) resetDecimal();
        output.innerText = num2;
    }
}


function Reset() {
    temp1 = true;
    num1 = 0;
    num2 = 0;
    output.innerText = 0;
    resetDecimal();
    removeActive();
}

function resetDecimal() {
    k = 10;
    p = 1;
    decimalFlag = false;
}


function removeActive() {
    document.getElementById("add").classList.remove("active-operator");
    document.getElementById("subtract").classList.remove("active-operator");
    document.getElementById("multiply").classList.remove("active-operator");
    document.getElementById("divide").classList.remove("active-operator");
}



