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
	// $("a[class=project_gallery]").fancybox({
		// 	transition:'elastic', 
		// 	speed:500, 
		// 	opacity: 0.9, 
		// 	slideshow:true,
		// 	slideshowSpeed: 5000, 
		// 	slideshowAuto: true,
		// 	current: "image {current} of {total}",
		// 	overlayClose: true,
		// 	maxWidth: "900px",
		// 	scalePhotos: true,
		// 	});

		$("a[class=project_gallery]").fancybox({opacity: 0.9, overlayColor: '#000', transitionIn: 'elastic', transitionOut: 'elastic'});
		
		var loadGlass = 1;
		$('a.project_gallery img').hover(function(){
			if(loadGlass == 1) {
				$('body').prepend('<img id="magnify" style="position: absolute;" src="/assets/elements/magnify.png" alt="" width="32" height="32" />');
			}
			var p = $(this);
			var position = p.position();
			$('img#magnify').css({'top' : position.top+20, 'left' : position.left+20});
			$('img#magnify').show();
		},function(){
			$('img#magnify').hide();
			loadGlass = 2;
		});

	});
