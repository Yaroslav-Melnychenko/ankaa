$(document).ready(function() {

	var scrollTop = $(window).scrollTop();
	var windowHeight = $(window).height();

	//lock/unlock body scroll
	function lockBody() {
		if($(window).scrollTop()) {
		 	scrollTop = $(window).scrollTop();
		 	$('.wrapper').css({
		 		top: - (scrollTop)
		 	});
		}
		$('html,body').css({height: "100%", overflow: "hidden"});
	}
	function unlockBody() {
		$('html,body').css({height: "", overflow: ""});
		$('.wrapper').css({
			top: ''
		});
		window.scrollTo(0, scrollTop);
		window.setTimeout(function () {
			scrollTop = null;
		}, 0);
	}

	//tabs on JS
	$('.tab-toggle').on('click' , function() {

		$(this).closest('.tabs-header').find('.tab-toggle_active').removeClass('tab-toggle_active');
		$(this).addClass('tab-toggle_active');

		var dataTab = $(this).attr("data-tab");

		$(this).closest('.tabs-wrapper').find(".tab-content[data-tab]").removeClass('tab-content_active');
		$(this).closest('.tabs-wrapper').find(".tab-content[data-tab='"+dataTab+"']").addClass('tab-content_active');

		return false;
	});
	
	//object-fit polyfill
	objectFitImages('.cover-img .image');
	

	if(windowHeight >= 575) {
		$('#fullpage').fullpage({
			afterLoad: function(){
				if($('.section-home').hasClass('active')){
					$('.header').removeClass('header-visible');
				}else{
					$('.header').addClass('header-visible');
				};

				if($('.fp-section').hasClass('active')){
					$('.fp-section.active').addClass('animate-all');
				}
			},
		});

		$('#essence').fullpage({
			//Navigation
			menu: '#essence-nav',
			anchors:[
				'About', 
				'SwertiaChirata', 
				'BidensPilosa', 
				'LaminariaSaccharina', 
				'CaulerpaLentillifera', 
				'BellisPerennis', 
				'Niacinamide', 
				'Xylityglucoside', 
				'Xylitol', 
				'DipalmitoylHydroxyproline', 
				'MoreIngredients'
			],
			//navigation: true,
			scrollOverflow: true,
			afterLoad: function(){
				if($('.section-home').hasClass('active')){
					$('.header').removeClass('header-visible');
				}else{
					$('.header').addClass('header-visible');
				};
			},
		});
	}

	
	//stycky header
	$(window).on('scroll' , function(){
		var scrollTop = $(window).scrollTop();		
		if(scrollTop > 10) {
			$('.header').addClass('header-visible');
		}else{
			$('.header').removeClass('header-visible');
		}
	});

	if(scrollTop > 10) {
		$('.header').addClass('header-visible');
	}else{
		$('.header').removeClass('header-visible');
	};

	//menu
	$('.header-menu').on('click' , function() {
		$('.navigation').addClass('visible');
	});
	$('.navigation-close').on('click' , function() {
		$('.navigation').removeClass('visible');
	});


	// $('.accordion-header').on('click' , function(){
	// 	var body = $(this).closest('.accordion-item').find('.accordion-body');

	// 	$('.accordion-body').not(body).slideUp(300).closest('.accordion-item').removeClass('active');
	// 	body.slideToggle(300).closest('.accordion-item').toggleClass('active');
	// })

	//accordion
	$('.accordion-header').on('click' , function(){
		$(this).closest('.accordion-item').toggleClass('active');
		$(this).closest('.accordion-item').find('.accordion-body').slideToggle(300);
	})

	if($(".scrollable").length > 0) {
		$(".scrollable").mCustomScrollbar();
	}
	if($("select").length > 0) {
		$('select').selectize();
	}
}); 