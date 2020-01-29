class Cell{
  constructor(x,y,width,height) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y =y;
  }
  display(){
    fill(255);
      rect(this.x,this.y,this.width,this.height);
  }
}
