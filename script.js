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
const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

let target =
+counter.getAttribute("data-target");

let count = 0;

let update = ()=>{

count += Math.ceil(target/60);

if(count > target){
count = target;
}

counter.innerText = count;

if(count < target){
requestAnimationFrame(update);
}

};

update();

});

window.addEventListener("scroll",()=>{

document
.querySelectorAll(".reveal")
.forEach(el=>{

const top =
el.getBoundingClientRect().top;

if(top < window.innerHeight-100){

el.classList.add("active");

}

});

});
