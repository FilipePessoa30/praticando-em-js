let arrayAmigos = [];

function adicionar(){
    let adicionarAmigo = document.getElementById('nome-amigo');
    if(adicionarAmigo.value == ''){
        alert('Você precisa informar o nome do amigo');
        return;
    }
    if(arrayAmigos.includes(adicionarAmigo.value)){
        alert('Nome já adicionado!');
        return;
    }

    let listaAmigo = document.getElementById('lista-amigos');
    arrayAmigos.push(adicionarAmigo.value);

    if (listaAmigo.textContent == ''){
        listaAmigo.textContent = adicionarAmigo.value;
        }
    else {
        listaAmigo.textContent = listaAmigo.textContent + ', ' + adicionarAmigo.value;
        
        }

    adicionarAmigo.value = '';
    // atualizarLista();
    // atualizarSorteio();
}
function sortear(){
    if(arrayAmigos.length < 4){
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    embaralha(arrayAmigos);

    let sorteioAmigos = document.getElementById('lista-sorteio');

    for(let i = 0; i < arrayAmigos.length; i++){

        if (i == arrayAmigos.length - 1) {
            sorteioAmigos.innerHTML = sorteioAmigos.innerHTML + arrayAmigos[i] + '-->' + arrayAmigos[0] + '<br>';
        }else {
            sorteioAmigos.innerHTML = sorteioAmigos.innerHTML + arrayAmigos[i] +' --> ' + arrayAmigos[i + 1] + '<br/>';
        }
    }

}
// function excluirAmigo(index) {
//     arrayAmigos.splice(index, 1);
//     atualizarLista();
//     atualizarSorteio();
// }

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    arrayAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}

// function atualizarSorteio() {
//     let sorteioAmigos = document.getElementById('lista-sorteio');
//     sorteioAmigos.innerHTML = '';
// }

// function atualizarLista() {
//     let listaAmigo = document.getElementById('lista-amigos');
//     listaAmigo.innerHTML = '';


//     for (let i = 0; i < arrayAmigos.length; i++) {
//         // Cria um elemento de parágrafo para cada amigo
//         let paragrafo = document.createElement('p');
//         paragrafo.textContent = arrayAmigos[i];
       
//         // Adiciona um evento de clique para excluir o amigo
//         paragrafo.addEventListener('click', function() {
//             excluirAmigo(i);
//         });


//         // Adiciona o parágrafo à lista
//         listaAmigo.appendChild(paragrafo);
//     }
// }
