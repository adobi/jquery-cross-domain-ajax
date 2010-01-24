(function($) {
	
	$.fn.crossDomain = function(options) {
		
		options = $.extend({}, $.fn.crossDomain.defaults, options);
		
		return this.each(function() {
			
			var self = $(this);
			
			if(jQuery.trim(options.url)) {
				if(isExternal(options.url)) {
					
					var yql = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22"+
								encodeURIComponent(options.url)+"%22"+
								"&format="+options.format+
								"&callback=?";
					//console.log(yql);
					$.getJSON(yql, function(response) {
						self.html(filter(response.results[0]));
					});
					
				}
				else {
					self.load(options.url);
				}
			}
		});
	};
	
	var isExternal = function(url) {
		return /http:\/\/.*/.test(url);
	}
	
	var filter = function(data) {
		
	    data = data.replace(/<?\/body[^>]*>/g,'');
	    data = data.replace(/[\r|\n]+/g,'');
	    data = data.replace(/<--[\S\s]*?-->/g,'');
	    data = data.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/g,'');
	    data = data.replace(/<script[^>]*>[\S\s]*?<\/script>/g,'');
	    data = data.replace(/<script.*\/>/,'');
	    
	    return data;
		
	}
	
	$.fn.crossDomain.defaults = {
		url: '',
		format: 'xml'
	};
	
}) (jQuery);