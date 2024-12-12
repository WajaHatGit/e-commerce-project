let MainImg = document.querySelector("#Big-img");
let SmalImg = document.querySelectorAll(".small-img");
SmalImg[0].onclick = function (){
   MainImg.src = SmalImg[0].src;
};
SmalImg[1].onclick = function (){
    MainImg.src = SmalImg[1].src;
 }
 SmalImg[2].onclick = function (){
    MainImg.src = SmalImg[2].src;
 };SmalImg[3].onclick = function (){
    MainImg.src = SmalImg[3].src;
 }