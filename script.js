function convertToUSD(money) {
    return money*1.4;
}
console.log(convertToUSD(50));

function convertTOBRL(money) {
    return money*5.7*0.99;   
}
console.log(convertTOBRL(320))


function convertMoney(a,b) {
    money=100;
    if (a==="USD"&&b===1.4){
        return money*1.4+"USD";
    }
    else if(a==="BRL"&&b===5.7){
        return money*5.7*0.99+"BRL"
    }
    else if(a==="TL"&&b===19){
        return money*19*0.99+"TL"
    }
    else{
        return "hatali giris yaptiniz"
    }
}
console.log(convertMoney("TL",19))
console.log(convertMoney("USD",1.4))
console.log(convertMoney("BRL",5.7))
