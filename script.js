const teclasPiano = document.querySelectorAll(".piano-teclas .tecla");
const controleVolume = document.querySelector(".controle-volume input");
const teclasSelecao = document.querySelector(".teclas-checkbox input");

let todasAsteclas = [];
let audio = new Audio("./tunes/a.wav"); //por padrao,ele buscara a nota/tecla "A"

function tocarNota(tecla){
    audio.src = `./tunes/${tecla}.wav`;//busca o audio baseado na tecla pressionada
    console.log(`tecla pressionada: ${tecla}`);
    audio.play(); // Da play no audio

    const teclaPressionada = classList.add("pressionada"); // Adicioana a tecla que foi pressionada
    teclaPressionada.classList.add("pressionada");
    setTimeout(function () {
        teclaPressionada.classList.remove("pressionada");
    }, 150);
}

teclasPiano.forEach(
    function(tecla){
        todasAsteclas.push(tecla.dataset.key);

        tecla.addEventListener("click", function() {
            tocarNota(tecla.dataset.key);
        });
    }
);

function controlarVolume(evento) {
    audio.volume = evento.target.value;
}

function mostrarOcultarTeclas() {
    teclasPiano.forEach(function (tecla) {
        tecla.classList.toggle("ocultar");
    });
}

function tocarTeclas(evento) {
    if (todasAsteclas.includes(evento.key)) {
        tocarNota(evento.key);
    }
}

controleVolume.addEventListener("input", controleVolume);
teclasSelecao.addEventListener("click", mostrarOcultarTeclas);
document.addEventListener("keydown", tocarTeclas)