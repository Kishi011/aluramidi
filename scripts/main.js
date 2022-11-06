function tocaSom(idAudio) {
    const som = document.querySelector(idAudio);
    // tratamento de código
    if(som.localName === 'audio' && som) {
        som.play();
    }
    else {
        console.log('Não é um elemento válido');
    }
}

const lista_buttons = document.querySelectorAll('.tecla');
const lista_sons = document.querySelectorAll('audio');

for (let i = 0; i < lista_buttons.length; i++) {
    lista_buttons[i].onclick = function () {
        tocaSom('#'+lista_sons[i].id);
    };
    
    lista_buttons[i].onkeydown = function (evento) {
        if(evento.keyCode === 32 || evento.keyCode === 13){
            lista_buttons[i].classList.add('ativa');
        }
    }

    lista_buttons[i].onkeyup = function () {
        lista_buttons[i].classList.remove('ativa');
    }
}