function salva () {

    fetch("http://localhost:8080/formulario",
        {
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({a: 1, b:2 })
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
