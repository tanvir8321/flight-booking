// first class part
document.getElementById("firstClassFarePlus").addEventListener("click", function(){
    const firstClassFareInput = document.getElementById("firstClassFare");
    const firstClassFare = parseInt(firstClassFareInput.value);
    const firstClassNewFare = firstClassFare + 1;
    firstClassFareInput.value = firstClassNewFare;
    const subTotalInt = document.getElementById('sub-total');
    const newSubTotal = parseInt(subTotalInt.innerText);
    console.log(subTotalInt);
    subTotalInt.innerText = newSubTotal + (firstClassNewFare*150);
    
});
document.getElementById("firstClassFareMinus").addEventListener("click", function(){
    const firstClassFareInput = document.getElementById("firstClassFare");
    const firstClassFare = parseInt(firstClassFareInput.value);
    const firstClassNewFare = firstClassFare - 1;
    if(firstClassNewFare >= 0){
        firstClassFareInput.value = firstClassNewFare;
    }
    const subTotalInt = document.getElementById('sub-total');
    const newSubTotal = parseInt(subTotalInt.innerText);
    console.log(subTotalInt);
    subTotalInt.innerText = newSubTotal + firstClassNewFare;
});

// economy part
document.getElementById("economyFarePlus").addEventListener("click", function(){
    const economyFareInput = document.getElementById("economyFare");
    const economyFare = parseInt(economyFareInput.value);
    const economyNewFare = economyFare + 1;
    economyFareInput.value = economyNewFare;
    
});
document.getElementById("economyFareMinus").addEventListener("click", function(){
    const economyFareInput = document.getElementById("economyFare");
    const economyFare = parseInt(economyFareInput.value);
    const economyNewFare = economyFare - 1;
    if(economyNewFare >= 0){
        economyFareInput.value = economyNewFare;
    }
    
});