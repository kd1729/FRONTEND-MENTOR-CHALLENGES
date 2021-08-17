var YOU = document.getElementById("you");
var HOUSE = document.getElementById("house");
var CHOOSE = document.getElementById("choose");
var PICKED = document.getElementById("picked");

var Val, idx;
var YouClass, HouseClass;
var array = ["img-scissors", "img-rock", "img-paper"];
var score = 0;
var result = document.getElementById("result");

function myInput(val) {

    CHOOSE.style.display = "none";
    PICKED.style.display = "flex";
            
    Val = val
    idx = Math.floor(Math.random() * 3);
    HouseClass = array[idx];

    YouClass = array[Val];
    YOU.classList.add(YouClass);
    HOUSE.classList.add(HouseClass);

    if (Val > idx || (Val === 0 && idx === 2)){
        score++;
        result.innerText = "You Won 😀";
    }
    else if (Val < idx || (Val === 2 && idx === 0)){
        score--;
        result.innerText = "You Lost 😪";
    }
    else{
        result.innerText = "Draw 😐";
    }
   document.getElementById("score").innerText = score;
}




function playAgain() {
    YOU.classList.remove(YouClass);
    HOUSE.classList.remove(HouseClass);
    CHOOSE.style.display = "flex";
    PICKED.style.display = "none";
}

function Reset(){
    score = 0;
    document.getElementById("score").innerText = score;
    result.innerText = "";
    CHOOSE.style.display = "flex";
    PICKED.style.display = "none";
}