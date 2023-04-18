var campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener("input", function() {
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]
            var nomeTd = paciente.querySelector('.info-nome')
            var nome = nomeTd.textContent
            var expressao = new RegExp(this.value, "i")
    
            if(!expressao.test(nome)) {
                paciente.classList.add('invisible')
            } else {
                paciente.classList.remove('invisible')
            }
        }
    } else {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i]

            paciente.classList.remove('invisible')
        }
    } 
});