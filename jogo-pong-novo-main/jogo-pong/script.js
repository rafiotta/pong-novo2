let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;

let vxBolinha = 12;
let vyBolinha = 12;

let raio = diametro / 2;

let yRaquete = 150;
let xRaquete = 10;

function setup() {
    createCanvas(600,400);
  }
  
  function draw() {
    background(0);
    moveBolinha();
    criarRaquete();
    criarRaqueteOponente();
    mudarBolinha();
    

    function moveBolinha(){



    circle(xBolinha,yBolinha,diametro);


    xBolinha += vxBolinha;
    yBolinha -= vyBolinha;
    
    }

    if(xBolinha + raio > width  || xBolinha - raio < 0 ){

        vxBolinha *= -1;

    }

    if(yBolinha + raio > height || yBolinha - raio < 0){


        vyBolinha *= -1;
    }

    function criarRaquete(){



    rect(xRaquete,yRaquete,10,90)
   }

   function criarRaqueteOponente(){

    rect(580,150,10,90)

   }

   function mudarBolinha() {
  
    if (keyIsDown(UP_ARROW)) {
       yRaquete -= 10;
    }
  
    if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }

 

  }
}