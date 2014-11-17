$(document).ready(function(){
	// scroll top menu
    $(window).scroll(function(){
        if ($(window).scrollTop() > 50) {
            $('header').addClass('scroll');
        }else {
            $('header').removeClass('scroll');
        }
    });

// gallery
	$('.gallery__radio').click(function(){
		var click_slide_num = $(this).attr('id');
		var current_slide_num = $('.gallery__radio_current').attr('id');
		if (current_slide_num != click_slide_num){
			$('#'+current_slide_num).removeClass('gallery__radio_current');
			$('.gallery__slide_'+current_slide_num).css('display', 'none');
			$('#'+click_slide_num).addClass('gallery__radio_current');
			$('.gallery__slide_'+click_slide_num).css('display', 'block');
		};
	});

// feedback btn
	$('#btn__feedback').click(function(){
		$('.map__feedback').css('display', 'block');
	});
	$('#btn__cancel').click(function(){
		$('.map__feedback').css('display', 'none');
	});
})



