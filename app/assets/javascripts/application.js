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
	
	$(window).load(function() {
	    $('#slider1').nivoSlider({
	        effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
	        // slices: 15, // For slice animations
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
	        manualAdvance: false, // Force manual transitions
	        captionOpacity: 0.8, // Universal caption opacity
	        prevText: 'Prev', // Prev directionNav text
	        nextText: 'Next', // Next directionNav text
	        beforeChange: function(){}, // Triggers before a slide transition
	        afterChange: function(){}, // Triggers after a slide transition
	        slideshowEnd: function(){}, // Triggers after all slides have been shown
	        lastSlide: function(){}, // Triggers when last slide is shown
	        afterLoad: function(){} // Triggers when slider has loaded
	    });
	});
	
	$(window).load(function() {
	    $('#slider2').nivoSlider({
	        effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
	        // slices: 15, // For slice animations
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
	        manualAdvance: false, // Force manual transitions
	        captionOpacity: 0.8, // Universal caption opacity
	        prevText: 'Prev', // Prev directionNav text
	        nextText: 'Next', // Next directionNav text
	        beforeChange: function(){}, // Triggers before a slide transition
	        afterChange: function(){}, // Triggers after a slide transition
	        slideshowEnd: function(){}, // Triggers after all slides have been shown
	        lastSlide: function(){}, // Triggers when last slide is shown
	        afterLoad: function(){} // Triggers when slider has loaded
	    });
	});
	
	$(window).load(function() {
	    $('#slider3').nivoSlider({
	        effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
	        // slices: 15, // For slice animations
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
	        manualAdvance: false, // Force manual transitions
	        captionOpacity: 0.8, // Universal caption opacity
	        prevText: 'Prev', // Prev directionNav text
	        nextText: 'Next', // Next directionNav text
	        beforeChange: function(){}, // Triggers before a slide transition
	        afterChange: function(){}, // Triggers after a slide transition
	        slideshowEnd: function(){}, // Triggers after all slides have been shown
	        lastSlide: function(){}, // Triggers when last slide is shown
	        afterLoad: function(){} // Triggers when slider has loaded
	    });
	});
	
	$(window).load(function() {
	    $('#slider4').nivoSlider({
	        effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
	        // slices: 15, // For slice animations
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
	        manualAdvance: false, // Force manual transitions
	        captionOpacity: 0.8, // Universal caption opacity
	        prevText: 'Prev', // Prev directionNav text
	        nextText: 'Next', // Next directionNav text
	        beforeChange: function(){}, // Triggers before a slide transition
	        afterChange: function(){}, // Triggers after a slide transition
	        slideshowEnd: function(){}, // Triggers after all slides have been shown
	        lastSlide: function(){}, // Triggers when last slide is shown
	        afterLoad: function(){} // Triggers when slider has loaded
	    });
	});
	


	$('#slider1 .nivo-imageLink').live('click',function(event){
		event.preventDefault();
		$.fancybox({
			'href':$(this).attr('href'), 
			opacity: 0.9, 
			overlayColor: '#000'
		});
	});

	// $(function() {
	// 	$('ul.myRoundabout').roundabout({
	// 		shape:'lazySusan', 
	// 		clickToFocus: true, 
	// 		minScale:0.2, 
	// 		easing: 'easeOutInCirc', 
	// 		duration: 800, 
	// 		tilt: -1.5,
	// 		btnNext: '.button_prev',
	// 		btnPrev: '.button_next'
	// 	});
	// });
	// 
	// $('ul.myRoundabout .roundabout-in-focus a').live('click',function(event){
	// 	event.preventDefault();
	// 	$.fancybox({
	// 		'href':$(this).attr('href'), 
	// 		opacity: 0.9, 
	// 		overlayColor: '#000'
	// 	});
	// });
	
	// $(document).ready(function() {
	// 	$('.roundabout-in-focus a img').hover(function() {
	// 		grayscale( $(this) );
	// 	}, function() {
	// 		grayscale.reset( $(this) );
	// 	});
	// 	grayscale.prepare( $('.roundabout-in-focus a img') );
	// });
	
	// $('ul.myRoundabout li').hover(
	// function () {
	// $('img', this).fadeTo('normal', 0.5);
	// },
	// function () {
	// $('img', this).fadeTo('normal', 1);
	// }
	// );

	});