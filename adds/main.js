;$(function(){
	/*'use strict';*/
	var sidebar = $('#sidebar'),
		mask=$('.mask'),
		photo = $('#test_photo'),
		backbutton = $('.back-to-top'),
		sidebar_trigger = $('#sidebar_trigger');
	
	sidebar_trigger.on('click',function(){
		mask.fadeIn();
		sidebar.css('right',0);
	})
	mask.on('click',function(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	})
	
	backbutton.on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},800)
	})
	
	$(window).on('scroll',function(){
		if ($(window).scrollTop()>$(window).height()) {
			backbutton.fadeIn();
		} else{
			backbutton.fadeOut();
		}
	})
	
	$(window).trigger('scroll');
	
	//photo.on('click',test());
	
	function test(){
		console.log('photo_test');
	}

	//假设我加了一些东西
})

