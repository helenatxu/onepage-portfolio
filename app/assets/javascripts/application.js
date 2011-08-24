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
		$('ul.myRoundabout').roundabout({shape:'lazySusan', clickToFocus: true, minScale:0.2, easing: 'easeOutInCirc', duration: 1200, tilt: -1.5});
	});

	$('ul.myRoundabout .roundabout-in-focus a').live('click',function(event){
		event.preventDefault();
		$.fancybox({'href':$(this).attr('href'), opacity: 0.9, overlayColor: '#000', transitionIn: 'elastic', transitionOut: 'elastic'});
	});

});