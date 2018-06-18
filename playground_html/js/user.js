"use strict";
$(document).ready(function() {
	// // ********************
	// MatchHeight
	// // ********************
	$('.prod-type__rel-list').matchHeight();

	$('.product__main-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.product__nav-slider',
	});

	$('.product__nav-slider').slick({
		infinite: false,
		// variableWidth: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.product__main-slider',
		focusOnSelect: true,
		arrows: false,
		swipeToSlide: true,
		responsive: [
			{
			breakpoint: 991,
				settings: {
				slidesToShow: 5,
				}
			},
			{
			breakpoint: 767,
				settings: {
				slidesToShow: 4,
				}
			},
		]
	});

		const mob_menu = $('.page-header__mob-menu-wrap');
		mob_menu.css('max-height', document.documentElement.clientHeight);
		const menu_toggler = $('.page-header__toggler');
		// При клике по тогглеру
		menu_toggler.click(function(event) {
			event.stopPropagation();
			if( !menu_toggler.hasClass('page-header__toggler--active') ) {
				menu_toggler.addClass('page-header__toggler--active');
				mob_menu.addClass('page-header__mob-menu-wrap--visible');
				$('body').addClass('body--blocked');
			} else {
				menu_toggler.removeClass('page-header__toggler--active');
				mob_menu.removeClass('page-header__mob-menu-wrap--visible');
				$('body').removeClass('body--blocked');
				//Закрытие вложенных пунктов меню
				$('.cat-nav__item').children('ul').removeClass('opened').slideUp(400, "linear");
				$('.cat-nav__item').children('.child-toggler').removeClass('child-toggler--rotate');
			}
		});
		//При клике вне тогглера и меню
		$(document).click(function() {
			if(menu_toggler.hasClass('page-header__toggler--active') && !mob_menu.is(event.target) && mob_menu.has(event.target).length === 0) {
				menu_toggler.removeClass('page-header__toggler--active');
				mob_menu.removeClass('page-header__mob-menu-wrap--visible');
				$('body').removeClass('body--blocked');
				//Закрытие вложенных пунктов меню
				$('.cat-nav__item').children('ul').removeClass('opened').slideUp(400, "linear");
				$('.cat-nav__item').children('.child-toggler').removeClass('child-toggler--rotate');
			}
		});

	// Раскрытие вложенных пунктов в меню
		$('.cat-nav__item--has-child').append('<span class="child-toggler"><span class="child-toggler__arrow"></span></span>');
		$('.child-toggler').click(function() {
			const $navItem = $(this).closest('.cat-nav__item');  // Класс пункта меню
			const $navItemSublings = $navItem.siblings('li');
			const $sublist = $navItem.children('ul');
			const $sublistSublings = $navItemSublings.children('ul');

		     if (!$sublist.hasClass('opened')) {
		        $sublistSublings.removeClass('opened').slideUp(400, "linear");
		        $navItemSublings.children('.child-toggler').removeClass('child-toggler--rotate');

		        $sublist.addClass('opened').slideDown(400, "linear");
		        $(this).addClass('child-toggler--rotate');
		    } else {
		      $sublist.removeClass('opened').slideUp(400, "linear");
		      $(this).removeClass('child-toggler--rotate');
		  }
		});

});