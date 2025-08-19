//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value.trim();// remove espaços em branco

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome para adicionar.');
        return;
    }

    if (amigos.includes(nomeAmigo)){
        alert('Este nome já foi adicionado!');
        amigoInput.value = '';
        return;
    }

    amigos.push(nomeAmigo);
    exibirAmigos();
    amigoInput.value = '';
    
}

function exibirAmigos() {
    let listaAmigosElemento = document.getElementById('listaAmigos');
    listaAmigosElemento.innerHTML = '';
    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        listaAmigosElemento.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length <2) {
        alert('É necessário adicionar pelo menos dois amigos para realizar o sorteio.');
        return;
    }
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = '';
    
    let amigosEmbaralhados = [...amigos];
    embaralhar(amigosEmbaralhados);

    for (let i = 0; i < amigos.length; i++) {
        let de = amigos[i];
        let para = amigosEmbaralhados[i];

        //if ( de === para) {
            //alert('Erro no sorteio. Por favor, insira mais um amigo.');
            //sortearAmigo();
            //return;
        //}

        let li = document.createElement('li');
        li.textContent = `O amigo secreto de ${de} é ${para}`;
        resultadoElemento.appendChild(li);
    }
    
}

function embaralhar(array) {
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}





