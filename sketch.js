let xbola=300;
let ybola=200;
let diametro=20;
let raio= diametro/2;
let xvb=6;
let yvb=6;
let xr=5;
let yr=150;
let lr=7;
let ar=80;
let xri=585;
let yri=150;

let meuspontos= 0;
let pontosdooponente= 0;

let colidiu = false;



function setup() {
  createCanvas(600, 400)
fundo.loop();
  
  
}


function draw() {
  background("black");
  mostrabola();
mexebola();
quicabola();
mostraraquete(xr,yr);
mostraraquete(xri,yri);
mexeraquete();
  mexeraqueteinimigo();
  quicaraquetebola(xri,yri);
  quicaraquetebola(xr,yr);
  pontos();
  placar();
  texto();

}
function preload(){
  fundo = loadSound ("Chill.wav")
    ponto = loadSound("saltar.wav")
  raquetada= loadSound("saltar.wav")
}

  function mostrabola(){
circle(xbola,ybola,diametro);
  }
  
function mexebola(){
xbola+=xvb;
ybola+=yvb

}
function quicabola(){

if(xbola + raio >width||xbola-raio<0){
xvb*=-1  
}
  if(ybola+raio >height||ybola-raio<0){
yvb*=-1  
  }
}

function mostraraquete(x,y){
  rect(x,y,lr,ar);
}
function mexeraquete(){
  if (keyIsDown(UP_ARROW))
yr -=10;

if(keyIsDown(DOWN_ARROW))
yr +=10;
}

function mexeraqueteinimigo(){
if (keyIsDown(87))//s
yri -=10;

if(keyIsDown(83))//w
yri +=10;
}

function quicaraquetebola(x,y){
  colidiu = collideRectCircle(x,y,lr,ar,xbola,ybola,raio);
  
  if(colidiu){
    xvb *= -1;
 raquetada.play();
  }
}

function pontos(){
  if (xbola>590){
  meuspontos += 1
    ponto.play();
  }
  if (xbola<10){
  pontosdooponente += 1
    ponto.play();
  }
}

function placar(){
  stroke("white")
  textAlign(CENTER);
  textSize(20);
 fill("violet");
  rect(150,10,40,20);
  fill("white");
  text(meuspontos,170,27);
  fill("lightblue");
  rect(430,10,40,20);
  fill("white");
  text(pontosdooponente,450,27);
}
  
  function texto(){
  let frase = "MEUS PONTOS"
  let xf = 90;
  let yf = 40;
  textSize(20);
  textAlign(LEFT, TOP);
    fill("red")
    text(frase,xf,yf);
    
  let frase2= ("PONTOS DO OPONENTE")
  let xf2 = 330;
  let yf2 = 40;
  textSize(20);
  textAlign(LEFT, TOP);
    fill("#9E3B5C")
    text(frase2,xf2,yf2);
}