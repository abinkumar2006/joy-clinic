window.onload = () => {

    setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    }, 1500);
    
    document.querySelectorAll(".counter")
    .forEach(counter => {
    
    let target = +counter.dataset.target;
    let count = 0;
    
    let update = () => {
    
    count += Math.ceil(target / 50);
    
    if(count >= target){
    count = target;
    }
    
    counter.innerText = count;
    
    if(count < target){
    requestAnimationFrame(update);
    }
    };
    
    update();
    
    });
    };
    
    function toggleTheme(){
    document.body.classList.toggle("dark");
    }
    
    function bookAppointment(){
    
    let name =
    document.getElementById("name").value;
    
    let phone =
    document.getElementById("phone").value;
    
    let reason =
    document.getElementById("reason").value;
    
    let text =
    `Appointment Request
    
    Name: ${name}
    Phone: ${phone}
    Reason: ${reason}`;
    
    window.open(
    "https://wa.me/919360394172?text=" +
    encodeURIComponent(text)
    );
    }