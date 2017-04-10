
var Opcao = function(id,descricao){
    this.id = id;
    this.descricao = descricao;
};

var opt1 = new Opcao(1, "cilindradas");
var opt2 = new Opcao(2, "potencia");
var opt3 = new Opcao(3, "velocidade");
var opt4 = new Opcao(4, "peso");
var opt5 = new Opcao(5, "comprimento");

var Opcoes = [opt1, opt2, opt3, opt4, opt5];

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

var carta1a = new Carta("1a","Carros Esportivos",   "Maserati Assento Corsa"," 3.217"," 369"," 280"," 1.590"," 4,51");
var carta1b = new Carta("1b","Carros Esportivos",   "Jaguar XKR  "," 3.996"," 363"," 250"," 1.715"," 4,76");
var carta1c = new Carta("1c","Carros Esportivos" ,  "Porsche 911 GT2 "," 3.600"," 462"," 315"," 1.451"," 4,45");
var carta1d = new Carta("1d","Carros Esportivos" , "Aston Martin Vanquish "," 5.935"," 460"," 306"," 1.863"," 4,67");

var carta2a = new Carta("2a","Carros Clássicos", "Rolls-Royce Park Ward "," 5.379"," 326"," 225"," 2.480"," 5,65");
var carta2b = new Carta("2b","Carros Clássicos"," Mercedes S 63 AMG "," 6.258"," 444"," 250"," 2.035"," 5,16");
var carta2c = new Carta("2c","Carros Clássicos"," Daimler Super V8  "," 3.996"," 363"," 250"," 1.820"," 5,15");
var carta2d = new Carta("2d","Carros Clássicos"," Bentley Continental T "," 6.750"," 426"," 270"," 2.450"," 5,22");

var carta3a = new Carta("3a","Utilitários Esportivos", " Lexus RX 300  "," 2.995"," 201"," 180"," 1.865"," 4,58");
var carta3b = new Carta("3b","Utilitários Esportivos", " Mercedes ML 55 AMG  "," 5.439"," 347"," 235"," 2.300"," 4,64");
var carta3c = new Carta("3c","Utilitários Esportivos", " Range Rover "," 4.553"," 218"," 196"," 2.120"," 4,71");
var carta3d = new Carta("3d","Utilitários Esportivos", " BMW X5  "," 4.398"," 286"," 207"," 2.170"," 4,67");

var carta4a = new Carta("4a","Carros dos Sonhos "," Bugatti EB 16.4 Veyron  "," 7.993"," 1.001"," 404"," 1.380"," 4,38");
var carta4b = new Carta("4b","Carros dos Sonhos "," Ferrari 550 Maranello "," 5.474"," 485"," 320"," 1.690"," 4,55");
var carta4c = new Carta("4c","Carros dos Sonhos "," B. Engineering Edonis "," 3.760"," 680"," 365"," 1.300"," 4,35");
var carta4d = new Carta("4d","Carros dos Sonhos "," Lamborghini Diablo  "," 5.992"," 550"," 330"," 1.625"," 4,47");

var carta5a = new Carta("5a","Protótipo "," VW D1   "," 6.000"," 450"," 250"," 1.750"," 4,95");
var carta5b = new Carta("5b","Protótipo "," ItalDesign Scighera "," 3.000"," 400"," 310"," 1.450"," 4,32");
var carta5c = new Carta("5c","Protótipo "," Cadillac Imag "," 4.200"," 431"," 300"," 1.850"," 5,10");
var carta5d = new Carta("5d","Protótipo "," Chrysler Chronos  "," 5.980"," 350"," 280"," 1.950"," 5,22");

var carta6a = new Carta("6a","Limusine  "," Binz XL "," 4.266"," 279"," 230"," 2.180"," 5,79");
var carta6b = new Carta("6b","Limusine  "," Hooper Rolls-Royce Emperor  "," 6.748"," 325"," 215"," 2.440"," 5,82");
var carta6c = new Carta("6c","Limusine  "," American Custon Lincoln "," 5.409"," 380"," 200"," 2.870"," 6,40");
var carta6d = new Carta("6d","Limusine  "," Maybach Langversion "," 5.600"," 470"," 250"," 2.450"," 6,10");

var carta7a = new Carta("7a","Carros Exóticos "," Pagani Zonda C12 S  "," 7.010"," 550"," 350"," 1.250"," 4,40");
var carta7b = new Carta("7b","Carros Exóticos "," Morgan Aero 8 "," 4.398"," 286"," 258"," 1.000"," 4,09");
var carta7c = new Carta("7c","Carros Exóticos "," Mega Monte Carlo  "," 5.991"," 395"," 300"," 1.500"," 4,45");
var carta7d = new Carta("7d","Carros Exóticos "," Lotec Sirius  "," 5.987"," 1.200"," 400"," 1.380"," 4,12");

var carta8a = new Carta("8a","Carros de Série "," Lexus LS 430  "," 4.293"," 282"," 250"," 1.995"," 5,0 m ");
var carta8b = new Carta("8b","Carros de Série "," BMW 745i  "," 4.398"," 333"," 250"," 1.945"," 5,0 m ");
var carta8c = new Carta("8c","Carros de Série "," Cadillac Deville DTS  "," 4.565"," 305"," 240"," 1.843"," 5,26");
var carta8d = new Carta("8d","Carros de Série "," Audi S8 "," 4.172"," 360"," 250"," 1.730"," 5,03");

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
var baralhorCompleto = new Array();

function novoJogo(){
	var embaralhado = embaralha(baralho);

  baralhorCompleto = embaralhado.slice();

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

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function escolheCategoria(indexCarta){
    var carta = baralhorCompleto[indexCarta];
    var num = new Array();

    for (var i = 0; i < Opcoes.length; i++) {
      let opt = Opcoes[i];
      var total  = 0;

      for (var j = 0; j < baralhorCompleto.length; j++) {
        let cada = baralhorCompleto[j];

        if (Number(carta[opt.descricao]) > Number(cada[opt.descricao])){
          total++;
        }
      }
      num.push(total);
    }

    var max = getMaxOfArray(num);
    return (num.indexOf(max)+1);
    
}