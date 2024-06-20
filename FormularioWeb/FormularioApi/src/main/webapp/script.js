const formulario = document.querySelector("form");
const InsNome = document.querySelector (".nome")

function salva () {

    fetch("localhost:8080",
        {
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: InsNome.value,
            })
    })
        .then(function (res) {console.log(res)})
        .catch(function (res) {console.log (res)})

};


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formu').addEventListener('submit', function(event) {
        event.preventDefault();

        var nome = document.getElementById('nome').value;

        localStorage.setItem('nomeSalvo', nome);

        alert('Nome ' + nome + ' salvo com sucesso');
    });
});