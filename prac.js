let adults = 6;
let children = 3;


if (adults < 0){
    adults = 0;
}
if (children < 0){
    children = 0;
}

function calc(adults, children){
    return adults*12 + children*6;
}

for (let i = 1; i<=adults; i++){
    console.log("Ticket #"+ i);
}

window.onload = function(){
    let btn = document.getElementById("buybtn");
    btn.onclick = function(){
        let adults = document.getElementById("adultNum").value;
        let children = document.getElementById("childNum").value;
        let price = calc(adults, children);
        alert(price);
    }
}