// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
// require jquery_ujs
//= require_tree .

$(document).ready(function() {	

	$(function() {
		$('ul.myRoundabout').roundabout({
			shape:'lazySusan', 
			clickToFocus: true, 
			minScale:0.2, 
			easing: 'easeOutInCirc', 
			duration: 800, 
			tilt: -1.5,
			btnNext: '.button_prev',
			btnPrev: '.button_next'
		});
	});

	$('ul.myRoundabout .roundabout-in-focus a').live('click',function(event){
		event.preventDefault();
		$.fancybox({
			'href':$(this).attr('href'), 
			opacity: 0.9, 
			overlayColor: '#000', 
			transitionIn: 'elastic', 
			transitionOut: 'elastic'
		});
	});
	
	$('ul.myRoundabout li').hover(
	function () {
	$('img', this).fadeTo('normal', 0);
	},
	function () {
	$('img', this).fadeTo('normal', 1);
	}
	);

	// $(this).find(“a.thumb”).css({‘background-position’ : ‘center bottom’});

	// $('ul.myRoundabout li').hover(function() { //On hover...
	// 	var thumbOver = $(this).find("img").attr("src"); //Get image url and assign it to 'thumbOver'
	// 	//Set a background image(thumbOver) on the <a> tag - Set position to bottom
	// 	$(this).find("a.thumb").css({'background' : 'url(' + thumbOver + ') no-repeat center bottom'});
	// 
	// 	//Animate the image to 0 opacity (fade it out)
	// 	$(this).find("span").stop().fadeTo('normal', 0 , function() {
	// 		$(this).hide() //Hide the image after fade
	// 	});
	// } , function() { //on hover out...
	// 	//Fade the image to full opacity 
	// 	$(this).find("span").stop().fadeTo('normal', 1).show();
	// });
	
	// $(".button_thumb")
	// 	.css("opacity","0.0 !important")
	// 	.hover(function(){ $(this).css("opacity","1 !important"); }, 
	// 		function() { $(this).css("opacity","0.1 !important"); }
	// 		);
	
	// $('ul.myRoundabout .roundabout-in-focus a').live('click',function(event){
	// 	event.preventDefault();
	// 	$.fancybox({
	// 		'href':$(this).attr('href'), 
	// 		opacity: 0.9, 
	// 		overlayColor: '#000', 
	// 		transitionIn: 'elastic', 
	// 		transitionOut: 'elastic'
	// 	});
	// });

	});