function verificarCadastro() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    if (nome === '' || telefone === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let tabela = document.getElementById("tabelaContatos");
    let linhas = tabela.rows;

    for (let i = 1; i < linhas.length; i++) {
        let celulaNome = linhas[i].cells[0];
        if (celulaNome.innerHTML === nome) {
            alert("Este nome já está cadastrado na agenda.");
            return;
        }
    }
    
// Se não encontrar o nome na tabela, adiciona o novo contato
    adicionarContato();
}

function adicionarContato() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;

    let tabela = document.getElementById("tabelaContatos");
    let novaLinha = tabela.insertRow(-1);
    // Insere uma nova linha na última posição

    let celulaNome = novaLinha.insertCell(0);
    // Insere uma célula na primeira posição da linha
    
    let celulaTelefone = novaLinha.insertCell(1); 
    // Insere uma célula na segunda posição da linha

    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;

    // Limpar os campos do formulário após adicionar o contato
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}