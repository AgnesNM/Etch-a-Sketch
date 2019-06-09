//creating one div
function allDivs(){
    for (i=0;i<100;i++){
        let div1 = document.createElement("div");
        div1.className = "squares";
        div1.innerHTML = 1;
        document.getElementById("grid-container").appendChild(div1);
   }    
    someDivs();
    someDivs2();    
}

allDivs();

function someDivs(){
    for (i=0;i<100;i++){
        let div1 = document.createElement("div");
        div1.className = "squares";
        div1.innerHTML = 1;
        document.getElementById("grid-container").appendChild(div1);
    }
}

function someDivs2(){
    for (i=0;i<56;i++){
        let div1 = document.createElement("div");
        div1.className = "squares";
        div1.innerHTML = 1;
        document.getElementById("grid-container").appendChild(div1);
    }
}

//creating an initial 16X16 grid
//creating 64 divs
//spread them out into an equal number of rows and columns

//border

let squareDivs = document.getElementsByClassName("squares"); 
// squareDivs.onmouseover = function(){
//     this.style.border = "dotted";
//     this.style.backgroundColor = "plum";
// };
// function handler(event){
//     for(let squareDiv of squareDivs){
//         if (event.type == 'mouseover') {
//             event.target.style.border = "dotted";
//             event.target.style.backgroundColor = "plum";                 
//         }
//     }
// }
// handler();


    


// function handler(event){
//     if (event.type == 'mouseover') {
//         event.target.style.border = "dotted";
//         event.target.style.backgroundColor = "plum";                 
//     }
// }

//background color
// let div = document.getElementById("grid-container");
// div.onmouseover = function() {
//   this.style.backgroundColor = "plum";  
// };

//reset button
function resetB(){
    let resetButton = document.getElementById("reset-btn");
    resetButton.addEventListener('click', function(event){
        document.getElementById("grid-container").innerHTML= "";
    });
}

resetB();


