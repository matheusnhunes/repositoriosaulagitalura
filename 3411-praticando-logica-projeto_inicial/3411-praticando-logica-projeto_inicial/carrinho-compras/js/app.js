let total = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0,00';
let listaInicialProdutos = document.getElementById('lista-produtos');
let estadoInicialCarrinho = listaInicialProdutos.innerHTML;


function adicionar() {
    let produtoSelecionado = document.getElementById('produto');
    console.log("produto selecionado: ");
    console.log(produtoSelecionado.value);

    let quantidadeSelecionada = document.getElementById('quantidade');
    console.log("quantidade selecionada: ");
    console.log(quantidadeSelecionada.value);

    let listaProdutos = document.getElementById('lista-produtos');

    let valorTotal = document.getElementById('valor-total');

    // conferindo no console os valores unitários, quantidade e o resultado para adicionar ao carrinho
    let valorUnitario = (produtoSelecionado.value).replace(/.*R\$\s*/, "");
    console.log('Valor unitário:' + valorUnitario);
    let quantidadeDigitada = quantidadeSelecionada.value || 1;
    console.log('Quantidade:' + quantidadeDigitada);
    let totalQuantUnit = ((quantidadeDigitada) * (produtoSelecionado.value).replace(/.*R\$\s*/, ""));
    console.log('Somatório: ' + totalQuantUnit);
    let nomeProduto = (produtoSelecionado.value).replace(/\s*-\s*R\$.*/, "");
    console.log('Produto selecionado: ' + nomeProduto);


    // aqui eu fiz com o Claude, entendendo a lógica e pegando essas novas coisas que não foram abordadas no curso, apenas superificial, comecei a enteder bem!

    // cria um elemento html chamado seção
    let novoProduto = document.createElement("section");

    // adiciona a classe carrinho__produtos__produto
    novoProduto.classList.add("carrinho__produtos__produto");

    // adiciona o texto no html
    novoProduto.innerHTML = `
    <span class="texto-azul">${quantidadeDigitada}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
  `;

    // adiciona o novoProduto na lista de produtos
    listaProdutos.appendChild(novoProduto);

    // atualiza o total do carrinho
    total += valorUnitario * quantidadeDigitada;
    valorTotal.textContent = `R$${total}`;

    // zera o campo quantidade
    quantidadeSelecionada.value = "";

    // fim do Claude ^

}

function limpar() {
    listaInicialProdutos.innerHTML = estadoInicialCarrinho; // volta pro que tinha antes
    total = 0; // reseta pro valor do celular
    document.getElementById('valor-total').textContent = "R$ 0,00";
    document.getElementById('quantidade').value = "";
    console.log('Limpamos o carrinho.');
}