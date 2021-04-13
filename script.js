// first class part

document.getElementById("firstClassFarePlus").addEventListener("click", function () {
    const firstClassFareInput = document.getElementById("firstClassFare");
    const firstClassFare = parseInt(firstClassFareInput.value);
    const firstClassNewFare = firstClassFare + 1;
    const firstClassTotalFare = firstClassNewFare * 150;
    firstClassFareInput.value = firstClassNewFare;
    const economyFareInput = document.getElementById("economyFare");
    const economyFare = parseInt(economyFareInput.value);
    const economyTotalFare = economyFare * 100;
    const subTotalFare = economyTotalFare + firstClassTotalFare;
    const subTotalInt = document.getElementById('sub-total');
    subTotalInt.innerText = '$' + subTotalFare;
    const getChargeId = document.getElementById('charge');
    const charge = subTotalFare * 0.10;
    getChargeId.innerText = '$' + charge;
    const getTotalId = document.getElementById('total');
    const total = subTotalFare + charge;
    getTotalId.innerText = '$' + total;

});
document.getElementById("firstClassFareMinus").addEventListener("click", function () {
    const firstClassFareInput = document.getElementById("firstClassFare");
    const firstClassFare = parseInt(firstClassFareInput.value);
    const firstClassNewFare = firstClassFare - 1;
    if (firstClassNewFare >= 0) {
        firstClassFareInput.value = firstClassNewFare;
        const firstClassTotalFare = firstClassNewFare * 150;
        firstClassFareInput.value = firstClassNewFare;
        const economyFareInput = document.getElementById("economyFare");
        const economyFare = parseInt(economyFareInput.value);
        const economyTotalFare = economyFare * 100;
        const subTotalFare = economyTotalFare + firstClassTotalFare;
        const subTotalInt = document.getElementById('sub-total');
        subTotalInt.innerText = '$' + subTotalFare;
        const getChargeId = document.getElementById('charge');
        const charge = subTotalFare * 0.10;
        getChargeId.innerText = '$' + charge;
        const getTotalId = document.getElementById('total');
        const total = subTotalFare + charge;
        getTotalId.innerText = '$' + total;
    }
});

// economy part
document.getElementById("economyFarePlus").addEventListener("click", function () {
    const economyFareInput = document.getElementById("economyFare");
    const economyFare = parseInt(economyFareInput.value);
    const economyNewFare = economyFare + 1;
    economyFareInput.value = economyNewFare;
    const economyTotalFare = economyNewFare * 100;
    economyFareInput.value = economyNewFare;
    const firstClassFareInput = document.getElementById("firstClassFare");
    const firstClassFare = parseInt(firstClassFareInput.value);
    const firstClassTotalFare = firstClassFare * 150;
    const subTotalFare = economyTotalFare + firstClassTotalFare;
    const subTotalInt = document.getElementById('sub-total');
    subTotalInt.innerText = '$' + subTotalFare;
    const getChargeId = document.getElementById('charge');
    const charge = subTotalFare * 0.10;
    getChargeId.innerText = '$' + charge;
    const getTotalId = document.getElementById('total');
    const total = subTotalFare + charge;
    getTotalId.innerText = '$' + total;

});
document.getElementById("economyFareMinus").addEventListener("click", function () {
    const economyFareInput = document.getElementById("economyFare");
    const economyFare = parseInt(economyFareInput.value);
    const economyNewFare = economyFare - 1;
    if (economyNewFare >= 0) {
        economyFareInput.value = economyNewFare;
        const economyTotalFare = economyNewFare * 100;
        economyFareInput.value = economyNewFare;
        const firstClassFareInput = document.getElementById("firstClassFare");
        const firstClassFare = parseInt(firstClassFareInput.value);
        const firstClassTotalFare = firstClassFare * 150;
        const subTotalFare = economyTotalFare + firstClassTotalFare;
        const subTotalInt = document.getElementById('sub-total');
        subTotalInt.innerText = '$' + subTotalFare;
        const getChargeId = document.getElementById('charge');
        const charge = subTotalFare * 0.10;
        getChargeId.innerText = '$' + charge;
        const getTotalId = document.getElementById('total');
        const total = subTotalFare + charge;
        getTotalId.innerText = '$' + total;
    }

});

/* my main code
// first class part
document.getElementById("firstClassFarePlus").addEventListener("click", function () {
    const firstClassFareInput = document.getElementById("firstClassFare");
    const firstClassFare = parseInt(firstClassFareInput.value);
    const firstClassNewFare = firstClassFare + 1;
    const firstClassTotalFare = firstClassNewFare * 150;
    firstClassFareInput.value = firstClassNewFare;
    const economyFareInput = document.getElementById("economyFare");
    const economyFare = parseInt(economyFareInput.value);
    const economyTotalFare = economyFare * 100;
    const subTotalFare = economyTotalFare + firstClassTotalFare;
    const subTotalInt = document.getElementById('sub-total');
    subTotalInt.innerText = '$' + subTotalFare;
    const getChargeId = document.getElementById('charge');
    const charge = subTotalFare * 0.10;
    getChargeId.innerText = '$' + charge;
    const getTotalId = document.getElementById('total');
    const total = subTotalFare + charge;
    getTotalId.innerText = '$' + total;

});
document.getElementById("firstClassFareMinus").addEventListener("click", function () {
    const firstClassFareInput = document.getElementById("firstClassFare");
    const firstClassFare = parseInt(firstClassFareInput.value);
    const firstClassNewFare = firstClassFare - 1;
    if (firstClassNewFare >= 0) {
        firstClassFareInput.value = firstClassNewFare;
        const firstClassTotalFare = firstClassNewFare * 150;
        firstClassFareInput.value = firstClassNewFare;
        const economyFareInput = document.getElementById("economyFare");
        const economyFare = parseInt(economyFareInput.value);
        const economyTotalFare = economyFare * 100;
        const subTotalFare = economyTotalFare + firstClassTotalFare;
        const subTotalInt = document.getElementById('sub-total');
        subTotalInt.innerText = '$' + subTotalFare;
        const getChargeId = document.getElementById('charge');
        const charge = subTotalFare * 0.10;
        getChargeId.innerText = '$' + charge;
        const getTotalId = document.getElementById('total');
        const total = subTotalFare + charge;
        getTotalId.innerText = '$' + total;
    }
});

// economy part
document.getElementById("economyFarePlus").addEventListener("click", function () {
    const economyFareInput = document.getElementById("economyFare");
    const economyFare = parseInt(economyFareInput.value);
    const economyNewFare = economyFare + 1;
    economyFareInput.value = economyNewFare;
    const economyTotalFare = economyNewFare * 100;
    economyFareInput.value = economyNewFare;
    const firstClassFareInput = document.getElementById("firstClassFare");
    const firstClassFare = parseInt(firstClassFareInput.value);
    const firstClassTotalFare = firstClassFare * 150;
    const subTotalFare = economyTotalFare + firstClassTotalFare;
    const subTotalInt = document.getElementById('sub-total');
    subTotalInt.innerText = '$' + subTotalFare;
    const getChargeId = document.getElementById('charge');
    const charge = subTotalFare * 0.10;
    getChargeId.innerText = '$' + charge;
    const getTotalId = document.getElementById('total');
    const total = subTotalFare + charge;
    getTotalId.innerText = '$' + total;

});
document.getElementById("economyFareMinus").addEventListener("click", function () {
    const economyFareInput = document.getElementById("economyFare");
    const economyFare = parseInt(economyFareInput.value);
    const economyNewFare = economyFare - 1;
    if (economyNewFare >= 0) {
        economyFareInput.value = economyNewFare;
        const economyTotalFare = economyNewFare * 100;
        economyFareInput.value = economyNewFare;
        const firstClassFareInput = document.getElementById("firstClassFare");
        const firstClassFare = parseInt(firstClassFareInput.value);
        const firstClassTotalFare = firstClassFare * 150;
        const subTotalFare = economyTotalFare + firstClassTotalFare;
        const subTotalInt = document.getElementById('sub-total');
        subTotalInt.innerText = '$' + subTotalFare;
        const getChargeId = document.getElementById('charge');
        const charge = subTotalFare * 0.10;
        getChargeId.innerText = '$' + charge;
        const getTotalId = document.getElementById('total');
        const total = subTotalFare + charge;
        getTotalId.innerText = '$' + total;
    }

});

*/