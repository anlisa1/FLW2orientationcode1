// $("img").click(function(){
//    $("body").css("background-color","#e4edf2");      
// });
// $(".header").click(function(){
//    $("div").css("background-color","#a5c5d6");      
// });

let button= document.querySelector(".header");
let button2= document.querySelector(".stuff");
let header=document.querySelector("h1");
let div=document.querySelector("div");
let img1=document.querySelector(".cc");
let img=document.querySelector(".ww");

button.onclick=function(){
    header.innerHTML="Random Person's Restaurant";
    img.style.width="400px";  
    img1.style.width="600px";
};
button2.onclick=function(){
    header.innerHTML="Whoses Restaurant?";
    img.style.width="1000pxpx";  
};