function calcularIMC() {
	var formulario = document.getElementById("formulario");

	var kilos = +formulario.kilos.value;
	var metros = +formulario.metros.value;
	var centimetros = +formulario.centimetros.value;

	var altura = ((( metros * 100 ) + centimetros) / 100);
	var imc = kilos / (altura * altura);

	if (imc < 20) {
		resultado = "Abaixo do Peso";
	} else if (imc > 20 && imc < 25) {
		resultado = "Peso ideal";
	} else if (imc > 25 && imc < 30) {
		resultado = "Sobrepeso";
	} else if (imc > 30 && imc < 35) {
		resultado = "Obesidade Moderada";
	} else if (imc > 35 && imc < 40) {
		resultado = "Obesidade Mórbida";
	} else {
		resultado = "Super Obesidade";	
	}
	formulario.imc.value = imc.toFixed(2);
	formulario.resultado.value = resultado;
}