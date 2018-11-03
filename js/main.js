/* =================================
------------------------------------
	Game Warrior Template
	Version: 1.0
 ------------------------------------
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		}else{
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});


	/*------------------
		News Ticker
	--------------------*/
	$('.news-ticker').marquee({
	    duration: 10000,
	    //gap in pixels between the tickers
	    //gap: 200,
	    delayBeforeStart: 0,
	    direction: 'left',
	    duplicated: true
	});

})(jQuery);



console.log(start);

$(document).ready(()=>{
let Interval;

$("#start").click((event)=>{

			document.getElementById('start').classList.add("hidden");
      document.getElementById('stopp').classList.remove("hidden");


interval = setInterval(()=>{
const elapsed = Date.now() - start;
const min = Math.floor(elapsed / 60000);
const sek = Math.floor((elapsed - (min * 60000)) / 1000);
const milli = elapsed - ((min * 60000) + (sek * 1000))

$("#timer").html(min.toString().padStart(2, '0')+':'+sek.toString().padStart(2, '0')+':'+milli.toString().padStart(3, '0'));
},20);

});

$("#stopp").click((event)=>{
document.getElementById('start').classList.add("hidden");
document.getElementById('contender').classList.remove("hidden");

});
});
