var visor = document.getElementById('visor')
var div = document.getElementsByName('botao'); 
var c = document.getElementById('cons')
var primeirovalor = 0
var segundovalor = 0


function atualizar(elemento){
    var valor = visor.innerHTML;
    var num = parseFloat(valor)
    //quando digita o 0 some
    if (num == 0){
        visor.innerHTML = ''
    }
    visor.innerHTML += elemento.innerHTML;
}

function somar(){
    var valor = visor.innerHTML;
    var num = parseFloat(valor)
    visor.innerHTML = 0 
    primeirovalor = num 
    segundovalor = 0  // reseta o segundo valor da var para receber um novo
}

function resultado(){
    var valor = visor.innerHTML;
    var num = parseFloat(valor)
    if (segundovalor == 0){ 
        segundovalor = num
    }
    if (segundovalor != 0 && primeirovalor != 0){
        visor.innerHTML = primeirovalor += segundovalor
    }
}

function sub(){
    var valor = visor.innerHTML;
    var num = parseFloat(valor)
    visor.innerHTML = 0 
    primeirovalor = num
}



function limpar(){
    primeirovalor = 0
    segundovalor = 0
    visor.innerHTML = 0
}
