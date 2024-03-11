class Jogador {
    constructor(nome, nickname, email, senha, dataNascimento, idade, classe, sexo, regiao) {
        this.nome = nome;
        this.nickname = nickname;
        this.email = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
        this.idade = idade;
        this.classe = classe;
        this.sexo = sexo;
        this.regiao = regiao;
    }
}

const formulario = document.getElementById('cadastro-form');
const listaJogadores = document.getElementById('lista-jogadores');
const jogadores = [];

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const nickname = document.getElementById('nickname').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const idade = document.getElementById('idade').value;
    const classe = document.getElementById('classe').value;
    const sexo = document.getElementById('sexo-personagem').value;
    const regiao = document.getElementById('regiao').value;

    const jogador = new Jogador(nome, nickname, email, senha, dataNascimento, idade, classe, sexo, regiao);
    jogadores.push(jogador);

    exibirJogadores();
    formulario.reset();
});

function exibirJogadores() {
    listaJogadores.innerHTML = '';
    
    jogadores.forEach(function(jogador, indice) {
        const divJogador = document.createElement('div');
        divJogador.classList.add('jogador');
        
        const nomeSpan = document.createElement('span');
        nomeSpan.textContent = `Nome: ${jogador.nome}`;

        const nicknameSpan = document.createElement('span');
        nicknameSpan.textContent = `Nickname: ${jogador.nickname}`;

        const emailSpan = document.createElement('span');
        emailSpan.textContent = `Email: ${jogador.email}`;

        const dataNascimentoSpan = document.createElement('span');
        dataNascimentoSpan.textContent = `Data de Nascimento: ${jogador.dataNascimento}`;

        const idadeSpan = document.createElement('span');
        idadeSpan.textContent = `Idade: ${jogador.idade}`;

        const classeSpan = document.createElement('span');
        classeSpan.textContent = `Classe: ${jogador.classe}`;

        const sexoSpan = document.createElement('span');
        sexoSpan.textContent = `Sexo: ${jogador.sexo}`;

        const regiaoSpan = document.createElement('span');
        regiaoSpan.textContent = `Região: ${jogador.regiao}`;

        const editarButton = document.createElement('button');
        editarButton.textContent = 'Editar';
        editarButton.classList.add('button-secondary');
        editarButton.addEventListener('click', function() {
            editarJogador(indice);
        });

        const excluirButton = document.createElement('button');
        excluirButton.textContent = 'Excluir';
        excluirButton.classList.add('button-secondary');
        excluirButton.addEventListener('click', function() {
            excluirJogador(indice);
        });

        divJogador.appendChild(nomeSpan);
        divJogador.appendChild(nicknameSpan);
        divJogador.appendChild(emailSpan);
        divJogador.appendChild(dataNascimentoSpan);
        divJogador.appendChild(idadeSpan);
        divJogador.appendChild(classeSpan);
        divJogador.appendChild(sexoSpan);
        divJogador.appendChild(regiaoSpan);
        divJogador.appendChild(editarButton);
        divJogador.appendChild(excluirButton);

        listaJogadores.appendChild(divJogador);
    });
}

function editarJogador(indice) {
    const jogador = jogadores[indice];
    const novoNome = prompt('Novo nome:', jogador.nome);
    const novoNickname = prompt('Novo nickname:', jogador.nickname);
    const novoEmail = prompt('Novo email:', jogador.email);
    const novaSenha = prompt('Nova senha:', jogador.senha);
    const novaDataNascimento = prompt('Nova data de nascimento:', jogador.dataNascimento);
    const novaIdade = prompt('Nova idade:', jogador.idade);
    const novaClasse = prompt('Nova classe:', jogador.classe);
    const novoSexo = prompt('Novo sexo:', jogador.sexo);
    const novaRegiao = prompt('Nova região:', jogador.regiao);

    if (novoNome !== null && novoNickname !== null && novoEmail !== null && novaSenha !== null && novaDataNascimento !== null && novaIdade !== null && novaClasse !== null && novoSexo !== null && novaRegiao !== null) {
        jogador.nome = novoNome;
        jogador.nickname = novoNickname;
        jogador.email = novoEmail;
        jogador.senha = novaSenha;
        jogador.dataNascimento = novaDataNascimento;
        jogador.idade = novaIdade;
        jogador.classe = novaClasse;
        jogador.sexo = novoSexo;
        jogador.regiao = novaRegiao;
        exibirJogadores();
    }
}

function excluirJogador(indice) {
    if (confirm('Tem certeza que deseja excluir este jogador?')) {
        jogadores.splice(indice, 1);
        exibirJogadores();
    }
}

exibirJogadores();
