var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);


    var erros = validaPaciente(paciente)

    if(erros.length > 0 ) {
        exibeMensagemDeErro(erros)
        return;
    }

    addPacienteTabela()

    form.reset();

    var mensagemErro = document.querySelector('#menssagens-erro')
    mensagemErro.innerHTML = ""
});

function addPacienteTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros) {
    var ul = document.querySelector('#menssagens-erro');

    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente) {
    
    var erros = [];
    if(paciente.nome.length == 0) {
        erros.push('É NECESSARIO ADICIONAR NOME');
    }

    if(!validaPeso(paciente.peso)) {
         erros.push('PESO É INVALIDO');
    }

    if(!validaAltura(paciente.altura)) {
         erros.push('ALTURA É INVALIDO');
    }  
    
    if(paciente.gordura.length == 0) {
        erros.push('É NECESSARIO ADICIONAR % DE GORDURA');
    }

    if(paciente.peso.length == 0) {
        erros.push('É NECESSARIO ADICIONAR PESO');
    }

    if(paciente.altura.length == 0) {
        erros.push('É NECESSARIO ADICIONAR ALTURA');
    }

    return erros;
}