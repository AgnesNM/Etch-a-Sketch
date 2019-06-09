let boxes = '<div class="box1"></div>'+
  '<div class="box2"></div>' +
  '<div class="box3"></div>' +
  '<div class="box4"></div>' +
  '<div class="box5"></div>' +
  '<div class="box6"></div>'+
  '<div class="box7"></div>'+
  '<div class="box8"></div>'+
  '<div class="box9"></div>'+
  '<div class="box10"></div>'+
  '<div class="box11"></div>'+
  '<div class="box12"></div>'+
  '<div class="box13"></div>'+
  '<div class="box14"></div>'+
  '<div class="box15"></div>'+
  '<div class="box16"></div>';

  
document.getElementById("grid-container").innerHTML = boxes;

document.getElementById("grid-container").onmouseover = handler;

function handler(event){
    if (event.type == 'mouseover') {
        event.target.style.border = "dotted";        
      }
}


// function reset(){
//   let gridValue = prompt("Enter a value to reset your grid", 0);
//   console.log(gridValue);
// }

//This creates a 4X4 grid. We need to find a way to create practically any grid, starting with 16x16.