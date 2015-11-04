jQuery(document).ready( function($) {

	whatSlider = function(num,e){					
		if(!sliding && !$(e).hasClass('active')){
			sliding = true;

			$(e).parents('.theTabs').find('.active').removeClass('active');
			$(e).addClass('active');

			jQuery('#what .slide.active').animate({left: '-100%'},350, function(){
				jQuery(this).css('left', '200%').removeClass('active');
			});
			jQuery('#what .slide').eq(num-1).css('left','100%').animate({left: '0%'},350).addClass('active');
			if((num+1) > 3){
				var futNum = 1
			}else{
				var futNum = num+1;
			}
			jQuery('#what .slide').eq(futNum-1).animate({left: '100%'},350).promise().done(function () {
		        sliding = false;
		    });
		}

		return false;
	}
}