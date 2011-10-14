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

	$('#slider1, #slider2, #slider3, #slider4').nivoSlider({
		effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
		slices: 1, // For slice animations
		boxCols: 8, // For box animations
		boxRows: 4, // For box animations
		animSpeed: 500, // Slide transition speed
		pauseTime: 3000, // How long each slide will show
		startSlide: 0, // Set starting Slide (0 index)
		directionNav: true, // Next & Prev navigation
		directionNavHide: true, // Only show on hover
		controlNav: true, // 1,2,3... navigation
		controlNavThumbs: true, // Use thumbnails for Control Nav
		controlNavThumbsFromRel: false, // Use image rel for thumbs
		controlNavThumbsSearch: '.png', // Replace this with...
		controlNavThumbsReplace: '-small.png', // ...this in thumb Image src
		keyboardNav: true, // Use left & right arrows
		pauseOnHover: true, // Stop animation while hovering
		manualAdvance: true, // Force manual transitions
		captionOpacity: 0.84, // Universal caption opacity
		prevText: 'Prev', // Prev directionNav text
		nextText: 'Next', // Next directionNav text
		beforeChange: function(){}, // Triggers before a slide transition
		afterChange: function(){}, // Triggers after a slide transition
		slideshowEnd: function(){}, // Triggers after all slides have been shown
		lastSlide: function(){}, // Triggers when last slide is shown
		afterLoad: function(){} // Triggers when slider has loaded
	});


	$('#slider1 .nivo-imageLink, #slider2 .nivo-imageLink,  #slider3 .nivo-imageLink,  #slider4 .nivo-imageLink').live('click',function(event){
		event.preventDefault();
		$.fancybox({
			'href':$(this).attr('href'), 
			opacity: 0.9, 
			overlayColor: '#000'
		});
	});


});