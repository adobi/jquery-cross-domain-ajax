(function($) {
	
	$.fn.crossDomain = function(options) {
		
		options = $.extend({}, $.fn.crossDomain.defaults, options);
		
		if(isExternal(options.url)) {
			
		}
	};
	
	var isExternal = function(url) {
		
	}
	
	$.fn.crossDomain.defaults = {
		url: ''
	};
	
}) (jQuery);