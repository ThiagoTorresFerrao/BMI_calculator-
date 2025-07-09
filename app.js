const calcImc = () => {
	let name = document.getElementById('name').value;
	let height = parseFloat(document.getElementById('height').value.replace(',', '.')) / 100; // de cm para metros
	let weight = parseFloat(document.getElementById('weight').value.replace(',', '.'));

	if (name != '' && !isNaN(height) && !isNaN(weight)) {
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
		} else if (calculateImc > 40){
			classification = 'Obesidade grau III';
		}

		document.getElementById('result').innerHTML = `<p>${name}, seu IMC é: ${calculateImc.toFixed(1)} <br> Sua classificação é: ${classification}</p>`;

	} else {
		alert('Por favor, preencha todos os campos corretamente!');
	}

	document.getElementById('name').value = '';
	document.getElementById('height').value = '';
	document.getElementById('weight').value = '';
}
