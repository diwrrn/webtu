let burger = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
let links = document.querySelectorAll('.link');


burger.addEventListener("click", () => {
    nav.classList.toggle("toggler")

    links.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation = "";
        }else{
            link.style.animation = `animateLink 0.4s forwards ${index / 7 + 0.2}s `;
        }
    })
})