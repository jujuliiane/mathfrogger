var tela; //tela
var op=1 //opção

var xtec, ytec; // cursor 
var xca0, yca0, xcr0, ycr0; //posição do carro do menu
var xs, ys, xss, yss; //posição do carro do sapo
var xgo, ygo;//posição da tela de gameover

var myFont, musica; //fonte e musica
var imgcar= [], xcar = [], ycar = [], imgcara2, imgcarr2; //imagens
var gameover, seta, sapo, sapo1, sapo2, imgfundot0, imgfundot1, imgfundot2;//fundo da t0

var hitFrogCar, score, vida; 
var killresp = false;
var hitFrogRect=false;
var kill =false;

function preload() {
  myFont = loadFont('mathfrogger/fontes/PressStart2P-Regular.ttf');
  music = loadSound('mathfrogger/musica/Rewind.mp3');
  seta = loadImage('mathfrogger/imagens/seta.png');
  imgfundot0 = loadImage('mathfrogger/imagens/fundot00.png');
  imgfundot1 = loadImage('mathfrogger/imagens/fundot1.png');
  imgfundot2 = loadImage('mathfrogger/imagens/fundot2.png');
  gameover = loadImage('mathfrogger/imagens/gameover0.png');
  telaFinal = loadImage('mathfrogger/imagens/telafinal.png');
  
  imgcara2 = loadImage('/imagens/cara2.png');
  imgcarr2 = loadImage('/imagens/carr2.png');
  
  sapo = loadImage('/imagens/sapo.png');
  sapo1 = loadImage('/imagens/farvardin-grenouille_frog-smile.png');
  sapo2 = loadImage('/imagens/farvardin-grenouille_frog-unplzd.png');
  
  for(i=0; i<2;i++){
    imgcar[i] = loadImage('/imagens/car1.png');
  }
  for(i=2; i<4;i++){
    imgcar[i] = loadImage('/imagens/car2.png');
  }

}

function setup() {
  createCanvas(1325, 600);
  music.play();
  
  xtec = 525;
  ytec = 319;

  xca0 = 0;
  yca0 = 20;
  xcr0 = 0;
  ycr0 = 165;

  for (i=0;i<4;i++){
    xcar[i] = 0;
    ycar[i] = 225 + (75*i);
  }

  xrect11 = 75;
  yrect11 = 75;
  xrect21 = 300;
  yrect21 = 75;
  xrect31 = 900;
  yrect31 = 75;
  xrect41 = 1125;
  yrect41 = 75;

  xs = 638;
  ys = 530;
  xss = 638;
  yss = 530;

  xgo = 450;
  ygo = 1050;
  
  score=0;
  tela = 0;
  vida = 5;
}

function draw(){
  if(tela==0){
    menu();
  }
  if(tela==1){
    jogar();
  }
  if(tela==2){
    instrucao();
  }
  if(tela==3){
    creditos();
  }
  if(tela==12){
    fase2();
  }
  if(tela==13){
    fase3();
  }
  if(tela==14){
    fase4();
  }
  if(tela==15){
    fase5();
  }
  if(tela==16){
    fase6();
  }
  if(tela==17){
    fase7();
  }
  if(tela==18){
    fase8();
  }
  if(tela==19){
    final();
  }

  moverSapo();
  image(gameover, xgo, ygo,450,450);
  finish();
}

function keyPressed(){
  if(key=='ArrowUp' && ytec>319){
    ytec = ytec - 93;
    op = op-1;
  }
    
  if(key=='ArrowDown' && ytec<505){
    ytec = ytec + 93;
    op = op+1;
  }
  if(key=='Enter'){
    tela = op;
  }
}

function doubleClicked(event) {
  tela = 0
}

function finish (){
  if(vida<0){
    vida=0;
  }
  if(vida==0){
    ygo=ygo-948;
  } 
  if(ygo<-50){
    ygo = 102;
  }
  if(key=='Escape'){
    tela = 0;
    ygo = 1050;
    vida = 5;
    pontos = 0;
  }
}
