window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
$(".navbar li").on("click", function() {
	$(".navbar button").addClass("collapsed");
	$(".navbar button").attr("aria-expanded",false);
	$(".navbar .navbar-collapse").removeClass("show");
});
$(function(){
  $('.banner, .aboutme').css({ height: $(window).innerHeight() });
  $(window).resize(function(){
    $('.banner, .aboutme').css({ height: $(window).innerHeight() });
  });
});