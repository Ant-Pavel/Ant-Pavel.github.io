"use strict";

$(document).ready(function() {

	// // ********************
	// Карта
	// // ********************
    if ($('#place__map').length) {
      jQuery.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCeKwvwgWEqKsmFKcZQkLnLglTsjsxwb9k", function () {

	var popupContent = '<p class="map__popup-content">г. Калининград, ул. Ефремова</p>';
      // Initialize the map and the custom overlay.
      function initMap() {
        var map = new google.maps.Map(document.getElementById('place__map'), {
          zoom: 16,
          center: {lat: 54.689785, lng: 20.464642},
        });

        var marker = new google.maps.Marker(
        {
          position: {lat: 54.689785, lng: 20.464642},   
          map: map,
          title: 'г. Калининград, ул. Суворова, 54 "У", офисы № 218, 211.',

        });

        var infowindow = new google.maps.InfoWindow({
            content: popupContent,
        });

        ///infowindow.open(map, marker);

		marker.addListener('click', function() {
		    infowindow.open(map, marker);
		});
      }
      google.maps.event.addDomListener(window, 'load', initMap);

      })
    };

//Тогглер-гамбургер в меню в шапке
  const menu = $('.main-nav__wrapper');
  const menu_toggler = $('.main-nav__toggler');
  // При клике по тогглеру
  menu_toggler.click(function(event) {
    event.stopPropagation();
    if( !menu_toggler.hasClass('active') ) {
      menu_toggler.addClass('active');
      menu.slideDown();
    } else {
      menu_toggler.removeClass('active');
      menu.slideUp();
      //Закрытие вложенных пунктов меню
      $('.main-nav__item').children('ul').removeClass('opened').slideUp(400, "linear");
      $('.main-nav__item').children('.child-toggler').removeClass('child-toggler--rotate');
    }
  });

// Раскрытие вложенных пунктов в меню
  $('.main-nav__item--has-child').append('<span class="child-toggler"><span class="child-toggler__arrow"></span></span>');
  $('.child-toggler').click(function() {
    const $navItem = $(this).closest('.main-nav__item');  // Класс пункта меню
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

$(window).on('resize', function() {
  $('.main-nav__list-2lev').removeClass('opened').slideUp();
  $('.child-toggler').removeClass('child-toggler--rotate');
});




// // ********************
// Фиксированная шапка при прокрутке страницы
// // ********************




function fixHeader() { 
  var page_header = $('.page-header');
  if (window.matchMedia("(min-width: 992px)").matches) {
    var scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  var page_header_height = page_header.outerHeight(true);
  var header_menu_height = menu.outerHeight(true);
    $(window).on('scroll', function() {
        if ( ($(window).scrollTop() > (page_header_height - header_menu_height)) && (scrollHeight > 950) ) {
        menu.addClass('main-nav__wrapper--fixed');
        page_header.addClass('page-header--fixed');
        } else {
          menu.removeClass('main-nav__wrapper--fixed');
        page_header.removeClass('page-header--fixed');
        
      }
    });
  }
}
fixHeader();

$(window).on('resize', function() {
  fixHeader()
});

$('#slider-place').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: '<div class="slider-arrow slider-arrow--place slider-arrow--prev"></div>',
    prevArrow: '<div class="slider-arrow slider-arrow--place slider-arrow--next"></div>',
    responsive: [
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        }
      },
    ]
  });

$('#slider-reviews').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: '<div class="slider-arrow slider-arrow--reviews slider-arrow--prev"></div>',
    prevArrow: '<div class="slider-arrow slider-arrow--reviews slider-arrow--next"></div>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

$('#slider-programs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: '<div class="slider-arrow slider-arrow--programs slider-arrow--prev"></div>',
    prevArrow: '<div class="slider-arrow slider-arrow--programs slider-arrow--next"></div>',
    responsive: [
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

$('#slider-extra-programs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: '<div class="slider-arrow slider-arrow--programs slider-arrow--prev"></div>',
    prevArrow: '<div class="slider-arrow slider-arrow--programs slider-arrow--next"></div>',
    responsive: [
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

$('#slider-team').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: '<div class="slider-arrow slider-arrow--team slider-arrow--prev"></div>',
    prevArrow: '<div class="slider-arrow slider-arrow--team slider-arrow--next"></div>',
    fade: true,
    speed: 700,
  });

$('#slider-hero').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true,
    speed: 700,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    dotsClass: 'hero__dots-list container',
    appendDots: $('.hero__dots'),
  });


	$('.reasons__name').matchHeight();
  $('.program__name').matchHeight();
	$('.program__descr').matchHeight();

$(window).on('resize', function() {
  $('.reasons__name').matchHeight();
  $('.program__name').matchHeight();
  $('.program__descr').matchHeight();
}); 


  // // ********************
  // Чекбоксы
  // // ********************
  $('.field-check').click(function(event) {
    if ( $(this).find("input").prop('checked') === false  && 
        ( !$(this).find('a').is(event.target) ) && 
        ( !$(this).find("input").prop( "disabled") ) ) {
      $(this).addClass('field-check--checked');
      $(this).find('input').prop('checked', true);
    } else {
      $(this).removeClass('field-check--checked');
      $(this).find('input').prop('checked', false);
    }
  });

  $('.field-check').each(function() {
    if ( $(this).find('input[type="checkbox"]').prop( "checked" ) ) {
        $(this).addClass('field-check--checked');
    }

    if ( $(this).find('input[type="checkbox"]').prop( "disabled" ) ) {
        $(this).addClass('field-check--disabled');
    }
  });

  // // ********************
  // Радиокнопки
  // // ********************
  $('.field-radio').click(function() {
    if ( $(this).find('input[type="radio"]').prop('checked') === false && (!$(this).find("input").prop( "disabled")) ) {
      $(this).siblings('.field-radio').find('input[type="radio"]').prop('checked', false);
      $(this).siblings('.field-radio').removeClass('field-radio--checked');
      $(this).addClass('field-radio--checked');
      $(this).find('input').prop('checked');
    }
  });

  $('.field-radio').each(function() {
    if ( $(this).find('input[type="radio"]').prop('checked') === true ) {
        $(this).addClass('field-radio--checked');
    }

    if ( $(this).find('input[type="radio"]').prop( "disabled" ) ) {
        $(this).addClass('field-radio--disabled');
    }

  });


    var select = $('.content-editor a[href$=".bmp"], .content-editor a[href$=".gif"], .content-editor a[href$=".jpg"], .content-editor a[href$=".jpeg"], .content-editor a[href$=".png"], .content-editor a[href$=".BMP"], .content-editor a[href$=".GIF"], .content-editor a[href$=".JPG"], .content-editor a[href$=".JPEG"], .content-editor a[href$=".PNG"]');
    select.fancybox();

  document.querySelector('.field-file__input').onchange = function() {
    if (this.files[0]) // если выбрали файл
      $('.files__list').append('<span class="files__item">Прикрепленный файл: ' + this.files[0].name + '</span>');
  };

  $('.field-file__input').styler({
    'fileBrowse': 'Выберите файл',
  });

  $('.field-select__input').styler({});


  $('a[data-fancywhite]').fancybox({
       baseClass: "white-overlay",
  });



  $('.js-scroll-to').on('click', function (e) {

    var id = $(this).attr('href'),
        top = $(id).length && id !== '#' ? $(id).offset().top : 0;
    e.preventDefault();
    if ($(window).width() < 768) {
      $('body,html').animate({ scrollTop: top - 120 + 'px' }, 1000);
    } else {
      $('body,html').animate({ scrollTop: top - 120 + 'px' }, 1000);
    }
  });

});