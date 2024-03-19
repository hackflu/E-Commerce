let toogleButton = document.querySelector("#menu");
let navbar = document.querySelector(".nav_sec-2");

let flag = 0;
toogleButton.addEventListener("click",function(){
    if(flag == 0){
        navbar.style.visibility = "visible";
        flag = 1;
    } else{
        navbar.style.visibility = "hidden";
        flag=0;
    }
})