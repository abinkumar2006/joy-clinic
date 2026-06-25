window.addEventListener("load",()=>{

setTimeout(()=>{

document.querySelector(".loader")
.style.display="none";

},1500);

});

document.getElementById("themeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});
