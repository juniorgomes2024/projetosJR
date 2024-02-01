const numerodecapitulos = 10;
const nomecapitulo = document.getElementById("episodio");
const botaovoltar = document.getElementById("retroceder");
const botaoavancafaixa = document.getElementById("avanca");
const botaoplaypause = document.getElementById("tocar");
const audiocapitulo = document.getElementById("audio_capitulo");

let tatocando = 0;
let capituloatual = 1;
function tocarfaixa(){
    audiocapitulo.play();
    botaoplaypause.classList.remove('bi-play-circle-fill');
    botaoplaypause.classList.add('bi-pause-circle-fill');
}
function pausarfaixa(){
    audiocapitulo.pause();
    botaoplaypause.classList.add('bi-play-circle-fill');
    botaoplaypause.classList.remove('bi-pause-circle-fill');
}

function tocaroupausar(){
 if( tatocando ===0){
    tocarfaixa();
    tatocando=1
    
 }else{
    pausarfaixa();
    tatocando=0
 }
}
function proximafaixa(){
    if(capituloatual === numerodecapitulos){
        capituloatual=1;
    }else{
        capituloatual = capituloatual + 1 
    }

    audiocapitulo.src = "./books/dom-casmurro/" + capituloatual + '.mp3';
    tocarfaixa();
    tatocando = 1;
    trocarnomedafaixa();
}
function voltarfaixa(){
    if(capituloatual === 1){
        capituloatual = numerodecapitulos;
    }else{
        capituloatual = capituloatual - 1
    }
    
    audiocapitulo.src="./books/dom-casmurro/" + capituloatual + ".mp3";
    tocarfaixa();
    tatocando = 1;
    trocarnomedafaixa();
}
function trocarnomedafaixa(){
    nomecapitulo.innerText = 'capitulo ' + capituloatual;
}
botaovoltar.addEventListener('click',voltarfaixa);
botaoavancafaixa.addEventListener('click',proximafaixa);
botaoplaypause.addEventListener('click',tocaroupausar);