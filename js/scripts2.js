function createRows (n){
    n = prompt("Please enter the number of squares you would like in the grid you would like to create");
        for(i=0;i<n;i++){
        let div1 = document.createElement("div");
        div1.innerHTML = 1;
        document.getElementById("grid-container").appendChild(div1);
    }    
}
createRows();


//this takes n and divides it by 4. If n is 64, we get 4 columns with 16 rows. 
//If we remove styling, we get one column with 64 rows.


