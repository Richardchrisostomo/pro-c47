var canvas,estado,contador,IS4img,IS7img,pista,IS4,IS7,grupotks,joges,obs1,obs2,obs3,obs4,gobs1,gobs2,gobs3,gobs4;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");
  IS4img=loadImage("assets/IS4.png");
  IS7img=loadImage("assets/IS7.png");
  pista=loadImage("assets/track.jpg");
  obs1=loadImage("assets/obs1.png")
  obs2=loadImage("assets/obs2.png")
  obs3=loadImage("assets/obs3.png")
  obs4=loadImage("assets/obs4.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.pegar();
  
  game.start();

}

function draw() {
  background(backgroundImage);
    if (contador==2) {
    game.update(1)  
    }
    if (estado==1) {
      game.play()  
      }
  


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
 }



