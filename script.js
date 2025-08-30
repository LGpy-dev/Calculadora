const tela = document.getElementById('tela');
const botoes = document.querySelectorAll('.btn-num');
const botoesOperacao = document.querySelectorAll('.btn-op');
const botaoIgual = document.getElementById('btn-igual');
const botaoC = document.getElementById('btn-C');

let primeiroNumero = ""; // Guarda o valor do primeiro número
let operador = ""; // Guarda a operação selecionada
let segundoNumero = ""; // Guarda o valor do segundo número

// Imprimi o valor dos botões numéricos na tela
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        if(operador == "") {
            primeiroNumero += botao.value;
            tela.value = primeiroNumero; // Atualiza o display
        } else {
            segundoNumero += botao.value;
            tela.value = segundoNumero; // Atualiza o display com o segundo número
        }
    });
});

// Captura o operador selecionado
botoesOperacao.forEach(botao => {
    botao.addEventListener('click', () => {
        if(primeiroNumero !== "") {
            operador += botao.value;
            tela.value = ""; // Limpa o display para o próximo número
        }
    });
});

// Realiza o cálculo ao pressionar "="
botaoIgual.addEventListener('click', () => {
    if(primeiroNumero !== "" && segundoNumero !== "" && operador !== "") {
        let resultado;
        if(operador === "+") {
            resultado = parseFloat(primeiroNumero) + parseFloat(segundoNumero);
        }
        else if(operador === "-") {
            resultado = parseFloat(primeiroNumero) - parseFloat(segundoNumero);
        }
        else if(operador === "*") {
            resultado = parseFloat(primeiroNumero) * parseFloat(segundoNumero);
        }
        else if(operador === "/") {
            resultado = parseFloat(primeiroNumero) / parseFloat(segundoNumero);
        }

        tela.value = resultado;
        primeiroNumero = resultado.toString();
        segundoNumero = "";
        operador = "";
    }
})

// Botão para apagar tudo
botaoC.addEventListener('click', () => {
    primeiroNumero = "";
    segundoNumero = "";
    operador = "";
    tela.value = "";
})