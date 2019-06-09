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
allDivs();


//creating an initial 16X16 grid
//creating 64 divs
//spread them out into an equal number of rows and columns