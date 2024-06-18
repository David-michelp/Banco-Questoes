document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aqui você pode adicionar a lógica de validação do login
    // Por exemplo, comparar o nome de usuário e a senha com um banco de dados

    window.alert('Usuário:', username);
    window.alert('Senha:', password);
});
