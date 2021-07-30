

function calcuateAmount(tipValue){
    let totalBill = document.getElementsByClassName("input-bill")[0].value;
    let totalPersons = document.getElementsByClassName("input-people")[0].value;

    if(totalBill <= 0){
        alert("Bill amount should be greater than 0 !!");
        return;
    }
    if(totalPersons <= 0){
        alert("There should be at least one person !!");
        return;
    }

    if(tipValue < 0){
        alert("Tip perccentage can not be negative !!");
        return;
    }

    let totalTip = tipValue * totalBill / 100;
    let tipAmountPerPerson = totalTip / totalPersons;
    let billAmountPerPerson = ( parseInt(totalBill) +  parseInt(totalTip) ) / totalPersons;
    document.getElementsByClassName("person-value")[0].innerText = "$" + billAmountPerPerson.toFixed(2);
    document.getElementsByClassName("tip-amount-value")[0].innerText = "$" + tipAmountPerPerson.toFixed(2); 
}


function resetValues(){
    document.getElementsByClassName("input-bill")[0].value = "";
    document.getElementsByClassName("input-people")[0].value = "";
    document.getElementsByClassName("person-value")[0].innerText = "$0.00";
    document.getElementsByClassName("tip-amount-value")[0].innerText = "$0.00";
    document.getElementsByClassName("input-custom")[0].value = null;
}

function inputKeyUp(e) {
    if (e.key === 'Enter') {
        let customVal = document.getElementsByClassName("input-custom")[0].value;
        calcuateAmount(customVal);
    }
}