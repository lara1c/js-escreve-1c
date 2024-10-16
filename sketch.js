let xbolinha= 250;
let cor;
let posicaohorizontal;
let posicaovertical;

function setup() {
  createCanvas(600, 600);
   background("pink");
cor = color(random(0,255),random(0,255),random(0,255), random(0, 100));
posicaohorizontal=200;
posicaovertical=200;
}

function draw() {
  fill (cor);
 circle(posicaohorizontal, posicaovertical,50); 
  if(mouseX < posicaohorizontal){
    posicaohorizontal = posicaohorizontal -1;
 }
  if(mouseX > posicaohorizontal){
    posicaohorizontal = posicaohorizontal +1;
  }
    if(mouseY < posicaovertical){
    posicaovertical = posicaovertical -1;
  }
  if(mouseY > posicaovertical){
    posicaovertical = posicaovertical +1;
  }
}
  