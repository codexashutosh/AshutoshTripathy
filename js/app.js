window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

const navbar = document.querySelector('#navbar');
const scrollspy = new VanillaScrollspy(navbar, 2000, 'easeInOutQuint');
scrollspy.init();

const navSlide =() =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navbar ul");
    const navLinks = document.querySelectorAll(".navbar ul li");
    
    // toggle navbar
    burger.addEventListener('click',() => {
        nav.classList.toggle('sidebar-active');
        // animate links
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide(); 


