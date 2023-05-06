class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "your name");
    this.playButton = createButton("game");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
     
  }
combinamdoJogadores(){
this.playButton.mousePressed(()=>{
this.input.hide()
this.playButton.hide()  
this.greeting.html("combinamdo Jogadores")
contador+=1
player.nome=this.input.value()
player.numero=contador
player.addPlayer()
player.update(contador)



})


}
  setElementsPosition() {
    this.titleImg.position(120,50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 350, height / 2 - 100);
  
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.titleImg.hide();
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.combinamdoJogadores();
  
  }
}
