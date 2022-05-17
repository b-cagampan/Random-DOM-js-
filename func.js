//Chaging Light Mode or Night Mode


let docs = document.body;
//Button
let l_btn = document.getElementById("l_btn");
let s_btn = document.getElementById("search-btn");
let s_Inp = document.getElementById("s_inp");

document.getElementById("l_btn").addEventListener("click", function(){
    if(l_btn.innerHTML === '🔆' && l_btn.style.backgroundColor === "black") {
        l_btn.innerHTML = "🌙";
        l_btn.style.backgroundColor = "white";
        l_btn.style.border = "2px solid black";
        s_btn.style.backgroundColor = "white";
        s_btn.style.border = "2px solid black";
        s_Inp.style.border = "2px solid black";
        docs.style.backgroundColor = "white";
    }
    //Change to Light Mode if its on Night Mode when onclick.
    else {
        l_btn.innerHTML = "🔆";
        l_btn.style.backgroundColor = "black"; 
        l_btn.style.borderColor = "white";
        s_btn.style.backgroundColor = "black";
        s_btn.style.borderBlockColor = "white";
        s_Inp.style.borderBlockColor = "black";
        docs.style.backgroundColor = "black";

    }
});

