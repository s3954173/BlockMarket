const parallax = document.getElementById("parallax");
const parallax2 = document.getElementById("parallax2");
const parallax3 = document.getElementById("parallax3");

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
   
})