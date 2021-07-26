$(function(){
  // ------start scroll menu---
$(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
 // ------end scroll menu---
//start mobile menu 
$('.menu__btn').click(function(){
	$(this).toggleClass('active');
	$('.menu').toggleClass('active');
})
$('.menu a').click(function(){
	$('.menu__btn').removeClass('active');
	$('.menu').removeClass('active');
})
//end mobile menu

//start slider init
$('.slider').slick({
  slidesToShow: 1,
  dots: true,
  prevArrow: false, 
  nextArrow: false
})
//end slider intit

});