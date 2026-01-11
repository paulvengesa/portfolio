// ======================= THEME TOGGLE =======================


const toggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved mode
if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark-theme");
    toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}else{
    toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

// Toggle mode
toggle.addEventListener("click", () =>{
    body.classList.toggle("dark-theme");

    if(body.classList.contains("dark-theme")){
        toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme","dark");
    }else{
        toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme","light");
    }
});


// =============== CONTACT FORM SUCCESS MESSAGE ===============

const contactForm = document.querySelector(".contact-form");

if(contactForm){
    contactForm.addEventListener("submit", function(){
        setTimeout(()=>{
            alert("Message Sent Successfully! I will get back to you soon.");
        },300);
    });
}



