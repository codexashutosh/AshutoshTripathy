const makeNavLinksSmooth = () => {
    const navLinks = document.querySelectorAll('.navlink');
    for (let n in navLinks) {
        if (navLinks.hasOwnProperty(n)) {
            navLinks[n].addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(navLinks[n].hash)
                .scrollIntoView({
                    behavior: "smooth"
                });
                document.querySelector(".burger").click();
            });
        }
    }
}

const spyScrolling = () => {
    const sections = document.querySelectorAll('.page');
    
    window.onscroll = () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        
        for ( let s in sections )
        if ( sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos ) {
            const id = sections[s].id;
            document.querySelector('.active').classList.remove('active');
            document.querySelector(`a[href*=${ id }]` ).classList.add('active');
        }
    } 
}

makeNavLinksSmooth( );
spyScrolling( );

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
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // burger animation
        burger.classList.toggle('toggle');
    });
}

// for loader
$('body').addClass('stop-scrolling');
$('body').bind('touchmove', function(e){e.preventDefault()});
$("#loading").show().delay(1500).fadeOut(
    function(){
        $('body').removeClass('stop-scrolling');
        $('body').unbind('touchmove');
    }
    );
    navSlide();
    // $('.see-desc').on('click',function(){
    //     $('.roles').slideToggle();  //swap the display of the main content with slide action
    //   });