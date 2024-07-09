let click = document.querySelector('button');

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function criptografia() {
    let texto = document.querySelector('textarea').value;
    var texto_resultante = texto
    .toLowerCase()
    .replaceAll(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    console.log(texto_resultante);
    exibirTextoNaTela('h2', texto_resultante);
}

function descriptografia() {
    let texto = document.querySelector('textarea').value;
    let texto_resultante2 = texto
    .toLowerCase()
    .replace(/[^a-z ]/g, "")
    .replaceAll(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ufat/g, "u")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o");
    console.log(texto_resultante2);
    exibirTextoNaTela('h2', texto_resultante2);
}



