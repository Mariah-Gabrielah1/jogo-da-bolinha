let xBolinha = 300;
let yBolinha = 300;



let diametro = 30;
let vxBolinha = 10;
let vyBolinha = 10;

let raio = diametro / 2;

//CRIAR VARIAVEL VELOCIDADE Y BOLINHA
function setup() {
    createCanvas(700, 400);
}
function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    //VELOCIDADE X BOLINHA - AQUI A BOLINHA RECEBE A VELOCIDADE

    xBolinha += vxBolinha;
    yBolinha += vyBolinha;
    console.log(xBolinha);

    //ADICIONAR VELOCIDADE A BOLINHA
    console.log(xBolinha);

    //AS DUAS BARRAS SIGNIFICA OU
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        vxBolinha *= -1;
    }
    //CRIA CONDIÇAO DA BOLINHA
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        vyBolinha *= -1;
    }

}