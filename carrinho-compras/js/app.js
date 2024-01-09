let totalGeral;
limpar();

function adicionar (){
    //recuperar valores, nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let quantidadeProduto = document.getElementById('quantidade').value;

    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseFloat(produto.split('R$')[1]);

    //calcular o preço, o nosso subtotal
    let precoFinal = quantidadeProduto * valorProduto;

    //adicionar esse produto ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${precoFinal}</span>
  </section>`;

    // atualizar o valor total
    totalGeral = totalGeral + precoFinal;
    let carrinho_total = document.getElementById('valor-total');
    carrinho_total.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}