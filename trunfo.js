
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

var carta1a = new Carta("1a", "Carros Esportivos", "MaseratiAssentoCorsa","3217","369","280","1590","4.51");
var carta1b = new Carta("1b", "Carros Esportivos", "JaguarXKR","3996","363","250","1715","4.76");
var carta1c = new Carta("1c", "Carros Esportivos", "Porsche911GT2","3600","462","315","1451","4.45");
var carta1d = new Carta("1d", "Carros Esportivos", "AstonMartinVanquish","5935","460","306","1863","4.67",true);
var carta2a = new Carta("2a", "Carros Clássicos", "Rolls-RoyceParkWard","5379","326","225","2480","5.65");
var carta2b = new Carta("2b", "Carros Clássicos", "MercedesS63AMG","6258","444","250","2035","5.16");
var carta2c = new Carta("2c", "Carros Clássicos", "DaimlerSuperV8","3996","363","250","1820","5.15");
var carta2d = new Carta("2d", "Carros Clássicos", "BentleyContinentalT","6750","426","270","2450","5.22");
var carta3a = new Carta("3a", "Utilitários Esportivos", "LexusRX300","2995","201","180","1865","4.58");
var carta3b = new Carta("3b", "Utilitários Esportivos", "MercedesML55AMG","5439","347","235","2300","4.64");
var carta3c = new Carta("3c", "Utilitários Esportivos", "RangeRover","4553","218","196","2120","4.71");
var carta3d = new Carta("3d", "Utilitários Esportivos", "BMWX5","4398","286","207","2170","4.67");
var carta4a = new Carta("4a", "Carros dos Sonhos", "BugattiEB16.4Veyron","7993","1001","404","1380","4.38");
var carta4b = new Carta("4b", "Carros dos Sonhos", "Ferrari550Maranello","5474","485","320","1690","4.55");
var carta4c = new Carta("4c", "Carros dos Sonhos", "B.EngineeringEdonis","3760","680","365","1300","4.35");
var carta4d = new Carta("4d", "Carros dos Sonhos", "LamborghiniDiablo","5992","550","330","1625","4.47");
var carta5a = new Carta("5a", "Protótipo", "VWD1","6000","450","250","1750","4.95");
var carta5b = new Carta("5b", "Protótipo", "ItalDesignScighera","3000","400","310","1450","4.32");
var carta5c = new Carta("5c", "Protótipo", "CadillacImag","4200","431","300","1850","5.10");
var carta5d = new Carta("5d", "Protótipo", "ChryslerChronos","5980","350","280","1950","5.22");
var carta6a = new Carta("6a", "Limusine", "BinzXL","4266","279","230","2180","5.79");
var carta6b = new Carta("6b", "Limusine", "HooperRolls-RoyceEmperor","6748","325","215","2440","5.82");
var carta6c = new Carta("6c", "Limusine", "AmericanCustonLincoln","5409","380","200","2870","6.40");
var carta6d = new Carta("6d", "Limusine", "MaybachLangversion","5600","470","250","2450","6.10");
var carta7a = new Carta("7a", "Carros Exóticos", "PaganiZondaC12S","7010","550","350","1250","4.40");
var carta7b = new Carta("7b", "Carros Exóticos", "MorganAero8","4398","286","258","1000","4.09");
var carta7c = new Carta("7c", "Carros Exóticos", "MegaMonteCarlo","5991","395","300","1500","4.45");
var carta7d = new Carta("7d", "Carros Exóticos", "LotecSirius","5987","1200","400","1380","4.12");
var carta8a = new Carta("8a", "Carros de Série", "LexusLS430","4293","282","250","1995","5.0");
var carta8b = new Carta("8b", "Carros de Série", "BMW745i","4398","333","250","1945","5.0");
var carta8c = new Carta("8c", "Carros de Série", "CadillacDevilleDTS","4565","305","240","1843","5.26");
var carta8d = new Carta("8d", "Carros de Série", "AudiS8","4172","360","250","1730","5.03");

var baralho = [carta1a,carta1b,carta1c,carta1d,carta2a,carta2b,carta2c,carta2d,carta3a,carta3b,carta3c,carta3d,carta4a,carta4b,carta4c,carta4d,carta5a,carta5b,carta5c,carta5d,carta6a,carta6b,carta6c,carta6d,carta7a,carta7b,carta7c,carta7d,carta8a,carta8b,carta8c,carta8d];

var cartaJogadaHumano = null;
var humanoJagando =false;

var contador1 = 16;
var contador2 = 16;

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

  contador1 = 16;
  contador2 = 16;

	return pcComeca;
}

function comecaJogo(){

  var pcComeca = novoJogo();

  if(pcComeca){
    alert("O PC Começa!")
    setTimeout(function(){ 
      pcJoga();
    }, 500);
  } else {
    alert("Você Começa!")
    setTimeout(function(){ 
      vezHumano();
    }, 500);
  }

}

function pcJoga(){
  humanoJagando = false;
  var carta1 = proximaCartaJogador1();
  var carta2 = proximaCartaJogador2();
  mostraCarta(carta1,true);
  proximaJogada(carta1,carta2,escolheCategoria(carta1));
}

function vezHumano(){
  humanoJagando = true;
  var carta2 = proximaCartaJogador2();
  cartaJogadaHumano = carta2;
  mostraCarta(carta2);
}

function humanoJoga(categoria){
  var carta1 = proximaCartaJogador1();
  proximaJogada(carta1,cartaJogadaHumano,categoria);
}

function proximaJogada(carta1,carta2,categoria){
  var quemGanha = comparaQuemGanha(carta1,carta2,categoria)

  if(quemGanha == 1){
    console.log("PC Ganhou essa jogada");
    addCartaJogador1(carta1);
    addCartaJogador1(carta2);
    contador1++;
    contador2--;
     if(contador1 == 0 || contador2 == 0){
      fimJogo();
    } else {
       atualizaContadores();
      setTimeout(function(){ 
        pcJoga();
      }, 1000);
    }
   
  } else {
    console.log("Você Ganhou essa jogada");
    addCartaJogador2(carta1);
    addCartaJogador2(carta2);
    contador2++;
    contador1--;
    if(contador1 == 0 || contador2 == 0){
      fimJogo();
    } else {
      atualizaContadores();
      setTimeout(function(){ 
        vezHumano();
      }, 1000);
    }
  }
}

function mostraCarta(carta,pcJogando){
  var id = carta.id;
  var carta = document.getElementById("carta");
  carta.style.background = "url(cartas/"+ id +".png)";
  if(pcJogando){
    carta.style.border = "5px solid #d54137";
  } else {
    carta.style.border = "5px solid #2c60aa";
  }
}

function atualizaContadores(){
  var ct1 = document.getElementById("baralhoJogador1").getElementsByClassName("contador")[0];
  var ct2 = document.getElementById("baralhoJogador2").getElementsByClassName("contador")[0];

  ct1.textContent = contador1;
  ct2.textContent = contador2;
}

function fimJogo(){
  atualizaContadores();
  var ganhador = document.getElementById("ganhador");
  if(contador1 > 0){
      ganhador.textContent = "Você perdeu!" 
  } else {
     ganhador.textContent =  "Você Ganhou!"
  }
  document.getElementById("fim-jogo-conteiner").style.display = "block";
}


function addCartaJogador1(carta) {
  return baralhoJogador1.push(carta);
}

function addCartaJogador2(carta) {
  return baralhoJogador2.push(carta);
}

function proximaCartaJogador1() {
  if(baralhoJogador1.length > 0) {

    return baralhoJogador1.shift();
  }

  return null;
}

function proximaCartaJogador2() {
  if(baralhoJogador2.length > 0) {
   
    return baralhoJogador2.shift();
  }
  return null;
}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function escolheCategoria(carta){
   
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
    return num.indexOf(max);
    
}

function comparaQuemGanha(carta1,carta2,categoria){
 
  if(carta1.id.includes("1")){
    return 1
  } else if(carta2.id.includes("1")){
    return 2;
  } else if(carta1.trunfo){
    return 1;
  } else if(carta2.trunfo){
    return 2;
  } else if(carta1[Opcoes[categoria].descricao] > carta2[Opcoes[categoria].descricao] ){
    return 1;
  } else {
    return 2;
  }

}

document.getElementById("btn-novo-jogo").addEventListener("click", function(){

    document.getElementById("novo-jogo-conteiner").style.display = "none";

    comecaJogo();

 
});

document.getElementById("btn-novo-jogo-2").addEventListener("click", function(){

    document.getElementById("fim-jogo-conteiner").style.display = "none";

    comecaJogo();

 
});

var optCartas = document.querySelectorAll('.opt-cartas');

for (var i = 0; i < optCartas.length; i++) {
    optCartas[i].addEventListener('click', function(event) {
        if(humanoJagando){
          var categoria = Number(event.target.id.split("-")[1]);
          humanoJoga(categoria) 
        }
    });
}