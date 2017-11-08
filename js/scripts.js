(function ($, root, undefined) {
	
	$(function () {
		
		$(window).on('scroll', function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 50) {
				$('#header').addClass('fixed');
			} else {
				$('#header').removeClass('fixed');
			}
		});
	});
	
})(jQuery, this);
