(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

	// START MENU JS
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 50) {
			$('.main-nav').addClass('menu-shrink');
		} else {
			$('.main-nav').removeClass('menu-shrink');
		}
	});				
	// END MENU JS

    // Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
	});

	// Home Slider JS
	$('.home-slider').owlCarousel({
		items:1,
		loop:true,
		margin:0,
		nav: true,
		dots: true,
		smartSpeed: 1000,
		autoplay:false,
		autoplayTimeout:9000,
		autoplayHoverPause:true,
		navText: [
			"<i class='icofont-simple-left'></i>",
			"<i class='icofont-simple-right'></i>"
		],
	});

	// Testimonial Slider JS
	$('.testimonial-slider').owlCarousel({
		items:1,
		loop:true,
		margin:0,
		nav: true,
		dots: false,
		smartSpeed: 1000,
		animateOut: 'fadeOut',
		autoplay:false,
		autoplayTimeout:9000,
		autoplayHoverPause:true,
		navText: [
			"<i class='icofont-simple-left'></i>",
			"<i class='icofont-simple-right'></i>"
		],
	});
	
    // Search Box JS
    $('.search-toggle').addClass('closed');
    $('.search-toggle .search-icon').on('click', function(e) {
        if ($('.search-toggle').hasClass('closed')) {
        $('.search-toggle').removeClass('closed').addClass('opened');
        $('.search-toggle, .search-area').addClass('opened');
        $('#search-terms').focus();
        } else {
        $('.search-toggle').removeClass('opened').addClass('closed');
        $('.search-toggle, .search-area').removeClass('opened');
        }
	});

	// Slick Slider JS
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
		fade: true,
        asNavFor: '.slider-nav'
    });
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		focusOnSelect: true,
		prevArrow: false,
		nextArrow: false,
		centerMode: true,
		focusOnSelect: true,
		variableWidth: true,
		responsive: [
		    {
		        breakpoint: 3000,
		        setting: {
		            slidesToShow: 3
		        }
		    },
		    {
		        breakpoint: 1400,
		        setting: {
		            slidesToShow: 2
		        }

		    },
		    {
		        breakpoint: 800,
		        setting: {
		            slidesToShow: 1
		        }

		    }
		]
	});
	
	// Counter JS
	$('.counter').counterUp({
		delay: 50,
		time: 2000
	});

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Accordion JS
	$('.accordion > li:eq(0) .faq-head').addClass('active').next().slideDown();
	$('.accordion .faq-head').on('click', function(j) {
		var dropDown = $(this).closest('li').find('.faq-content');
		$(this).closest('.accordion').find('.faq-content').not(dropDown).slideUp(300);
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('.faq-head.active').removeClass('active');
			$(this).addClass('active');
		}
		dropDown.stop(false, true).slideToggle(300);
		j.preventDefault();
	});

	// Timer JS
	let getDaysId = document.getElementById('days');
	if(getDaysId !== null){
		
		const second = 1000;
		const minute = second * 60;
		const hour = minute * 60;
		const day = hour * 24;

		let countDown = new Date('July 30, 2020 00:00:00').getTime();
		setInterval(function() {
			let now = new Date().getTime();
			let distance = countDown - now;

			document.getElementById('days').innerText = Math.floor(distance / (day)),
			document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
		}, second);
	};

	// PRELOADER
	jQuery(window).on('load',function(){
		jQuery(".loader").fadeOut(500);
	});

	// Wow JS
	new WOW().init();

	// Back to top 
	$('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-hand-drawn-up"></i></div>');
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	}); 
	$('#toTop').on('click', function(){
		$("html, body").animate({ scrollTop: 0 }, 900);
		return false;
	});

	// Subscribe form
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
		formErrorSub();
		submitMSGSub(false, "Please enter your email correctly.");
		} else {
		// everything looks good!
		event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
		formSuccessSub();
		}
		else {
		formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
		$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
		$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
		var msgClasses = "validation-success";
		} else {
		var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	
	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});

}); 	
})(jQuery);

