const casePrice = document.getElementById("case-price");
const phonePrice = document.getElementById("phone-price");
let counter = 1;
let phoneTotal = document.getElementById("phone-price");
let caseTotal = document.getElementById("case-price");
let subTotal = document.getElementById("sub-total");
let tex = document.getElementById("tex");
let Total = document.getElementById("total");
function increase(ev, isIncrease, value) {
    //---------------------------------- list item number set -----------------------------------------
    function count() {
        if (isIncrease) {
            let countNumber = parseInt(ev.target.parentNode.previousElementSibling.value);
            counter++
            countNumber = counter;
            ev.target.parentNode.previousElementSibling.value = countNumber;
            return countNumber
        } else {
            let countNumber = parseInt(ev.target.parentNode.nextElementSibling.value);
            counter--;
            if (counter < 0) {
                counter = 0;
            }
            countNumber = counter;
            ev.target.parentNode.nextElementSibling.value = countNumber;
            return countNumber
        }
    }
    let countNumber = count()
    let totalPriceValue = parseInt(ev.target.parentNode.parentNode.nextElementSibling.children[0].innerText);
    //--------------------- price update---------------------- 
    if (value === "phoneCase") {
        let totalPrice = countNumber * 59;
        casePrice.innerText = totalPrice;
    } else {
        let totalPrice = countNumber * 1219;
        phonePrice.innerText = totalPrice;
    }
    // allConsol()
    return countNumber
}
//--------------------- price update---------------------- 


function valueChange(event, value) {
    let updateValue = event.target.value
    if (value === "phoneCase") {
        let totalPrice = updateValue * 59;
        casePrice.innerText = totalPrice;
    } else {
        let totalPrice = updateValue * 1219;
        phonePrice.innerText = totalPrice;
    }
    // allConsol()
}
document.getElementById("check-out").addEventListener("click", function () {
    const voucher = document.getElementById("voucher");
    voucher.classList.remove("d-none")
    let phone = getElementValue(phoneTotal);
    let phoneCase = getElementValue(caseTotal);
    let sub = phone + phoneCase;
    let texValue = (sub * 0.1).toFixed();
    let totalValue = parseInt(sub)+ parseInt(texValue);

    subTotal.innerText = sub;
    tex.innerText = texValue;
    Total.innerText = totalValue;


})


const removeBtnS = document.getElementsByClassName("remove-item");
for(btn of removeBtnS){
   btn.addEventListener("click", function(event){
    const  itemCard = event.target.parentNode.parentNode;
    itemCard.style.display = "none";
   })
}
