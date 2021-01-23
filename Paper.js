class Paper{
  constructor(x,y,r){
      this.image = loadImage("paper.png");
  var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2   
  }
  this.r=r;
  this.body=Bodies.circle(x,y,this.r/3,options)
  World.add(world,this.body)
}
display(){
   var paperpos=this.body.position

   push();
    imageMode(CENTER)
   image(this.image,paperpos.x,paperpos.y,this.r,this.r)
   pop();
}
}   