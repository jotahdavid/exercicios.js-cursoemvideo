const events = [
	document.getElementById('data').addEventListener('submit', (event) => {
		event.preventDefault(); /* previne ação default do submit */
		generateMultiplicationTable();
	}),

	document.getElementById('button').addEventListener('click', generateRandomNumber)
];

const multiplicationTable = document.getElementById('multiplication-table');
const getInputNumber = document.getElementById('number');
let $number;

function generateMultiplicationTable($randomNumber) {
	/* verificar se a opção RANDOM foi escolhida */
	if ($randomNumber != undefined) {
		getInputNumber.value = 0;
		if ($number === $randomNumber) { /* <- verificar se o número RANDOM é o mesmo que o anterior */
			generateRandomNumber();
			return
		} else {
			$number = $randomNumber;
		}
	} else {
		$number = Number(getInputNumber.value)
	}

	if (getInputNumber.value.length === 0) {
		window.alert('[ERRO] Informe um número!');
		showTable(false);
		clearText(multiplicationTable);
	} else if (getInputNumber.value.length > 15) {
		window.alert('[ERRO] Informe um número menos extenso!');
		showTable(false);
		clearText(multiplicationTable);
	} else {
		clearText(multiplicationTable); /* <- limpa a tabela */

		showTable(true);

		createTable();

		clearText(getInputNumber);  /* <- apaga o valor do input */
	}
}

function clearText(x) {
	if (x.type == "number") {
		x.value = '';
	} else {
		x.innerHTML = '';
	}
}

function showTable(show) {
	if (show) {
		multiplicationTable.classList.add('show');
	} else {
		multiplicationTable.classList.remove('show');
	}
}

function generateRandomNumber() {
	const n = Math.floor(Math.random() * 10, 2);
	if (n == 0) {
		generateMultiplicationTable(n + 10);
	} else {
		generateMultiplicationTable(n);
	}
}

function createTable() {
	/* criando th - títulos */
	const tr = multiplicationTable.appendChild(document.createElement('tr'));
	const title = [ 'Tabuada', '  ', 'Multiplicador', '  ', 'Resultado' ];
	title.forEach(value => {
		tr.appendChild(document.createElement('th')).innerHTML = value;
	});
	
	/* criando td - conteúdo */
	for (let i = 1; i <= 10; i++) {
		const tr = multiplicationTable.appendChild(document.createElement('tr'));
		const content = [$number, 'x', i, '=', `<strong>${$number * i}</strong>`];

		content.forEach(value => {
			tr.appendChild(document.createElement('td')).innerHTML = value; /* <- cria td nas tr com texto */
		});
	}
}