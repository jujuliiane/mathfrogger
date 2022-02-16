function instrucao(){
    background("#111323");
    fill("#ffffff");
    noStroke();
    textSize(18);
    textFont(myFont);
    text("Ajude sapinho a atravessar a rua e aprender matemática.",40,90);
    textSize(15);
    text("Publico alvo: Estudantes do ensino fundamental (quinto ano), matemática (EF05MA08 e \nEF05MA07)",40,135)
    text('1. Utilize as setas do seu teclado para controlar o sapo',40,180);
    text('2. Desvie dos obstaculos presentes',40,225);
    text('3. Encontre o retângulo com o resultado correto da equação',40,270);
    text('4 .Divirta-se',40,315);
    textSize(15);
    text('Click com o mouse 2 vezes para voltar',40,580);
    image(seta,525,325,250,250);
}