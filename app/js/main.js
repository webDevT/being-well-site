$(function(){

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