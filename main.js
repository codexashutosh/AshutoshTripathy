$(".navbar li").on("click", function() {
	$(".navbar li").removeClass("active");
	$(this).addClass("active");
});
$('.section1nav').on('click', function() {
	$(".sections").hide();
    $(".section1").show();
});
$('.section2nav').on('click', function() {
	$(".sections").hide();
    $(".section2").show();
});
$('#section2nav').on('click', function() {
	$('.section2nav').click();
});