"use strict";

$(document).ready(function() {
// // ********************
// Фиксированная шапка при прокрутке страницы
// // ********************
	const page_header = $('.page-header');
	if (page_header.length) {
		var scrollHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
		const page_header_height = page_header.outerHeight(true);

		$(window).on('scroll', function() {
			if ( ($(window).scrollTop() > 0) && (scrollHeight > 950) ) {
				page_header.addClass('page-header--scroll');
			} else {
				page_header.removeClass('page-header--scroll');
			}
		});
	};

	//Тогглер-гамбургер в меню в шапке
	var menu_toggler = $('.main-nav__toggler');
	var mob_menu_wrap = $('.page-header__mob-wrap');
	var pape_header_nav = $('.page-header__nav');
	menu_toggler.click(function() {
		$(this).toggleClass('active');
		mob_menu_wrap.slideToggle();
	});
	//При клике вне тогглера и меню
	$(document).click(function(event) {
		if(menu_toggler.hasClass('active') && !pape_header_nav.is(event.target) && pape_header_nav.has(event.target).length === 0 
			&& !menu_toggler.is(event.target) && menu_toggler.has(event.target).length === 0) {
			menu_toggler.removeClass('active');
			mob_menu_wrap.slideUp();
		}
	});

	$('.services__type').matchHeight();


	//Слайдер
	 $('.our-works__slides').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: "",
		nextArrow: "",
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
	 });

	 $('.our-works__control-left').click(function() {
		$('.our-works__slides').slick('slickPrev');
	 });

	 $('.our-works__control-right').click(function() {
		$('.our-works__slides').slick('slickNext');
	 });

 	    $('.our-works__tabs').on('click', '.our-works__tab:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active');
        // $('.our-works__slider.active').find('.our-works__slides').slick('unslick');
        $('.our-works__sliders').find('.our-works__slider').removeClass('active').eq($(this).index()).addClass('active');

			 $('.our-works__slides').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				prevArrow: "",
				nextArrow: "",
				dots: false,
				autoplay: true,
				autoplaySpeed: 3000,
				fade: true,
			 });
    });

	$('.js-scroll-to').on('click', function (e) {
	var id = $(this).attr('href'),
	    top = $(id).length && id !== '#' ? $(id).offset().top : 0;
		menu_toggler.removeClass('active');
		mob_menu_wrap.slideUp();
	e.preventDefault();

	if ($(window).width() < 768) {
	  $('body,html').animate({ scrollTop: top - 70 + 'px' }, 100);
	} else {
	  $('body,html').animate({ scrollTop: top - 95 + 'px' }, 700);
	}
	});
});
