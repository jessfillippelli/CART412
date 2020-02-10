
document.addEventListener('keydown', changeThem);


let colorArray = ["#D1D869", "#8ACFB9", "#B2D456", "#6CC28A", "#98BF62", "#71B744",
"#35B44C", "#15AB4B", "#728C6A", "#597D38", "#088A44", "#354A23"];
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
     document.getElementById("wrapper").appendChild(this.boxElement);

    this.boxElement.addEventListener("mouseover", this.mouseOverFunction);
    //  this.boxElement.addEventListener("mouseout", this.mouseOutFunction);

  }

  mouseOverFunction(event){
    console.log(event.target);
    event.target.classList.remove("off");
    event.target.classList.add("hover");
  }

function changeThem(){
  console.log(event.keyCode);
  if(event.keyCode ===81 ){

//one black square and one green till the end


    //fill(10,150,71);
  }
if(event.keyCode ===87){
//the array of colors fuction
}

} //end of changeThem



  // mouseOutFunction(event){
  //   console.log(event.target);
  //   event.target.classList.remove("hover");
  //   event.target.classList.add("off");
  // }

  display(){
    //fill(255);
      //rect(this.x,this.y,this.width,this.height);
  }
}
