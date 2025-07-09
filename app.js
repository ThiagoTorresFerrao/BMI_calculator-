const showMessage = (msg, isError = true) => {
	const messageDiv = document.getElementById('message');
	messageDiv.innerHTML = `<p style="color: ${isError ? 'red' : 'green'}">${msg}</p>`;
};

const clearMessages = () => {
	document.getElementById('message').innerHTML = '';
	document.getElementById('result').innerHTML = '';
};

const calcImc = () => {
	clearMessages(); // limpar mensagens anteriores

	let name = document.getElementById('name').value.trim();
	let height = parseFloat(document.getElementById('height').value.replace(',', '.')) / 100; // cm → m
	let weight = parseFloat(document.getElementById('weight').value.replace(',', '.'));

	// Validação do nome somente letras e espaços
	if (name === '') {
		showMessage('Por favor, preencha o nome.');
		return;
	}
	if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(name)) {
		showMessage('Nome inválido! Use apenas letras e espaços.');
		return;
	}

	// Validação da altura Maior que 0, entre 50cm e 2,5m
	if (isNaN(height) || height <= 0) {
		showMessage('Altura inválida! Digite um número maior que zero.');
		return;
	}
	if (height < 0.5 || height > 2.5) {
		showMessage('Altura fora do intervalo esperado (50cm a 2,5m).');
		return;
	}

	// Validação do peso Maior que 0, entre 10kg e 300kg
	if (isNaN(weight) || weight <= 0) {
		showMessage('Peso inválido! Digite um número maior que zero.');
		return;
	}
	if (weight < 10 || weight > 300) {
		showMessage('Peso fora do intervalo esperado (10kg a 300kg).');
		return;
	}

	// Cálculo do IMC
	const calculateImc = weight / (height ** 2);
	let classification = '';

	if (calculateImc < 18.5) {
		classification = 'Magreza';
	} else if (calculateImc <= 24.9) {
		classification = 'Normal';
	} else if (calculateImc <= 29.9) {
		classification = 'Sobrepeso';
	} else if (calculateImc <= 34.9) {
		classification = 'Obesidade grau I';
	} else if (calculateImc <= 39.9) {
		classification = 'Obesidade grau II';
	} else {
		classification = 'Obesidade grau III';
	}

	// Exibição do resultado
	document.getElementById('result').innerHTML = `
		<p>${name}, seu IMC é: <strong>${calculateImc.toFixed(1)}</strong><br>
		Classificação: <strong>${classification}</strong></p>
	`;

	// Mensagem de sucesso
	showMessage('Cálculo realizado com sucesso!', false);

	// Limpar campos
	document.getElementById('name').value = '';
	document.getElementById('height').value = '';
	document.getElementById('weight').value = '';
};
