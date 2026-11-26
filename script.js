
// VARIÁVEIS

let tempo = 0;
let tempoInicial = 0;
let intervalo = null;
let pausado = false;

// SELETORES HTML

const contador = document.querySelector("#contador");
const mensagem = document.querySelector("#mensagem");
const campoTempo = document.querySelector("#tempoInicial");

const botaoIniciar = document.querySelector("#iniciar");
const botaoPausar = document.querySelector("#pausar");
const botaoReiniciar = document.querySelector("#reiniciar");

const progresso = document.querySelector("#progresso");

// FUNÇÃO PARA INICIAR

botaoIniciar.addEventListener("click", function() {

    // DESAFIO 1:
    // Verificar se o tempo informado é válido.

    // DESAFIO 2:
    // Impedir que existam vários intervalos.

    // DESAFIO 3:
    // Criar a contagem utilizando setInterval().

});

// FUNÇÃO PARA PAUSAR

botaoPausar.addEventListener("click", function() {

    // DESAFIO 4:
    // Interromper temporariamente a contagem.

});

// FUNÇÃO PARA REINICIAR

botaoReiniciar.addEventListener("click", function() {

    // DESAFIO 5:
    // Parar a contagem e recuperar o tempo inicial.

});

// FUNÇÃO DE ATUALIZAÇÃO

function atualizarContador() {

    // DESAFIO 6:
    // Atualizar o número apresentado na página.

    // DESAFIO 7:
    // Atualizar a barra de progresso.

    // DESAFIO 8:
    // Verificar se o tempo chegou a zero.

    // DESAFIO 9:
    // Apresentar a mensagem final.

}
