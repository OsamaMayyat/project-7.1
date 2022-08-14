let div = document.getElementById("I-section4");
let btn = document.getElementById("bttun");
let span = document.getElementById("span");
let cont1 = document.getElementById("cont1");
let cont2 = document.getElementById("cont2");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn11 = document.getElementById("btn11");
let btn22 = document.getElementById("btn22");
let done1 = document.getElementById("done1");
let done2 = document.getElementById("done2");

function click1() {
    div.style.top = "20px";
    cont1.style.opacity ="1";
};
function click2() {
    div.style.top = "-100%";
};
function click3() {
    cont1.style.opacity = "0";
    cont1.style.display = "none";
};
function click4() {
    cont2.style.opacity = "0";
    cont2.style.display = "none";
};
function click5() {
    btn1.style.opacity = "0";
    btn2.style.opacity = "0";
    done1.style.opacity = "1";
    done1.style.display = "block";
};
function click6() {
    btn11.style.opacity = "0";
    btn22.style.opacity = "0";
    done2.style.opacity = "1";
    done2.style.display = "block";
};



