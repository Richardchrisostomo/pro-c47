class Game {
  constructor() {
  this.resetbutton=createButton("reset")
this.movimentar=false


  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    contador=player.pegar()
    IS7=createSprite(width/2+100,height-100)
    IS7.addImage(IS7img)
    

    IS4=createSprite(width/2-100,height-100)
    IS4.addImage(IS4img)
    
    
    grupotks=[IS7,IS4]
    IS7.scale=(0.4)
    IS4.scale=(0.5)
    gobs1=new Group()
    gobs2=new Group()
    gobs3=new Group()
    gobs4=new Group()
  this.addsprites(gobs1,5,obs1,0.3)
  this.addsprites(gobs2,5,obs2,0.3)
  this.addsprites(gobs3,5,obs3,0.3)
  this.addsprites(gobs4,5,obs4,0.3)
}
pegarmoeda(jogadorindece){
grupotks[jogadorindece-1].overlap(gobs3,function(collector,collected){
player.moeda+=50
player.atualizar()
collected.remove()
})
}

youwin(){
swal({
imageUrl:"https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
imaeSize:"100x100",
title:"win",
text:`${player.rank}st`,
confirmButtonText:"win",
})
}



defeat(){
swal({
imageUrl:"https://cdn-icons-png.flaticon.com/512/812/812868.png",
imageSize:"100x100",
title:"defeat",
text:"mais sorte na prosima",
confirmButtonText:"defeat",
})
}



vida(){
fill("black")
rect(width/2,height-200-player.y,100,15)
fill("red")
rect(width/2,height-200-player.y,player.vida,15)
}



fuell(){
  fill("black")
rect(width/2,height-180-player.y,100,15)
fill("green")
rect(width/2,height-180-player.y,player.fuel,15)
}



pegarfuel(jogadorindece){
  grupotks[jogadorindece-1].overlap(gobs4,function(collector,collected){
    if(player.fuel<100){
      player.fuel+=50
      }
    
  player.atualizar()
  collected.remove()
  

})
if(player.fuel>0 && this.movimentar==true){
  player.fuel-=0.1

}
  if(player.fuel<=0){
  this.defeat() 
  estado=2;
}
    
    
    

  }
  


  
    




  pegargobs1(jogadorindece){
    grupotks[jogadorindece-1].overlap(gobs1,function(collector,collected){
   if(player.vida>0){
  player.vida-=20
  }
  
      
      
    player.atualizar()
    collected.remove()
    
  })
  if(player.vida<=0){
    this.defeat() 
    estado=2;
  } 
  }

    pegargobs2(jogadorindece){
      grupotks[jogadorindece-1].overlap(gobs2,function(collector,collected){
      if(player.vida>0){
        player.vida-=20
        }
      player.atualizar()
      collected.remove()
      })
      if(player.vida<=0){
        this.defeat() 
        estado=2;
      }
          
    }



pegar(){
 var pega=database.ref("estado").on("value",function(data){estado=data.val()})
  
}
update(estado){
  var pega=database.ref("/").update({estado:estado})


}
play(){
Player.pegarjg();
player.pegarwinp

  form.hide()
  this.resetbutton.position(width / 2 + 400, height / 2 - 20);
  this.resetbutton.class("customButton");
  this.resetbutton.mousePressed(()=>{
  database.ref("/").set({
  contador:0,
  estado:0,
  players:{}

  })
 window.location.reload()   
  })

  image(pista,0,-height*5,width,height*6)
this.vida()
 this.fuell() 
var jogador=0
for(var i in joges){
jogador+=1
var x=joges[i].x
var y=height-joges[i].y
grupotks[jogador-1].position.x=x
grupotks[jogador-1].position.y=y
if(jogador==player.numero){
camera.position.y=grupotks[jogador-1].position.y
this.pegarmoeda(jogador)
this.pegarfuel(jogador)
this.pegargobs1(jogador)
this.pegargobs2(jogador)
}

} 

  drawSprites()
this.movimento()
const ggwp=height*6-120;
if(player.y>ggwp){
estado=2;
player.rank+=1;
player.updatewinp(player.rank);
player.atualizar()
this.youwin();

}

}
  addsprites(grupo,numero,img,scale) {
 for (let index = 0; index < numero; index++) {
 var x,y
 x=random(width-900,width-500) 
 y=random(-height*5,height-300) 
var sprites=createSprite(x,y)
sprites.addImage(img)
sprites.scale=scale
grupo.add(sprites)


 }
    



 }

 movimento() {
if(keyIsDown(UP_ARROW)){
player.y+=10;
player.atualizar()
this.movimentar=true

}
if(keyIsDown(DOWN_ARROW)){
  player.y-=10;
  player.atualizar()
  }
if(keyIsDown(RIGHT_ARROW)&&player.x<=width-500){
   player.x+=10;
   player.atualizar()
   }
if(keyIsDown(LEFT_ARROW)&&player.x>=width-900){
  player.x-=10;
  player.atualizar()
  }

}
}



