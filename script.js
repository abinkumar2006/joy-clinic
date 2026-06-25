/* =====================================
   JOY CLINIC PREMIUM JAVASCRIPT
===================================== */

/* PRELOADER */

window.addEventListener("load", () => {

    const preloader =
    document.querySelector(".preloader");
    
    setTimeout(() => {
    
    preloader.style.opacity = "0";
    
    setTimeout(() => {
    
    preloader.style.display = "none";
    
    },500);
    
    },1200);
    
    });
    
    /* =====================================
       SMOOTH NAVBAR SCROLL EFFECT
    ===================================== */
    
    window.addEventListener("scroll", () => {
    
    const navbar =
    document.querySelector(".navbar");
    
    if(window.scrollY > 50){
    
    navbar.style.background =
    "rgba(255,255,255,.95)";
    
    navbar.style.boxShadow =
    "0 10px 30px rgba(0,0,0,.1)";
    
    }
    else{
    
    navbar.style.background =
    "rgba(255,255,255,.7)";
    
    navbar.style.boxShadow =
    "none";
    
    }
    
    });
    
    /* =====================================
       APPOINTMENT FORM
    ===================================== */
    
    const appointmentForm =
    document.getElementById("appointmentForm");
    
    appointmentForm.addEventListener(
    "submit",
    function(e){
    
    e.preventDefault();
    
    const name =
    this.querySelector(
    'input[type="text"]'
    ).value;
    
    const phone =
    this.querySelector(
    'input[type="tel"]'
    ).value;
    
    const issue =
    this.querySelector(
    'textarea'
    ).value;
    
    const whatsappMessage =
    
    `🏥 Joy Clinic Appointment Request
    
    👤 Name: ${name}
    
    📞 Phone: ${phone}
    
    📝 Concern:
    ${issue}
    
    Please confirm my appointment.`;
    
    const whatsappURL =
    `https://wa.me/9360394172?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(
    whatsappURL,
    "_blank"
    );
    
    alert(
    "Appointment request prepared. WhatsApp will open now."
    );
    
    this.reset();
    
    });
    
    /* =====================================
       COUNTER ANIMATION
    ===================================== */
    
    const counters =
    document.querySelectorAll(
    ".hero-stats h3"
    );
    
    const startCounter = (counter)=>{
    
    const target =
    counter.innerText
    .replace("+","")
    .replace("%","");
    
    let count = 0;
    
    const speed = 20;
    
    const updateCounter = ()=>{
    
    if(count < target){
    
    count +=
    Math.ceil(target / 50);
    
    counter.innerText =
    count;
    
    setTimeout(
    updateCounter,
    speed
    );
    
    }
    else{
    
    counter.innerText =
    counter.dataset.original;
    
    }
    
    };
    
    updateCounter();
    
    };
    
    counters.forEach(counter=>{
    
    counter.dataset.original =
    counter.innerText;
    
    });
    
    /* =====================================
       INTERSECTION OBSERVER
    ===================================== */
    
    const statsObserver =
    new IntersectionObserver(
    
    (entries)=>{
    
    entries.forEach(entry=>{
    
    if(entry.isIntersecting){
    
    counters.forEach(counter=>{
    
    startCounter(counter);
    
    });
    
    statsObserver.disconnect();
    
    }
    
    });
    
    },
    {
    threshold:0.5
    }
    );
    
    const heroStats =
    document.querySelector(
    ".hero-stats"
    );
    
    if(heroStats){
    
    statsObserver.observe(
    heroStats
    );
    
    }
    
    /* =====================================
       SCROLL REVEAL
    ===================================== */
    
    const revealElements =
    document.querySelectorAll(
    
    ".service-card,\
    .contact-card,\
    .timing-card,\
    .about-content,\
    .about-image,\
    .hero-left,\
    .hero-right"
    
    );
    
    const revealObserver =
    new IntersectionObserver(
    
    (entries)=>{
    
    entries.forEach(entry=>{
    
    if(entry.isIntersecting){
    
    entry.target.classList.add(
    "active"
    );
    
    }
    
    });
    
    },
    {
    threshold:0.15
    }
    );
    
    revealElements.forEach(el=>{
    
    el.classList.add(
    "hidden-element"
    );
    
    revealObserver.observe(el);
    
    });
    
    /* =====================================
       PARTICLES EFFECT
    ===================================== */
    
    const particleContainer =
    document.getElementById(
    "particles"
    );
    
    for(let i=0;i<40;i++){
    
    const particle =
    document.createElement("span");
    
    particle.classList.add(
    "particle"
    );
    
    particle.style.left =
    Math.random()*100+"%";
    
    particle.style.top =
    Math.random()*100+"%";
    
    particle.style.width =
    Math.random()*10+4+"px";
    
    particle.style.height =
    particle.style.width;
    
    particle.style.animationDuration =
    Math.random()*15+8+"s";
    
    particleContainer.appendChild(
    particle
    );
    
    }
    
    /* =====================================
       HERO FLOATING EFFECT
    ===================================== */
    
    document.addEventListener(
    "mousemove",
    (e)=>{
    
    const heroCard =
    document.querySelector(
    ".hero-card"
    );
    
    if(!heroCard) return;
    
    const x =
    (window.innerWidth/2 - e.pageX)
    /35;
    
    const y =
    (window.innerHeight/2 - e.pageY)
    /35;
    
    heroCard.style.transform =
    `rotateY(${x}deg)
     rotateX(${-y}deg)`;
    
    });
    
    /* =====================================
       ACTIVE NAV LINKS
    ===================================== */
    
    const sections =
    document.querySelectorAll(
    "section"
    );
    
    const navLinks =
    document.querySelectorAll(
    ".nav-links a"
    );
    
    window.addEventListener(
    "scroll",
    ()=>{
    
    let current = "";
    
    sections.forEach(section=>{
    
    const sectionTop =
    section.offsetTop - 200;
    
    if(
    scrollY >= sectionTop
    ){
    
    current =
    section.getAttribute("id");
    
    }
    
    });
    
    navLinks.forEach(link=>{
    
    link.classList.remove(
    "active-link"
    );
    
    if(
    link.getAttribute("href")
    === "#" + current
    ){
    
    link.classList.add(
    "active-link"
    );
    
    }
    
    });
    
    });
    
    /* =====================================
       FLOATING BUTTON PULSE
    ===================================== */
    
    setInterval(()=>{
    
    document
    .querySelectorAll(
    ".floating-call,.floating-whatsapp"
    )
    .forEach(btn=>{
    
    btn.animate(
    
    [
    {
    transform:"scale(1)"
    },
    {
    transform:"scale(1.15)"
    },
    {
    transform:"scale(1)"
    }
    ],
    
    {
    duration:1200
    }
    
    );
    
    });
    
    },3000);
    
    /* =====================================
       SCROLL TO TOP BUTTON
    ===================================== */
    
    const topButton =
    document.createElement("button");
    
    topButton.innerHTML =
    "↑";
    
    topButton.classList.add(
    "scroll-top"
    );
    
    document.body.appendChild(
    topButton
    );
    
    window.addEventListener(
    "scroll",
    ()=>{
    
    if(window.scrollY > 500){
    
    topButton.style.opacity = "1";
    topButton.style.visibility =
    "visible";
    
    }
    else{
    
    topButton.style.opacity = "0";
    topButton.style.visibility =
    "hidden";
    
    }
    
    });
    
    topButton.addEventListener(
    "click",
    ()=>{
    
    window.scrollTo({
    
    top:0,
    behavior:"smooth"
    
    });
    
    });
    
    /* =====================================
       GREETING BASED ON TIME
    ===================================== */
    
    const hour =
    new Date().getHours();
    
    let greeting = "";
    
    if(hour < 12){
    
    greeting =
    "Good Morning";
    
    }
    else if(hour < 17){
    
    greeting =
    "Good Afternoon";
    
    }
    else{
    
    greeting =
    "Good Evening";
    
    }
    
    console.log(
    `${greeting} Welcome to Joy Clinic`
    );
    
    /* =====================================
       SERVICE CARD HOVER EFFECT
    ===================================== */
    
    document
    .querySelectorAll(
    ".service-card"
    )
    .forEach(card=>{
    
    card.addEventListener(
    "mousemove",
    (e)=>{
    
    const rect =
    card.getBoundingClientRect();
    
    const x =
    e.clientX - rect.left;
    
    const y =
    e.clientY - rect.top;
    
    card.style.background =
    `radial-gradient(
    circle at ${x}px ${y}px,
    rgba(106,27,154,.12),
    white 70%
    )`;
    
    });
    
    card.addEventListener(
    "mouseleave",
    ()=>{
    
    card.style.background =
    "#fff";
    
    });
    
    });
    
    /* =====================================
       ONLINE STATUS
    ===================================== */
    
    window.addEventListener(
    "offline",
    ()=>{
    
    alert(
    "Internet connection lost."
    );
    
    });
    
    window.addEventListener(
    "online",
    ()=>{
    
    alert(
    "Internet connection restored."
    );
    /* FAQ */

document.querySelectorAll(
   ".faq-question"
   ).forEach(button=>{
   
   button.addEventListener(
   "click",
   ()=>{
   
   const answer =
   button.nextElementSibling;
   
   answer.style.display =
   answer.style.display === "block"
   ? "none"
   : "block";
   
   });
   
   });
   
   /* TESTIMONIAL SLIDER */
   
   const testimonials =
   document.querySelectorAll(
   ".testimonial"
   );
   
   let testimonialIndex = 0;
   
   setInterval(()=>{
   
   testimonials[
   testimonialIndex
   ].classList.remove(
   "active-testimonial"
   );
   
   testimonialIndex++;
   
   if(
   testimonialIndex >= testimonials.length
   ){
   
   testimonialIndex = 0;
   
   }
   
   testimonials[
   testimonialIndex
   ].classList.add(
   "active-testimonial"
   );
   
   },4000);
   
   /* DARK MODE */
   
   const themeToggle =
   document.getElementById(
   "themeToggle"
   );
   
   themeToggle.addEventListener(
   "click",
   ()=>{
   
   document.body.classList.toggle(
   "dark-mode"
   );
   
   });
   
   /* SAVE THEME */
   
   if(
   localStorage.getItem("theme")
   ==="dark"
   ){
   
   document.body.classList.add(
   "dark-mode"
   );
   
   }
   
   themeToggle.addEventListener(
   "click",
   ()=>{
   
   if(
   document.body.classList.contains(
   "dark-mode"
   )
   ){
   
   localStorage.setItem(
   "theme",
   "dark"
   );
   
   }
   else{
   
   localStorage.setItem(
   "theme",
   "light"
   );
   
   }
   
   });
    });
    
    /* =====================================
       END OF SCRIPT
    ===================================== */
