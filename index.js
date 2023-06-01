let i1 = document.getElementById("input01");
let i2 = document.getElementById("input02");
let i3 = document.getElementById("input03");

let b1 = document.getElementById("button01");
let b2 = document.getElementById("button02");

let r1 = document.getElementById("results");


b2.addEventListener("click", manu);

function manu(){
    let a1 = Math.ceil(Math.random()*100);
    let a2 = Math.ceil(Math.random()*100);
    i1.value = a1;
    i2.value = a2;  
    i3.value = "";
    r1.textContent = "";
}

manu();

b1.addEventListener("click", function(){
    let a3 = parseInt(i3.value);

    if(parseInt(i1.value) + parseInt(i2.value) === a3){
        r1.textContent = "Congratulations! You got it Right!"
        r1.style.backgroundColor = "#18f03c";

    }
    else{
        r1.textContent = "Please Try Again"
        r1.style.backgroundColor = "#51415e";
    }
});
