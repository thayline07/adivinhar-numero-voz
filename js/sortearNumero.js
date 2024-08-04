const menorValor = 1;
const maiorValor = 100;

const numeroSorteado = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroSorteado);

const numeroMenor = document.getElementById('valor-menor');
numeroMenor.textContent = menorValor;

const numeroMaior = document.getElementById('valor-maior');
numeroMaior.textContent = maiorValor;