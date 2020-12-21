window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
$(".navbar li").on("click", function() {
	$(".navbar button").addClass("collapsed");
	$(".navbar button").attr("aria-expanded",false);
	$(".navbar .navbar-collapse").removeClass("show");
});
$(function(){
  $('.banner').css({ height: $(window).innerHeight() });
  $(window).resize(function(){
    $('.banner').css({ height: $(window).innerHeight() });
  });
});
$(function(){
  $('.aboutme').css({ height: $(window).innerHeight() });
  $(window).resize(function(){
    $('.aboutme').css({ height: $(window).innerHeight() });
  });
});
let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove',cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}