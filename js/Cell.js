class Cell{
  constructor(x,y,width,height,id) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y =y;

    this.boxElement = document.createElement("div");
    this.boxElement.className = ("cell");
    this.boxElement.classList.add("off");

    this.boxElement.id = id;
    this.boxElement.style.width = this.width +"px";
    this.boxElement.style.height = this.height +"px";
    this.boxElement.style.top =this.y+"px";
    this.boxElement.style.left = this.x +"px";
    // color of cell;
    this.cellColor = "#000000";
    this.boxElement.style.background = this.cellColor;
     document.getElementById("wrapper").appendChild(this.boxElement);


  //this.boxElement.addEventListener("mouseover", this.mouseOverFunction);
//  this.boxElement.addEventListener("mouseout", this.mouseOutFunction);

  }

  mouseOverFunction(event){
    //console.log(event.target);
    //event.target.classList.remove("off");
  //  event.target.classList.add("hover");
    this.cellColor = "green";
    event.target.style.background = this.cellColor;
  }




  mouseOutFunction(event){
  //  console.log(event.target);
  //  event.target.classList.remove("hover");
  //  event.target.classList.add("off");
  this.cellColor = "black";
  event.target.style.background = this.cellColor;
  }

  display(){
    //fill(255);
      //rect(this.x,this.y,this.width,this.height);
  }
}
