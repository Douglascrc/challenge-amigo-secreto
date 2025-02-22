// 1) Quais são os dados de entrada do programa? amigos a serem sorteados
// 2) O que deve ser feito com esses dados? sortear um amigo para cada vez que o botão for clicado
// 3) Quais as restrições do programa? não pode sortear o mesmo amigo duas vezes
// 4) Quais a saída esperada? amigo sorteado
// 5) Qual a sequência de passos para chegar a saída esperada? armazenar os amigos em um array, sortear os amigos e imprimir o amigo sorteado

let amigos = [];

function adicionarAmigo() {
    let amigoValor = document.getElementById('amigo').value;

    // Verifica se o input não está vázio
    if(amigoValor === '') {
        window.alert('Por favor, insira um nome!');
    }
    // Verifica se o array `amigos` já não contém o nome.
    else if(amigos.includes(amigoValor)) {
      window.alert('O amigo já consta na lista');
      return;  
    }

    // Adiciona um novo amigo a ser sorteado.
    amigos.push(amigoValor);
    document.getElementById('amigo').value = '';
    console.log(amigos);

    atualizaLista();
}

function limparLista(){
    document.getElementById('listaAmigos').innerHTML = '';
    amigos = [];
}

function atualizaLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica se tem algum amigo para sortear.
    if(amigos.length === 0) {
        window.alert('Não há amigos para sortear, digite o nome deles abaixo!');
        return;
    }
    // Efetivamente sorteia
    let indexSorteado = Math.floor(Math.random() * amigos.length);

    // Remove o index do amigo sorteado para que ele não seja sorteado novamente
    let amigoSorteado = amigos.splice(indexSorteado,1)[0];
    document.getElementById('resultado').innerHTML = `O Amigo sorteado foi ${amigoSorteado}`;
    console.log(amigoSorteado)

    atualizaLista();
    lancarConfetti();
}

function lancarConfetti() {
    confetti({
        particleCount: 500, 
        spread: 160,        
        origin: { x: 0.5, y: 0.5 } 
    });
}