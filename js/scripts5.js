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

//border and background color on hover

let squareDivs = document.getElementsByClassName("squares");
for(let squareDiv of squareDivs){
    squareDiv.onmouseover = handler;
}

function handler(event){
    if (event.type == 'mouseover') {
        document.createElement("hr");                
        event.target.style.backgroundColor = "plum";                 
    }
}
             
     
//reset button
function resetB(){
    let resetButton = document.getElementById("reset-btn");
    resetButton.addEventListener('click', function(event){
        document.getElementById("grid-container").innerHTML= "";
    });
}

resetB();


