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
	
	$("a[class=project_gallery]").fancybox({
		'opacity'			: true,
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'overlayOpacity'	: 0.9,
		'overlayColor'		: '#000',
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});	

	$("a#my_photo").fancybox({
		'overlayShow'	: false,
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic'
	});
	
	$("a.fancybox").attr('class', 'lightbox_1').fancybox();

});
