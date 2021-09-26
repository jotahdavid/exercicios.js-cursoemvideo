const getNumber1 = document.getElementById('number1');
const getNumber2 = document.querySelector('#number2');
const result = document.getElementById('result');
const resultsHistory = document.querySelector('#historic');

function calculateSum() {
    let valueNumber1 = Number(getNumber1.value);
    let valueNumber2 = Number(getNumber2.value);
    showResult(valueNumber1, valueNumber2);
    resetNumbers();
}

function resetNumbers() {
    getNumber1.value = ""; 
    getNumber2.value = "";
}

function showResult(x, y) {
    result.classList.add('show');
    resultsHistory.classList.add('show');
    result.innerHTML = `A soma entre ${x} e ${y} é igual: <strong><span>${x + y}</span></strong>`

    let createP = document.createElement('p');
    let createText = document.createTextNode(`${x} + ${y} = ${x + y}`);
    createP.appendChild(createText);
    resultsHistory.appendChild(createP);
}

const sumButton = document.getElementsByTagName('input')[2].addEventListener('click', calculateSum);