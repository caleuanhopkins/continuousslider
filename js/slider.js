(function ($) {

    $.fn.contSlider = function (options) {
        options = $.extend({}, $.fn.contSlider.config, options);

        return this.each(function () {
            
            var elem = $(this);
            var tabs = $(this).find('.cs-slide-tabs');
            var slideZone = $(this).find('.cs-slides-area');
            var heights = [];

            slideZone.find(options.slideClass).each(function(i, obj){
            	heights[i] = obj.scrollHeight;
            	obj.classList.add('slide-pos');
            });

            if(options.liquidHeight){
	            slideZone.css('height', heights[0]);
	        }else{
	        	slideZone.css('height', options.slideHeight+'px');
	        }

	        tabs.find('a').click(function(){

	        	var num = $(this).parent().index();

				if(!options.sliding && !$(this).hasClass(options.activeTabClass.replace('.',''))){
					options.sliding = true;

					tabs.find(options.activeTabClass).removeClass(options.activeTabClass.replace('.',''));
					$(this).addClass(options.activeTabClass.replace('.',''));

					slideZone.find(options.activeSlideClass).animate({left: '-'+options.movementMaxDistance},options.animationDuration, function(){
						$(this).css(options.slideMovement, options.movementMaxDistance).removeClass(options.activeSlideClass.replace('.',''));
					});

					if(options.liquidHeight){
						slideZone.css('height', heights[num]);
					}

					slideZone.find(options.slideClass).eq(num).css(options.slideMovement,options.movementMaxDistance).animate({left: options.movementMinDistance},options.animationDuration).addClass(options.activeSlideClass.replace('.','')).promise().done(function () {
				        options.sliding = false;
				    });
				}

				return false;

			});

			return true;
        });
    };

    $.fn.contSlider.config = {
        sliding: false,
        animationDuration: 350,
        slideMovement: 'left',
        movementMaxDistance: '100%',
        movementMinDistance: '0%',
        slideClass: '.cs-slide',
        activeSlideClass: '.active',
        activeTabClass: '.active',
        liquidHeight: false,
        slideHeight: 300
    };

}(jQuery));