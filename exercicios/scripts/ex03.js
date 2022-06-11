const showNumbers = document.getElementById('show-numbers');


document.querySelector('#data').addEventListener('submit', function(event) {
    event.preventDefault();
    countNumbers();
})

function countNumbers() {
    const getStart = document.getElementById('start').value;
    const getEnd = document.getElementById('end').value;
    const getSteps = document.getElementById('steps').value;

    if (getStart.length == 0 || getEnd.length == 0 || getSteps.length == 0) {
        alert('[ERRO] Verifique os dados e preencha-os corretamente!');
        showNumbers.innerHTML = '<p>Impossível contar... \u{1F635}\u{1F4AB}</p>';
    } else {
        let wrapNumbers = '';
        showNumbers.innerHTML = '';

        if (Number(getStart) > Number(getEnd)) {
            // Contagem decrescente
            for (let i = Number(getStart);i >= Number(getEnd);i -= Number(getSteps)) {
                // console.log(i);
                wrapNumbers += `${i} \u{1F449} `;
            }
        } else {
            // Contagem crescente
            for (let i = Number(getStart);i <= Number(getEnd);i += Number(getSteps)) {
                // console.log(i);
                wrapNumbers += `${i} \u{1F449} `;
            }
        }

        document.getElementById('start').value = '';
        document.getElementById('end').value = '';
        showNumbers.innerHTML = `<p><strong>Contando:</strong><br>${wrapNumbers} \u{1F3C1}</p>`
    }
}