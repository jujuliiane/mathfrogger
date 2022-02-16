function fase8(){
    background(imgfundot2);
    fill('#449489');
    noStroke();
    rect(xrect11, yrect11, 150,75);
    rect(xrect21, yrect21, 150,75);
    rect(xrect31, yrect31, 150,75);
    rect(xrect41, yrect41, 150,75);
  
    image(sapo,xs,ys);
    
    for(i=0; i<4;i++){
    image(imgcar[i], xcar[i], ycar[i],105,75);
    }
  
    noStroke();
    fill("#ffffff");
    textSize(12);
    textFont(myFont);
    text("Pontos: "+score, 615,120);
    text("Vidas: "+vida, 615,135);
    textSize(35);
    text("(64/8)+7", 535,60);
    textSize(35);
    text("12", 110,135);
    text("18", 340,135);
    text('13', 940,135);
    text("15", 1170,135);
    moverCarro8();
    CollideFrogCar8();
    CollideRect8();
  
  }
  
function moverSapo(){
    if (keyIsDown(UP_ARROW)){
      yss=yss-5;
      ys = constrain(yss, 0, 530)
    } 
    if (keyIsDown(DOWN_ARROW)){
      yss=yss+5;
      ys = constrain(yss, 0, 530)
    }
    if (keyIsDown(LEFT_ARROW)){
      xss=xss-5;
      xs = constrain(xss, 0, 1250)
    } 
    if (keyIsDown(RIGHT_ARROW)){
      xss=xss+5;
      xs = constrain(xss, 0, 1250)
    }
  }
  
function moverCarro8(){
    if(score==80){
      velcar=5.8
    }
    for(i=0; i<2;i++){
      xcar[i] = xcar[i]+(velcar+(i));
    }
    for(i=2; i<4;i++){
      xcar[i] = xcar[i]-(velcar+(i));
    }
    
    for(i=0;i<2;i++){
      if(xcar[i] > +1393){
        xcar[i] = -68;
      }
    }
    for(i=2;i<4;i++){
      if(xcar[i] < -68){
        xcar[i] = 1325;
      }
    }
  }
  
function CollideFrogCar8(){
    for(i=0;i<4;i++){
      hitFrogCar = collideRectRect(xcar[i],ycar[i],105,75, xs, ys, 75, 75);
        if(hitFrogCar==true){
          kill = true;
        }
        if(kill==true){
          yss=530;
          xss=638
          ys = constrain(yss, 0, 530);
          xs = constrain(xss, 0, 638);
          vida--;
          kill = false;
        }
    }
  }
  
function CollideRect8(){
    //1 QUADRADRO
    hitFrogRect = collideRectRect(xrect11, yrect11, 150,75, xs, ys, 75, 75);
    if(hitFrogRect==true){
        killresp = true;
    }
    if(killresp==true){
        yss=530;
        xss=638
        ys = constrain(yss, 0, 530);
        xs = constrain(xss, 0, 638);
        vida--;
        killresp = false;
    }
    //2 QUADRADRO
    hitFrogRect = collideRectRect(xrect21, yrect21, 150,75, xs, ys, 75, 75);
    if(hitFrogRect==true){
        killresp = true;
    }
    if(killresp==true){
        yss=530;
        xss=638
        ys = constrain(yss, 0, 530);
        xs = constrain(xss, 0, 638);
        vida--;
        killresp = false;
    }
    //3 QUADRADRO
    hitFrogRect = collideRectRect(xrect31, yrect31, 150,75, xs, ys, 75, 75);
    if(hitFrogRect==true){
        killresp = true;
    }
    if(killresp==true){
        yss=530;
        xss=638
        ys = constrain(yss, 0, 530);
        xs = constrain(xss, 0, 638);
        vida--;
        killresp = false;
    }
    //4 QUADRADRO
    hitFrogRect = collideRectRect(xrect41, yrect41, 150,75, xs, ys, 75, 75);
    if(hitFrogRect ==true){
        vida = vida + 1;
        tela = 19;
        score = score + 10;
        killresp = false
        hitFrogRect=false;
        }
  }
  