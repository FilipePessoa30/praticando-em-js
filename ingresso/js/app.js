

function comprar(){
    let lugar = document.getElementById('tipo-ingresso');
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);


    if (lugar.value == 'pista'){
        comprarPista(quantidadeIngresso);
    }
    if (lugar.value == 'superior'){
        comprarCadeiraSuperior(quantidadeIngresso);
    }
    if(lugar.value == 'inferior') {
        comprarCadeiraInferior(quantidadeIngresso);
    }
}

function comprarPista(quantidadeIngresso){
    let lugarPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (lugarPista > 0 && lugarPista >= quantidadeIngresso){
        lugarPista = lugarPista - quantidadeIngresso;
        document.getElementById('qtd-pista').textContent = lugarPista;
    }
    else{
        alert('Você só pode comprar os ingressos disponíveis!');
    }
}

function comprarCadeiraSuperior(quantidadeIngresso){
    let lugarSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (lugarSuperior > 0 && lugarSuperior >= quantidadeIngresso){
        lugarSuperior = lugarSuperior - quantidadeIngresso;
        document.getElementById('qtd-superior').textContent = lugarSuperior;
    }
    else{
        alert('Você só pode comprar os ingressos disponíveis!');
    }
}

function comprarCadeiraInferior(quantidadeIngresso){
    let lugarInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (lugarInferior > 0 && lugarInferior >= quantidadeIngresso){
        lugarInferior = lugarInferior - quantidadeIngresso;
        document.getElementById('qtd-inferior').textContent = lugarInferior;
    }
    else{
        alert('Você só pode comprar os ingressos disponíveis!');
    }
}