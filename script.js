// update element inner text by id
function updateInnerText(id, textValue) {
    const getElement = document.getElementById(id);
    getElement.innerText = '$' + textValue;
}
// update input element value by id
function updateInputValue(id, value) {
    const getElement = document.getElementById(id);
    getElement.value = value;
}
// get input value in integer format by id
function getInputValue(id) {
    const getElement = document.getElementById(id);
    return parseInt(getElement.value);
}

// flight function parameter details: id = passing target button or element id, flightClassId1 = passing first input element id, flightClassId2 = passing sencond input element id, btn = passing + or - for increasing value or decrease, flightClass = passing flight category for calculation different fare 
function flight(id, flightClassId1, flightClassId2, btn, flightClass) {
    document.getElementById(id).addEventListener('click', function () {

        if (flightClass == "first") {
            const fare = getInputValue(flightClassId1);
            const fare2 = getInputValue(flightClassId2);
            let newFare = fare;
            if (btn == '+') {
                newFare = fare + 1;
            } else if (btn == '-' && newFare > 0) {
                newFare = fare - 1;
            }
            updateInputValue(flightClassId1, newFare);
            flightClassFare1 = newFare * 150;
            flightClassFare2 = fare2 * 100;

            const subTotalFare = flightClassFare1 + flightClassFare2;
            const charge = subTotalFare * 0.10;
            const total = subTotalFare + charge;

            updateInnerText('sub-total', subTotalFare);
            updateInnerText('charge', charge);
            updateInnerText('total', total);
        }
        if (flightClass == "economy") {
            const fare = getInputValue(flightClassId2);
            const fare2 = getInputValue(flightClassId1);
            let newFare = fare;
            if (btn == '+') {
                newFare = fare + 1;
            } else if (btn == '-' && newFare > 0) {
                newFare = fare - 1;
            }
            updateInputValue(flightClassId2, newFare);
            flightClassFare1 = newFare * 100;
            flightClassFare2 = fare2 * 150;

            const subTotalFare = flightClassFare1 + flightClassFare2;
            const charge = subTotalFare * 0.10;
            const total = subTotalFare + charge;

            updateInnerText('sub-total', subTotalFare);
            updateInnerText('charge', charge);
            updateInnerText('total', total);
        }

    })
}

flight("firstClassFarePlus", "firstClassFare", "economyFare", "+", "first");
flight("firstClassFareMinus", "firstClassFare", "economyFare", "-", "first");
flight("economyFarePlus", "firstClassFare", "economyFare", "+", "economy");
flight("economyFareMinus", "firstClassFare", "economyFare", "-", "economy");

// for input event : when someone try to input then automatic change the others branch
function myFunction(flightClass) {
    if (flightClass == "first") {
        let getfare = getInputValue("firstClassFare");
        let getfare2 = getInputValue("economyFare");
        const isFare = isNaN(getfare);
        if (!isFare) {
            flightClassFare1 = getfare * 150;
            flightClassFare2 = getfare2 * 100;

            const subTotalFare = flightClassFare1 + flightClassFare2;
            const charge = subTotalFare * 0.10;
            const total = subTotalFare + charge;

            updateInnerText('sub-total', subTotalFare);
            updateInnerText('charge', charge);
            updateInnerText('total', total);
        } else {
            flightClassFare1 = 0;
            flightClassFare2 = getfare2 * 150;

            const subTotalFare = flightClassFare1 + flightClassFare2;
            const charge = subTotalFare * 0.10;
            const total = subTotalFare + charge;
            updateInnerText('sub-total', subTotalFare);
            updateInnerText('charge', charge);
            updateInnerText('total', total);
        }
    }
    if (flightClass == "economy") {
        let getfare = getInputValue("economyFare");
        let getfare2 = getInputValue("firstClassFare");
        const isFare = isNaN(getfare);
        const isFare2 = isNaN(getfare2);
        if (!isFare) {
            flightClassFare1 = getfare * 100;
            flightClassFare2 = getfare2 * 150;

            const subTotalFare = flightClassFare1 + flightClassFare2;
            const charge = subTotalFare * 0.10;
            const total = subTotalFare + charge;

            updateInnerText('sub-total', subTotalFare);
            updateInnerText('charge', charge);
            updateInnerText('total', total);
        } else {
            flightClassFare1 = 0;
            flightClassFare2 = getfare2 * 150;

            const subTotalFare = flightClassFare1 + flightClassFare2;
            const charge = subTotalFare * 0.10;
            const total = subTotalFare + charge;
            updateInnerText('sub-total', subTotalFare);
            updateInnerText('charge', charge);
            updateInnerText('total', total);
        }
    }

}

// after submit
const getSubmit = document.getElementById("submit");
getSubmit.addEventListener("click", function(){
    const getSubmitArea = document.getElementById("submit-massage-area");
    getSubmitArea.style.display = "block";
    getFormArea = document.getElementById('form-area');
    getFormArea.style.display = "none";
})

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