
function calculaImc(){
	var peso = document.getElementById("peso");
	var altura = document.getElementById("altura");
	var imc = peso.value / (altura.value*altura.value);
	alert("Su índice de masa corporal (IMC) es: " + Math.round(imc, 2));
}

var btnCalcula = document.getElementById("btn");
btnCalcula.onclick = calculaImc;
