function comprar() {
    console.log('Botão chamou comprar()');
    console.log('Iniciando o processo de compra \n ... \n ...\n ...\n ...');
    console.log('Chamou getCompras()');

    getCompras();
    // limpando quantidade depois de chamar compra
    document.getElementById('qtd').value = "";
}

function getCompras() {

    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    // validação se o ingresso é válido
    if (tipoIngresso === "") {
        alert("Tipo de ingresso inválido.")
        return
    } else if (tipoIngresso != "") {
        console.log(`tipoIngresso não é vazio e retornou ${tipoIngresso}.`);
    }

    // validação quantidade valida
    if (isNaN(qtd) || qtd <= 0) {
        alert("Quantidade de ingresso inválido.")
        console.log("Quantidade de ingresso inválido.")
        return
    }
    console.log(`Chamou conferirEstoque(${tipoIngresso},${qtd})`);
    conferirEstoque(tipoIngresso, qtd);
}

function conferirEstoque(tipoIngresso, qtd) {

    // limpei os retornos aqui só para garantia e acompanhar no código, ele é alimentado nos retornos do ingresso
    let retornoEstoque = 0;
    let retornoIngresso = 0;

    // aqui dá um set no valor estoque atualizando pelo que está no HTML
    console.log('Conferindo os valores em estoque antes da compra:');
    let qtdPista = document.getElementById('qtd-pista').innerText;
    let qtdSuperior = document.getElementById('qtd-superior').innerText;
    let qtdInferior = document.getElementById('qtd-inferior').innerText;
    console.log(`qtdPista: ${qtdPista} \n qtdSuperior: ${qtdSuperior} \n qtdInferior: ${qtdInferior}`);

    if (tipoIngresso === "inferior" && (qtdInferior - qtd) >= 0) {
        retornoIngresso = qtdInferior;
        retornoEstoque = qtdInferior - qtd;
        document.getElementById('qtd-inferior').innerText = retornoEstoque;
        console.log(`Chamou palavraIngresso(${qtd})`);
        console.log("Estoque " + tipoIngresso + " passou de " + retornoIngresso + " para " + retornoEstoque + " depois da venda de " + qtd + " " + palavraIngresso(qtd) + ".")

    } else if (tipoIngresso === "superior" && (qtdSuperior - qtd) >= 0) {
        retornoIngresso = qtdSuperior;
        retornoEstoque = qtdSuperior - qtd;
        document.getElementById('qtd-superior').innerText = retornoEstoque;
        console.log(`Chamou palavraIngresso(${qtd})`);
        console.log("Estoque " + tipoIngresso + " passou de " + retornoIngresso + " para " + retornoEstoque + " depois da venda de " + qtd + " " + palavraIngresso(qtd) + ".")

    } else if (tipoIngresso === "pista" && (qtdPista - qtd) >= 0) {
        retornoIngresso = qtdPista;
        retornoEstoque = qtdPista - qtd;
        document.getElementById('qtd-pista').innerText = retornoEstoque;
        console.log(`Chamou palavraIngresso(${qtd})`);
        console.log("Estoque " + tipoIngresso + " passou de " + retornoIngresso + " para " + retornoEstoque + " depois da venda de " + qtd + " " + palavraIngresso(qtd) + ".")

    } else {
        alert("Quantidade de ingressos indisponíveis para o tipo solicitado.");
    }
}

function palavraIngresso(qtd) {
    let palavra = qtd > 1 ? "ingressos" : "ingresso";
    return palavra;
}