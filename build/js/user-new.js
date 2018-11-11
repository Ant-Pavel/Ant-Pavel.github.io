'use strict';

jQuery(document).ready(function() {

  // video iframe settings for slider
    var slideWrapper = jQuery(".hero__slider"),
    iframes = slideWrapper.find('iframe');

  // POST commands to YouTube API
  function postMessageToPlayer(player, command) {
    if (player == null || command == null) return;
    player.contentWindow.postMessage(JSON.stringify(command), "*");
  }

  // When the slide is changing
  function playPauseVideo(slick, control) {
    var currentSlide, slideType, startTime, player, video;
    
    currentSlide = slick.find(".slick-current");
    slideType = currentSlide.data("slide-type");;
    player = currentSlide.find("iframe").get(0);
    startTime = currentSlide.data("video-start");

    if (slideType === "youtube") {
      switch (control) {
        case "play":
          postMessageToPlayer(player, {
            "event": "command",
            "func": "mute"
          });
          postMessageToPlayer(player, {
            "event": "command",
            "func": "playVideo"
          });
          break;
        case "pause":
          postMessageToPlayer(player, {
            "event": "command",
            "func": "pauseVideo"
          });
          break;
      }
    }
    else if (slideType === "video") {
      video = currentSlide.children("video").get(0);
      if (video != null) {
        if (control === "play"){
          video.play();
        } else {
          video.pause();
        }
      }
    }
  }

  slideWrapper.on("init", function(slick){
    slick = jQuery(slick.currentTarget);
    setTimeout(function(){
      playPauseVideo(slick,"play");
    }, 1000);
  });
  slideWrapper.on("beforeChange", function(event, slick) {
    slick = jQuery(slick.$slider);
    playPauseVideo(slick,"pause");
  });
  slideWrapper.on("afterChange", function(event, slick) {
    slick = jQuery(slick.$slider);
    playPauseVideo(slick,"play");
  });


  slideWrapper.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: '<div class="slider-arrow slider-arrow--hero slider-arrow--prev"></div>',
    prevArrow: '<div class="slider-arrow slider-arrow--hero slider-arrow--next"></div>',
    // responsive: [
    //   {
    //     breakpoint: 719,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       fade: true,
    //     }
    //   },
    // ]
  });

  jQuery('.design__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: '<div class="slider-arrow slider-arrow--hero slider-arrow--prev"></div>',
    prevArrow: '<div class="slider-arrow slider-arrow--hero slider-arrow--next"></div>',
    // responsive: [
    //   {
    //     breakpoint: 719,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       fade: true,
    //     }
    //   },
    // ]
  });

  jQuery('.item-article .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: '<div class="slider-arrow slider-arrow--hero slider-arrow--prev"></div>',
    prevArrow: '<div class="slider-arrow slider-arrow--hero slider-arrow--next"></div>',
    // responsive: [
    //   {
    //     breakpoint: 719,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       fade: true,
    //     }
    //   },
    // ]
  });

  if (jQuery('#hero__map').length) {
    jQuery.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCeKwvwgWEqKsmFKcZQkLnLglTsjsxwb9k", function () {

    var popupContent = '<p class="map__popup-content">г. Калининград, ул. Ефремова</p>';
    // Initialize the map and the custom overlay.
    function initMap() {
      var map = new google.maps.Map(document.getElementById('hero__map'), {
        zoom: 16,
        center: {lat: 54.689785, lng: 20.464642},
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
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

  if (jQuery('#contacts__map').length) {
    jQuery.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCeKwvwgWEqKsmFKcZQkLnLglTsjsxwb9k", function () {

    var popupContent = '<p class="map__popup-content">г. Калининград, ул. Ефремова</p>';
    // Initialize the map and the custom overlay.
    function initMap() {
      var map = new google.maps.Map(document.getElementById('contacts__map'), {
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

});