
var Carta = function(id,tipo,nome,cilindradas,potencia,velocidade,peso,comprimento,trunfo){
	this.id = id;
	this.tipo = tipo;
	this.nome = nome;
	this.cilindradas = cilindradas;
	this.potencia = potencia;
	this.velocidade = velocidade;
	this.peso = peso;
	this.comprimento = comprimento;
	this.trunfo = trunfo;
}

var carta1a = new Carta("1a");
var carta1b = new Carta("1b");
var carta1c = new Carta("1c");
var carta1d = new Carta("1d");

var carta2a = new Carta("2a");
var carta2b = new Carta("2b");
var carta2c = new Carta("2c");
var carta2d = new Carta("2d");

var carta3a = new Carta("3a");
var carta3b = new Carta("3b");
var carta3c = new Carta("3c");
var carta3d = new Carta("3d");

var carta4a = new Carta("4a");
var carta4b = new Carta("4b");
var carta4c = new Carta("4c");
var carta4d = new Carta("4d");

var carta5a = new Carta("5a");
var carta5b = new Carta("5b");
var carta5c = new Carta("5c");
var carta5d = new Carta("5d");

var carta6a = new Carta("6a");
var carta6b = new Carta("6b");
var carta6c = new Carta("6c");
var carta6d = new Carta("6d");

var carta7a = new Carta("7a");
var carta7b = new Carta("7b");
var carta7c = new Carta("7c");
var carta7d = new Carta("7d");

var carta8a = new Carta("8a");
var carta8b = new Carta("8b");
var carta8c = new Carta("8c");
var carta8d = new Carta("8d");

var baralho = [carta1a,carta1b,carta1c,carta1d,carta2a,carta2b,carta2c,carta2d,carta3a,carta3b,carta3c,carta3d,carta4a,carta4b,carta4c,carta4d,carta5a,carta5b,carta5c,carta5d,carta6a,carta6b,carta6c,carta6d,carta7a,carta7b,carta7c,carta7d,carta8a,carta8b,carta8c,carta8d];

function embaralha(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var baralhoJogador1 = new Array();
var baralhoJogador2 = new Array();

function novoJogo(){
	var embaralhado = embaralha(baralho);

	baralhoJogador1 = embaralhado;

	baralhoJogador2 = embaralhado.splice(16);

	var pcComeca = Math.random() >= 0.5;

	return pcComeca;
}


function addCartaJogador1(carta) {
  return baralhoJogador1.push(carta);
}

function addCartaJogador2(carta) {
  return baralhoJogador2.push(carta);
}

function proximaCartaJogador1() {
  if(baralhoJogador1.length > 0) {
    baralhoJogador1[0].call(window);
    return baralhoJogador1.shift();
  }

  return null;
}

function proximaCartaJogador2() {
  if(baralhoJogador2.length > 0) {
    baralhoJogador2[0].call(window);
    return baralhoJogador2.shift();
  }
  return null;
}

