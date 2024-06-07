document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formu').addEventListener('submit', function(event) {
        event.preventDefault(); 

        var nome = document.getElementById('nome').value;

        localStorage.setItem('nomeSalvo', nome);

        alert('Nome ' + nome + ' salvo com sucesso');
    });
});
