/*
abaixo de 17 muito baixo do peso
entre 17 e 18.49 abaixo do peso
entre 18.50 e 24.99 peso normal
ente 25 e 29.99 sobrepeso
entre 30 e 34.99 obesidade grau I
entr 35 e 39.99 obesidade grau II
*/

var peso;
var altura;
var imc;
var resultado;


function calcular(event) {
  event.preventDefault();

  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;
  
  imc = peso / (altura * altura);

  resultado = document.getElementById('resultado');

  
  if(imc < 17) {
    resultado.innerHTML = + imc.toFixed(2) + "</br> Muito abaixo do peso";
  }else if(imc > 17 && imc < 18.49) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = + imc.toFixed(2) + "</br> Abaixo do peso";
  }else if(imc > 18.50 && imc.toFixed(2) < 24.99) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = + imc.toFixed(2) + "</br> Peso normal";
  }else if(imc > 25 && imc.toFixed(2) < 29.99) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = + imc.toFixed(2) + "</br> Sobrepeso";
  }else if(imc > 30 && imc.toFixed(2) < 34.99) {
    resultado = document.getElementById('resultado');
    resultado.innerHTML = + imc.toFixed(2) + "</br> Obesidade grau I";
  }else if(imc > 35 && imc.toFixed(2) < 39.99){
    resultado = document.getElementById('resultado');
    resultado.innerHTML = + imc.toFixed(2) + "</br> Obesidade grau II";
  }
};