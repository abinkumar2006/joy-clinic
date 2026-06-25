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
function bookAppointment(){

let name =
document.getElementById(
"patientName"
).value;

let phone =
document.getElementById(
"patientPhone"
).value;

let reason =
document.getElementById(
"patientReason"
).value;

let text =

`🏥 JOY CLINIC APPOINTMENT

Patient Name: ${name}

Phone Number: ${phone}

Reason:
${reason}`;

window.open(

`https://wa.me/919360394172?text=${encodeURIComponent(text)}`,

"_blank"

);

}let slides =
document.querySelectorAll(
".testimonial"
);

let current = 0;

setInterval(()=>{

slides[current]
.classList.remove(
"active-slide"
);

current++;

if(current >= slides.length){

current = 0;

}

slides[current]
.classList.add(
"active-slide"
);

},4000);

window.addEventListener(
"scroll",
()=>{

let winScroll =
document.documentElement
.scrollTop;

let height =

document.documentElement
.scrollHeight -

document.documentElement
.clientHeight;

let scrolled =
(winScroll/height)*100;

document.getElementById(
"progressBar"
).style.width =
scrolled + "%";

});
});

});
