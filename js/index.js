var pacientes = document.querySelectorAll(".paciente");
var buttonADD = document.querySelector("#adicionar-paciente");
var imcValido = [];

for (let i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];
  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var imcText = paciente.querySelector(".info-imc");

  if (peso >= 1000 || peso <= 0) {
    imcValido[i] = 0;
  } else if (altura >= 3.0 || altura <= 0) {
    imcValido[i] = 0;
  } else {
    imcValido[i] = 1;
  }
  
  if (imcValido[i] == 1) {
    imcText.textContent = calculaIMC(altura, peso).toFixed(2);
  } else {
    imcText.textContent = "IMC inexistente";
    paciente.classList.add("paciente-invalido");
  }
}


function calculaIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}

function abreModal() {
    $("#myModal").modal({
      show: true
    });
}


var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event) {

    // Somente executará nosso código caso o elemento em que clicamos seja um <td>
    if (event.target.tagName == 'TD') {
        event.target.parentNode.remove()
        
    }
});
