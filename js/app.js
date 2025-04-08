let sorteio = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo');
    let nomeLista = document.getElementById('lista-amigos');

    if (nome.value.trim() === '') return; // Evita adicionar nome vazio

    sorteio.push(nome.value);
    atualizarLista();
    nome.value = '';
}

function excluirAmigo(index) {
    sorteio.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < sorteio.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = sorteio[i];

        // Ao clicar no nome, remove
        paragrafo.addEventListener('click', function () {
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }
}

function atualizarSorteio() {
    let resultado = document.getElementById('lista-sorteio');
    resultado.innerHTML = '';
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
    embaralha(sorteio);
    let sorteados = document.getElementById('lista-sorteio');
    sorteados.innerHTML = '';

    for (let i = 0; i < sorteio.length; i++) {
        if (i == sorteio.length - 1) {
            sorteados.innerHTML += `${sorteio[i]} --> ${sorteio[0]}<br>`;
        } else {
            sorteados.innerHTML += `${sorteio[i]} --> ${sorteio[i + 1]}<br>`;
        }
    }
}

function reiniciar() {
    sorteio = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}


