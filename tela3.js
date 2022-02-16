function creditos(){
    background("#111323");
    fill('#b35447');
    //rect(225,75,150,150);
    //rect(225,300,150,150);
    image(sapo2,270,105,110,108)
    image(sapo1,270,310,110,108)

    fill("#ffffff");
    noStroke();
    textSize(20);
    textFont(myFont);
    text('Desenvolvedor',450,125);
    text('Orientador',450,350);
    textSize(15);
    text('Juliane Santos \nBacharel em Ciência e Tecnologia (UFRN)',450,155);
    text('Rummenigge Dantas\n',450,380);

    text('Creditos de imagem:                   Creditos de música:',225,470);
    text('Small city cars by PixelShack         Rewind by Pro Sensory',225,500);
    text('Frog smilies by Farvardin',225,520);
    textSize(15);
    text('Click com o mouse 2 vezes para voltar',25,575);
}