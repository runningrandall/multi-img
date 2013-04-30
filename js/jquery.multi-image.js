(function( $ ) {
  $.fn.multiImage = function(options) {
  
  	//set some defaults
  	var settings = $.extend( {
      'small'         : '767', //handheld devices
      'medium' : '1023'//tablet type devices
    }, options);

    //now we determine viewport width
    var width = $(window).outerWidth(true);

    //loop through each item
    return this.each(function(){
    	
      console.log(width);

    	//get our alt and src attributes
    	var alt = $(this).data("alt");
    	var src = $(this).data("image");

    	//simply compary the width of the viewport to our settings, if they between our settins change the src
    	if(width <= settings.small){ //load smallest image
    		src = $(this).data("image-small");
    	}
    	else if(width <= settings.medium){ //load medium sized image
    		src = $(this).data("image-medium");
    	}

    	//now populate the html
    	$(this).html("<img src='" + src + "' alt='" + alt + "' />");

    });

  };
})( jQuery );