const events = [
    document.getElementById('input-number').addEventListener('submit', event => {
        event.preventDefault();
        addNumbers();
    }),

    document.getElementById('analyze').addEventListener('click', analyzeNumbers)
]

let totalNumbers = [];
const showText = document.getElementsByTagName('div')[2];
const getInputNumber = document.getElementById('number');

function addNumbers(){
    const inputValue = Number(getInputNumber.value);

    if(getInputNumber.value.length == 0){
        window.alert('[ERRO] Informe um número!');
    } else {
        if(totalNumbers.indexOf(inputValue) == -1){
            createTable(inputValue);
            totalNumbers.push(inputValue);
        } else {
            window.alert('[ERRO] Esse número já foi adicionado!');
        }
    }

    getInputNumber.value = '';
    showText.innerHTML = '';
}

function createTable(n){
    const getTable = document.getElementsByTagName('tbody')[0];
    const tr = getTable.appendChild(document.createElement('tr'));
    tr.appendChild(document.createElement('td')).innerHTML = `Valor <strong>${n}</strong> adicionado`;
}

function analyzeNumbers(){
    showText.innerHTML = '';
    let highestNumber = lowestNumber = totalNumbers[0];
    let sumNumbers = 0;
    
    if(totalNumbers.length < 2){
        window.alert('[ERRO] Adicione no mínimo 2 números!');
    } else {
        showText.setAttribute('id', 'result');

        for(let i = 0; i < totalNumbers.length; i++){
            if(totalNumbers[i] > highestNumber){
                highestNumber = totalNumbers[i];
            }
            if(totalNumbers[i] < lowestNumber){
                lowestNumber = totalNumbers[i];
            }
            sumNumbers += totalNumbers[i];
        }

        let averageNumbers = sumNumbers/totalNumbers.length;

        const text = [
            `Ao todo, temos <strong>${totalNumbers.length} números.</strong>`, 
            `O maior valor informado foi: <strong>${highestNumber}</strong>`,
            `O menor valor informado foi: <strong>${lowestNumber}</strong>`,
            `Somando todos os valores, temos: <strong>${sumNumbers}</strong>`,
            `A média dos valores digitados é: <strong>${averageNumbers.toFixed(2)}</strong>`
        ]

        for(let i in text){
            showText.appendChild(document.createElement('p')).innerHTML = text[i];
        }
    }
}