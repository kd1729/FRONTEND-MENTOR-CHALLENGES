var answer = true;

function check() {
    var checkbox = document.getElementById("cToggle");
    if (checkbox.checked) answer = false;
    else answer = true;
    calculate();
}


function  calculate() {
    var slider = document.getElementById("myRange");
    var val = answer ? slider.value * 20 : slider.value * 15;
    document.getElementById("one").innerText = slider.value + "M";
    document.getElementById("two").innerText = "$" + val;
}

