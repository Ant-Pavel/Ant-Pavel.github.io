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
	var mob_menu = $('.page-header__mob-wrap');
	menu_toggler.click(function() {
		$(this).toggleClass('active');
		mob_menu.slideToggle();
	});
	//При клике вне тогглера и меню
	$(document).click(function(event) {
		if(menu_toggler.hasClass('active') && !mob_menu.is(event.target) 
				&& !menu_toggler.is(event.target) 
				&& mob_menu.has(event.target).length === 0 
				&& !$('.row--page-header').is(event.target)
			) {
			menu_toggler.removeClass('active');
			mob_menu.slideUp();
			//Закрытие вложенных пунктов меню
			// $('.page-header__menu-item').children('ul').removeClass('opened').slideUp(400, "linear");
			// $('.page-header__menu-item').children('.child-toggler').removeClass('child-toggler--rotate');
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
        $('.our-works__slides').slick('slickGoTo', $(this).index());
            // .closest('.slick-track').find('.slick-slide').removeClass('active').eq($(this).index()).addClass('active');
	    });
});
