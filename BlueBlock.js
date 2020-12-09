class BlueBlock extends BaseClass {
  constructor(x, y){
    super(x,y,30,30);
    this.Visiblity = 255;
   
  }
display(){
  
  fill(102, 255, 102)

if(this.body.speed<3){
  super.display()
}
 else {
  World.remove(world,this.body)
  push()
  this.Visibility=this.visibility-5
  tint(255,this.visibility)

  pop()
}

}
score(){
  if (this.visiblity < 0 && this.visiblity > -105){
    score++;
  }
}
}


 