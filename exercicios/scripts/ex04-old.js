const multiplicationTable = document.getElementById('multiplication-table');

document.getElementById('data').addEventListener('submit', function(event) {
    event.preventDefault(); /* previne ação default do submit */
    generateMultiplicationTable();
})

function generateMultiplicationTable() {
    const getNumber = document.getElementById('number');

    if (getNumber.value == "") {
        alert('[ERRO] Informe um número!');
    } else {
        multiplicationTable.innerHTML = ``;
        multiplicationTable.classList.add('show');
        
        const tr = multiplicationTable.appendChild(document.createElement('tr'));
        const title = [`Tabuada`,` `,`Multiplicador`,` `,`Resultado`];
        
        for (let i = 0; i < 5; i++) {
            tr.appendChild(document.createElement('th')).innerHTML = title[i];
        }
        
        for (let i = 1; i <= 10; i++) {
            const tr = multiplicationTable.appendChild(document.createElement('tr'));
            const result = [`${Number(getNumber.value)}`,`x`,`${i}`,`=`,`<strong>${Number(getNumber.value)*i}</strong>`];
            // let td = [];
            
            for (let x = 0; x < 5; x++) {
                // td.push(document.createElement('td'));
                /* coloca o td como filho dos tr, com resultado */
                // tr.appendChild(td[x]).innerHTML = result[x];
                tr.appendChild(document.createElement('td')).innerHTML = result[x];
            }
        }
        /* reseta o valor */
        getNumber.value = '';
    }
}

/* código antigo */
/* 
tr.appendChild(document.createElement('td')).innerText = `${getNumber}`;
tr.appendChild(document.createElement('td')).innerText = `x`;
tr.appendChild(document.createElement('td')).innerText = `${i}`;
tr.appendChild(document.createElement('td')).innerText = `=`;
tr.appendChild(document.createElement('td')).innerHTML = `<strong>${getNumber*i}</strong>`;

tr.innerHTML = <td>${getNumber}</td><td>x</td><td>${i}</td><td>=</td><td><strong>${getNumber*i}</strong></td>;

console.log(`${getNumber} x ${i} = ${getNumber*i}`);
*/