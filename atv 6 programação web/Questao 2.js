let username, password;

do {
    username = prompt("Digite o nome de usuário:");
    password = prompt("Digite a senha:");

    if (username === password) {
        alert("Erro: A senha não pode ser igual ao nome de usuário. Por favor, tente novamente.");
    }
} while (username === password);

alert("Cadastro concluído com sucesso!");