var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener("click", function() {
    console.log('BUSCANDO...')
    var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")

    xhr.addEventListener('load', function() {
        var erroAjax = document.querySelector('#erro-ajax')

        if(xhr.status == 200) {
            erroAjax.classList.add('invisible')
            var resposta = xhr.responseText
            var paciente = JSON.parse(resposta)

            paciente.forEach(function(paciente) {
                addPacienteTabela(paciente)
            });
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)

            erroAjax.classList.remove('invisible')
        }
       
    })

    xhr.send()
})