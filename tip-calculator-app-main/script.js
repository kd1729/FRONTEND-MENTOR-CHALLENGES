

function calcuateAmount(){
    let totalBill = document.getElementsByClassName("input-bill")[0].value;
    let totalPersons = document.getElementsByClassName("input-people")[0].value;
    let tipValue = document.getElementsByClassName('myButton')[0].getAttribute('data-value');

    let totalTip = tipValue * totalBill / 100;
    let tipAmountPerPerson = totalTip / totalPersons;
    let billAmountPerPerson = ( parseInt(totalBill) +  parseInt(totalTip) ) / totalPersons;
    document.getElementsByClassName("person-value")[0].innerText = "$" + billAmountPerPerson;
    document.getElementsByClassName("tip-amount-value")[0].innerText = "$" + tipAmountPerPerson; 
}

