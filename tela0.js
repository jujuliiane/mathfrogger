function menu() {
  background(imgfundot0);
  image(imgcara2, xca0, yca0,68,42);
  image(imgcarr2, xcr0, ycr0,68,42);
  
  //titulo
  noStroke();
  fill("#ffffff");
  textSize(70);
  textFont(myFont);
  text('Math Frogger', 265, 150);

  //texto de enter
  noStroke();
  fill("#ffffff");
  textSize(20);
  textFont(myFont);
  text('press enter to start', 470, 275);
  
  //botão jogar
  noStroke();
  fill("#ffffff");//cor do texto
  textSize(40);
  textFont(myFont);
  text('Jogar',580,379);
  
  //botão instrução
  noStroke();
  fill("#ffffff");
  textSize(28);
  textFont(myFont);
  text('Instruções',537,467)
  
  //botão creditos
  noStroke();
  fill("#ffffff");
  textSize(32);
  textFont(myFont);
  text('Créditos',550,560);
  
  //borda 
  noFill();
  stroke('#e8dcd8');
  strokeWeight(4);
  rect(xtec, ytec,300,75); // cursor
  
  moverCarro0();
}

function moverCarro0(){
  xca0 = xca0 + 2.5;
  
  if(xca0 > +1393){
    xca0 = -68;
  }
  
  xcr0 = xcr0 - 3;
  if(xcr0 < -68){
    xcr0 = 1325;
  }
}
