
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

var carta1a = new Carta("1a","Carros Esportivos",   "Maserati Assento Corsa  "," 3.217 ccm "," 369 CV  "," 280 km/h  "," 1.590 kg  "," 4,51 m  ");
var carta1b = new Carta("1b","Carros Esportivos   Jaguar XKR  "," 3.996 ccm "," 363 CV  "," 250 km/h  "," 1.715 kg  "," 4,76 m  ");
var carta1c = new Carta("1c","Carros Esportivos   Porsche 911 GT2 "," 3.600 ccm "," 462 CV  "," 315 km/h  "," 1.451 kg  "," 4,45 m  ");
var carta1d = new Carta("1d","Carros Esportivos   Aston Martin Vanquish "," 5.935 ccm "," 460 CV  "," 306 km/h  "," 1.863 kg  "," 4,67 m  ");

var carta2a = new Carta("2a","Carros Clássicos    Rolls-Royce Park Ward "," 5.379 ccm "," 326 CV  "," 225 km/h  "," 2.480 kg  "," 5,65 m  ");
var carta2b = new Carta("2b","Carros Clássicos  "," Mercedes S 63 AMG "," 6.258 ccm "," 444 CV  "," 250 km/h  "," 2.035 kg  "," 5,16 m  ");
var carta2c = new Carta("2c","Carros Clássicos  "," Daimler Super V8  "," 3.996 ccm "," 363 CV  "," 250 km/h  "," 1.820 kg  "," 5,15 m  ");
var carta2d = new Carta("2d","Carros Clássicos  "," Bentley Continental T "," 6.750 ccm "," 426 CV  "," 270 km/h  "," 2.450 kg  "," 5,22 m  ");

var carta3a = new Carta("3a","Utilitários Esportivos  "," Lexus RX 300  "," 2.995 ccm "," 201 CV  "," 180 km/h  "," 1.865 kg  "," 4,58 m  ");
var carta3b = new Carta("3b","Utilitários Esportivos  "," Mercedes ML 55 AMG  "," 5.439 ccm "," 347 CV  "," 235 km/h  "," 2.300 kg  "," 4,64 m  ");
var carta3c = new Carta("3c","Utilitários Esportivos  "," Range Rover "," 4.553 ccm "," 218 CV  "," 196 km/h  "," 2.120 kg  "," 4,71 m  ");
var carta3d = new Carta("3d","Utilitários Esportivos  "," BMW X5  "," 4.398 ccm "," 286 CV  "," 207 km/h  "," 2.170 kg  "," 4,67 m  ");

var carta4a = new Carta("4a","Carros dos Sonhos "," Bugatti EB 16.4 Veyron  "," 7.993 ccm "," 1.001 CV  "," 404 km/h  "," 1.380 kg  "," 4,38 m  ");
var carta4b = new Carta("4b","Carros dos Sonhos "," Ferrari 550 Maranello "," 5.474 ccm "," 485 CV  "," 320 km/h  "," 1.690 kg  "," 4,55 m  ");
var carta4c = new Carta("4c","Carros dos Sonhos "," B. Engineering Edonis "," 3.760 ccm "," 680 CV  "," 365 km/h  "," 1.300 kg  "," 4,35 m  ");
var carta4d = new Carta("4d","Carros dos Sonhos "," Lamborghini Diablo  "," 5.992 ccm "," 550 CV  "," 330 km/h  "," 1.625 kg  "," 4,47 m  ");

var carta5a = new Carta("5a","Protótipo "," VW D1   "," 6.000 ccm "," 450 CV  "," 250 km/h  "," 1.750 kg  "," 4,95 m  ");
var carta5b = new Carta("5b","Protótipo "," ItalDesign Scighera "," 3.000 ccm "," 400 CV  "," 310 km/h  "," 1.450 kg  "," 4,32 m  ");
var carta5c = new Carta("5c","Protótipo "," Cadillac Imag "," 4.200 ccm "," 431 CV  "," 300 km/h  "," 1.850 kg  "," 5,10 m  ");
var carta5d = new Carta("5d","Protótipo "," Chrysler Chronos  "," 5.980 ccm "," 350 CV  "," 280 km/h  "," 1.950 kg  "," 5,22 m  ");

var carta6a = new Carta("6a","Limusine  "," Binz XL "," 4.266 ccm "," 279 CV  "," 230 km/h  "," 2.180 kg  "," 5,79 m  ");
var carta6b = new Carta("6b","Limusine  "," Hooper Rolls-Royce Emperor  "," 6.748 ccm "," 325 CV  "," 215 km/h  "," 2.440 kg  "," 5,82 m  ");
var carta6c = new Carta("6c","Limusine  "," American Custon Lincoln "," 5.409 ccm "," 380 CV  "," 200 km/h  "," 2.870 kg  "," 6,40 m  ");
var carta6d = new Carta("6d","Limusine  "," Maybach Langversion "," 5.600 ccm "," 470 CV  "," 250 km/h  "," 2.450 kg  "," 6,10 m  ");

var carta7a = new Carta("7a","Carros Exóticos "," Pagani Zonda C12 S  "," 7.010 ccm "," 550 CV  "," 350 km/h  "," 1.250 kg  "," 4,40 m  ");
var carta7b = new Carta("7b","Carros Exóticos "," Morgan Aero 8 "," 4.398 ccm "," 286 CV  "," 258 km/h  "," 1.000 kg  "," 4,09 m  ");
var carta7c = new Carta("7c","Carros Exóticos "," Mega Monte Carlo  "," 5.991 ccm "," 395 CV  "," 300 km/h  "," 1.500 kg  "," 4,45 m  ");
var carta7d = new Carta("7d","Carros Exóticos "," Lotec Sirius  "," 5.987 ccm "," 1.200 CV  "," 400 km/h  "," 1.380 kg  "," 4,12 m  ");

var carta8a = new Carta("8a","Carros de Série "," Lexus LS 430  "," 4.293 ccm "," 282 CV  "," 250 km/h  "," 1.995 kg  "," 5,0 m ");
var carta8b = new Carta("8b","Carros de Série "," BMW 745i  "," 4.398 ccm "," 333 CV  "," 250 km/h  "," 1.945 kg  "," 5,0 m ");
var carta8c = new Carta("8c","Carros de Série "," Cadillac Deville DTS  "," 4.565 ccm "," 305 CV  "," 240 km/h  "," 1.843 kg  "," 5,26 m  ");
var carta8d = new Carta("8d","Carros de Série "," Audi S8 "," 4.172 ccm "," 360 CV  "," 250 km/h  "," 1.730 kg  "," 5,03 m  ");

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

