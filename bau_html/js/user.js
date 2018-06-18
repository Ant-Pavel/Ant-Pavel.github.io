"use strict";
$(document).ready(function() {
    // // ********************
    // Слайдер
    // // ********************
    $('#cascade-slider').cascadeSlider({});

	$('.field-select__input').on('change', function() {
		var val = $(this).children("option").filter(":selected").text();
	$('.field-select__fake-option .fake-text').html(val);
	});

 });