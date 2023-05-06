class Player {
  constructor() {
this.nome=null
this.numero=null
this.x=0;
this.y=0;
this.vida=100; 
this.fuel=100;
this.moeda=0;
this.rank=0;

}
addPlayer(){
if(this.numero==1){
this.x=width/2+100
}
if(this.numero==2){
  this.x=width/2-100
  }

var pasta="players/player"+this.numero
database.ref(pasta).set({
nome:this.nome,x:this.x,y:this.y,
moeda:this.moeda,
vida:this.vida,
fuel:this.fuel,
rank:this.rank,

})


}
static pegarjg(){
  var pega=database.ref("players").on("value",function(data){joges=data.val()})



}

  pegar(){
    var pega=database.ref("contador").on("value",function(data){contador=data.val()})
}
update(contador){
  var pega=database.ref("/").update({contador:contador})
}
atualizar(){
  var pega=database.ref("players/player"+this.numero).update({x:this.x,y:this.y,moeda:this.moeda,
    vida:this.vida,
    fuel:this.fuel,
    rank:this.rank,
  })
    




}
pegarwinp(){
  var pega=database.ref("winp").on("value",function(data){this.rank=data.val()})
}
updatewinp(winp){
var pega=database.ref("/").update({winp:winp})
}

}
