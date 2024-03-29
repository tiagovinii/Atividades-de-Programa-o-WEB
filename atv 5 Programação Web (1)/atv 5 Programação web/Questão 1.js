<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Exemplo de Boas-Vindas</title>
<script>
    
    function exibirMensagemDeBoasVindas() {
        var nome = prompt("Qual é o seu nome?");
        if (nome !== null && nome !== "") {
            alert("Bem-vindo, " + nome + "! Espero que você aproveite sua visita ao nosso site.");
        } else {
            alert("Bem-vindo! Espero que você aproveite sua visita ao nosso site.");
        }
    }

    window.addEventListener("load", exibirMensagemDeBoasVindas);
</script>
</head>
<body>
<p>oi</p>
</body>
</html>