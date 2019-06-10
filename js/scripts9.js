//creating one div
function allDivs(){
    for (i=0;i<100;i++){
        let div1 = document.createElement("div");
        div1.className = "squares";
        div1.innerHTML = 1;
        document.getElementById("grid-container").appendChild(div1);
   }
   let htmlStyles = window.getComputedStyle(document.querySelector("html"));
   let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
   document.documentElement.style.setProperty("--rowNum", 16);
   let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
   document.documentElement.style.setProperty("--colNum", 16);
          
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

//background color on hover, haven't figured the pixelated part out though (used border for now)

let squareDivs = document.getElementsByClassName("squares");
for(let squareDiv of squareDivs){
    squareDiv.onmouseover = handler;
}

function handler(event){
    if (event.type == 'mouseover') {                        
        event.target.style.backgroundColor = "plum";  
        event.target.style.border = "dotted";        
    }
}
             
     
//reset button to clear 
function resetB(){    
    let resetButton = document.getElementById("reset-btn");
    resetButton.addEventListener('click', function(event){        
        document.getElementById("grid-container").innerHTML= ""; 
        anyDivs();        
    }); 
}

resetB();

//create any number of divs depending on the value entered in the prompt

function anyDivs(n){
    n = prompt("How many squares should each side of the new grid have?");
        for (i=0;i<n;i++){
        let div1 = document.createElement("div");
        div1.className = "squares";
        div1.innerHTML = 1;                                    
    
        for(x=1;x<n;x++){
            let rows = document.createElement("div");
            rows.className = "squares";  
            rows.innerHTML = 1;
            document.getElementById("grid-container").appendChild(rows);       
        } 
    document.getElementById("grid-container").appendChild(div1);
    }    
    let htmlStyles = window.getComputedStyle(document.querySelector("html"));
    let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
    document.documentElement.style.setProperty("--rowNum", n);
    let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
    document.documentElement.style.setProperty("--colNum", n);
    n = rowNum;
    n = colNum;      
} 

//how to make the divs have a dynamic number of rows and columns



