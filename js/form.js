buttonADD.addEventListener("click", (event) => {
  event = event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);

  var linha = document.createElement("tr");
  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  if (paciente.peso >= 1000 || paciente.peso <= 0) {
    // imcTd.textContent = "IMC inexistente";
    // linha.classList.add("paciente-invalido");
    abreModal();
    return;
  } else if (paciente.altura >= 3.0 || paciente.altura <= 0) {
    // imcTd.textContent = "IMC inexistente";
    // linha.classList.add("paciente-invalido");
    abreModal();
    return;
  }

  linha.appendChild(nomeTd);
  linha.appendChild(pesoTd);
  linha.appendChild(alturaTd);
  linha.appendChild(gorduraTd);
  linha.appendChild(imcTd);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(linha);
});



// buttonADD.addEventListener("click", (event) => {
//     event.preventDefault();

//     var form = document.querySelector("#form-adiciona");
//     var paciente = obtemPacienteDoFormulario(form);

//     var pacienteTr = montaTr(paciente);

//     var tabela = document.querySelector("#tabela-pacientes");

//     tabela.appendChild(pacienteTr);

//     form.reset();
// });

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.altura.value, form.peso.value).toFixed(2),
  };
  return paciente;
}

// function montaTr(paciente){
//     var pacienteTr = document.createElement("tr");
//     pacienteTr.classList.add("paciente");

//     pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
//     pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
//     pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
//     pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
//     pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
// }

// function montaTd(dado,classe){
//     var td = document.createElement("td");
//     td.textContent = dado;
//     td.classList.add(classe);

//     return td;
// }

