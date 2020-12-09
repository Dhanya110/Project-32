class VioletBlock extends BaseClass {
  constructor(x, y){
    super(x,y,30,30);
    this.visiblity = 255;
   
  }
display(){

 
  fill(153,0,153)

if(this.body.speed<3){
  super.display()
}
 else {
  World.remove(world,this.body)
  push()
  this.visibility=this.visibility-5
  tint(255,this.visibility)
 // image(this.image,this.body.position.x,this.body.position.y,50,50)
  pop()
}

}
score(){
  if (this.visiblity < 0 && this.visiblity > -105){
    score++;
  }
}
}





       