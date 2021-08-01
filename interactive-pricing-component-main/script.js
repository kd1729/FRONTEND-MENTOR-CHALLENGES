var slider = document.getElementById("myRange");
slider.oninput = function() {
    document.getElementById("one").innerText=this.value;
    document.getElementById("two").innerText="$" + this.value*100;
}