function tocaSom(idAudio) {
    let som = document.querySelector(idAudio);
    som.play();
}

const lista_buttons = document.querySelectorAll('.tecla');
const lista_sons = document.querySelectorAll('audio');

for (let i = 0; i < lista_buttons.length; i++) {
    lista_buttons[i].onclick = function () {
        tocaSom('#'+lista_sons[i].id);
    };
}