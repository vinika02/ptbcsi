(function($){
	var frontEndPanel = $('.front-end-panel');
	frontEndPanel.find('.front-end-trigger').on('click', function(){
		frontEndPanel.toggleClass('animate');
	});

	$('.front-end-option-colors > div').on('click', function(){
		if (!$(this).hasClass('active')) {$(this).addClass('active');}
		window.location.replace("http://ninzio.com/thebuilders/home/?color="+$(this).attr('data-color'));
	});

	$('.front-end-option-layout span').on('click', function(){
		if (!$(this).hasClass('active')) {$(this).addClass('active').siblings().removeClass('active');}
		window.location.replace("http://ninzio.com/thebuilders/boxed/?layout="+$(this).attr('data-layout'));
	});

	$('.demo-color2 #text-2 img').attr('src','http://ninzio.com/thebuilders/wp-content/uploads/2016/12/logo_footer2.png');
	$('.demo-color3 #text-2 img').attr('src','http://ninzio.com/thebuilders/wp-content/uploads/2016/12/logo_footer3.png');
	$('.demo-color4 #text-2 img').attr('src','http://ninzio.com/thebuilders/wp-content/uploads/2016/12/logo_footer4.png');
	$('.demo-color5 #text-2 img').attr('src','http://ninzio.com/thebuilders/wp-content/uploads/2016/12/logo_footer5.png');
	$('.demo-color6 #text-2 img').attr('src','http://ninzio.com/thebuilders/wp-content/uploads/2016/12/logo_footer6.png');
	$('.demo-color7 #text-2 img').attr('src','http://ninzio.com/thebuilders/wp-content/uploads/2016/12/logo_footer7.png');
	$('.demo-color8 #text-2 img').attr('src','http://ninzio.com/thebuilders/wp-content/uploads/2016/12/logo_footer8.png');

	var optionBoxed = $('.boxed-img-option');

	function boxedAlert(){
		if (!$('#wrap').hasClass('nz-boxed')) {
			$('.front-end-admin-alert').show();
			return;
		}
	}

	optionBoxed.find('li').on('click',function(){
		$(this).toggleClass('active').siblings().removeClass('active');
		boxedAlert();
	});

	// Boxed pattern option management
	optionBoxed.find('li.pattern-1').on('click',function(){
		$('html, #gen-wrap').css({
			'background-repeat': 'repeat',
			'background-attachment': 'normal',
			'background-color': '#333333',
			'background-image': 'url(http://ninzio.com/thebuilders/wp-content/uploads/2016/12/1-1.jpg)',
			'background-size': 'initial',
			'-webkit-background-size': 'initial',
		});
	});

	optionBoxed.find('li.pattern-2').on('click',function(){
		$('html, #gen-wrap').css({
			'background-repeat': 'repeat',
			'background-attachment': 'normal',
			'background-color': '#414953',
			'background-image': 'url(http://ninzio.com/thebuilders/wp-content/uploads/2016/12/2.png)',
			'background-size': 'initial',
			'-webkit-background-size': 'initial',
		});
	});

	optionBoxed.find('li.pattern-3').on('click',function(){
		$('html, #gen-wrap').css({
			'background-repeat': 'repeat',
			'background-attachment': 'normal',
			'background-color': '#333333',
			'background-image': 'url(http://ninzio.com/thebuilders/wp-content/uploads/2016/12/3.png)',
			'background-size': 'initial',
			'-webkit-background-size': 'initial',
		});
	});

	optionBoxed.find('li.pattern-4').on('click',function(){
		$('html, #gen-wrap').css({
			'background-repeat': 'repeat',
			'background-attachment': 'normal',
			'background-color': '#333333',
			'background-image': 'url(http://ninzio.com/thebuilders/wp-content/uploads/2016/12/4.png)',
			'background-size': 'initial',
			'-webkit-background-size': 'initial',
		});
	});

	optionBoxed.find('li.pattern-5').on('click',function(){
		$('html, #gen-wrap').css({
			'background-repeat': 'repeat',
			'background-attachment': 'normal',
			'background-color': '#fae6ce',
			'background-image': 'url(http://ninzio.com/thebuilders/wp-content/uploads/2016/12/5-1.jpg)',
			'background-size': 'initial',
			'-webkit-background-size': 'initial',
		});
	});

// Boxed image option management
	optionBoxed.find('li.image-1').on('click',function(){
		$('html, #gen-wrap').css({
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed',
			'background-size': 'cover',
			'-webkit-background-size': 'cover',
			'background-color': '#333333',
			'background-image': 'url(http://ninzio.com/thebuilders/wp-content/uploads/2016/12/1.jpg)'
		});
	});

	optionBoxed.find('li.image-2').on('click',function(){
		$('html, #gen-wrap').css({
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed',
			'background-size': 'cover',
			'-webkit-background-size': 'cover',
			'background-color': '#333333',
			'background-image': 'url(http://ninzio.com/thebuilders/wp-content/uploads/2016/12/2.jpg)'
		});
	});

	optionBoxed.find('li.image-3').on('click',function(){
		$('html, #gen-wrap').css({
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed',
			'background-size': 'cover',
			'-webkit-background-size': 'cover',
			'background-color': '#333333',
			'background-image': 'url(http://ninzio.com/thebuilders/wp-content/uploads/2016/12/3.jpg)'
		});
	});

	optionBoxed.find('li.image-4').on('click',function(){
		$('html, #gen-wrap').css({
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed',
			'background-size': 'cover',
			'-webkit-background-size': 'cover',
			'background-color': '#333333',
			'background-image': 'url(http://ninzio.com/thebuilders/wp-content/uploads/2016/12/4.jpg)'
		});
	});

	optionBoxed.find('li.image-5').on('click',function(){
		$('html, #gen-wrap').css({
			'background-repeat': 'no-repeat',
			'background-attachment': 'fixed',
			'background-size': 'cover',
			'-webkit-background-size': 'cover',
			'background-color': '#333333',
			'background-image': 'url(http://ninzio.com/thebuilders/wp-content/uploads/2016/12/5.jpg)'
		});
	});

})(jQuery);