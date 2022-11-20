let collapse = document.getElementsByClassName("collapsible");
let mum = document.getElementById("mum");
let topButton = document.getElementById("topBtn");
let largeScreen = window.matchMedia("(min-width: 768px)");


for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", change);
}

setInterval(swap, 5000);

window.onscroll = function() {scrollFunction()};

function change(){
    for (i = 0; i < collapse.length; i++){
        collapse[i].classList.remove("collapse-one");
        if(collapse[i].classList.contains("collapsed")){
            collapse[i].classList.remove("active");
            collapse[i].style.color = "#BBBCBA";
        }else{
            collapse[i].classList.add("active");
            collapse[i].style.color = "#111515";
        }
    }
}

function swap(){
    mum.classList.toggle("sam");
}

function scrollFunction(){
    if((document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) && largeScreen.matches) {
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}