//creating one div
function allDivs(){
    for (i=0;i<100;i++){
        let div1 = document.createElement("div");
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
        div1.innerHTML = 1;
        document.getElementById("grid-container").appendChild(div1);
    }
}

function someDivs2(){
    for (i=0;i<56;i++){
        let div1 = document.createElement("div");
        div1.innerHTML = 1;
        document.getElementById("grid-container").appendChild(div1);
    }
}

function divs(){
    for (i=0;i<n;i++){
        let div1 = document.createElement("div");
        div1.innerHTML = 1;
        document.getElementById("grid-container").appendChild(div1);
    }      
}

let resetButton = document.getElementById("reset-btn");
function resetB(){
    resetButton.addEventListener('click', function(event){
        document.getElementById("grid-container").innerHTML= "";
    });
newGrid();
}

function newGrid(){
    let n = prompt("How many squares would you like each side of the new grid to have?");
    console.log(n);     
    for (i=0;i<64;i++){
        let div2 = document.createElement("div");
        div1.innerHTML = 1;
        document.getElementById("new-grid").appendChild(div2);   
    }
    let htmlStyles = window.getComputedStyle(document.querySelector("html"));
    n = parseInt(htmlStyles.getPropertyValue("--n"));
    document.documentElement.style.setProperty("--n", 6);
}
 

    


