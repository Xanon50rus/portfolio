$(document).ready(function(){

$(function(){
  $(".content__phone").mask("+7(999) 999-9999");
});

	// Находим блок карусели
	var carousel = $("#carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel({

	pagination: true,
  // Количество блоков на больших экранах
	items:             10,

	// 5 блоков на компьютерах (экран от 1400px до 901px)
	itemsDesktop:      [1920, 3],

	// 3 блока на маленьких компьютерах (экран от 900px до 601px)
	itemsDesktopSmall: [1200, 2],

	// // 2 элемента на планшетах (экран от 600 до 480 пикселей)
	// itemsTablet:       [600, 2],

	// Настройки для телефона отключены, в этом случае будут
	// использованы настройки планшета
	itemsMobile:       [990, 1],
});

  $('#js-prev').click(function () {

	// Запускаем перемотку влево
	carousel.trigger('owl.prev');

	return false;
});

// Вперед
// При клике на "Вперед"
$('#js-next').click(function () {

	// Запускаем перемотку вправо
	carousel.trigger('owl.next');

	return false;
});



$('#mobile-menu__button').click(function(){
	var menu = $('#mobile-menu');
	$(this).html(menu.is(':visible') ? '<i class="fas fa-bars fa-3x">' : '<i class="fas fa-times fa-3x"></i>');
	$(menu).is(':visible') ? $('header').css('flex-direction', 'row') : $('header').css('flex-direction', 'column');
	$(menu).is(':visible') ? $('.menu').css({'justify-content': 'space-around'}) : $('.menu').css({'justify-content': 'flex-start'});
	$(menu).is(':visible') ? $('.menu__phone-number').css({'margin-left': 'auto'}) : $('.menu__phone-number').css({'margin-left': '2000px'});
	$(menu).is(':visible') ? $('html').css('overflow-y', 'auto') : $('html').css('overflow-y', 'hidden');
	$(menu).is(':visible') ? $('body').css('overflow-y', 'auto') : $('body').css('overflow-y', 'hidden');
	menu.toggle('slow');
});

$('.mobile-menu__btn').on("click", function() {
	var menu = $('#mobile-menu');
	$('#mobile-menu__button').html(menu.is(':visible') ? '<i class="fas fa-bars fa-3x">' : '<i class="fas fa-times fa-3x"></i>');
	$(menu).is(':visible') ? $('header').css('flex-direction', 'row') : $('header').css('flex-direction', 'column');
	$(menu).is(':visible') ? $('.menu').css({'justify-content': 'space-around'}) : $('.menu').css({'justify-content': 'flex-start'});
	$(menu).is(':visible') ? $('.menu__phone-number').css({'margin-left': 'auto'}) : $('.menu__phone-number').css({'margin-left': '2000px'});
	$(menu).is(':visible') ? $('html').css('overflow-y', 'auto') : $('html').css('overflow-y', 'hidden');
	$(menu).is(':visible') ? $('body').css('overflow-y', 'auto') : $('body').css('overflow-y', 'hidden');
	menu.toggle('slow');
});
	//
	// $('.menu__button').on('click', function(e){
  // 	$('html,body').stop().animate({scrollTop: $(this.hash).offset().top - $('#mobile-menu').height()*1/1.2}, 1000);
  // 	e.preventDefault();
	// });
	//
	// $('.footer__menu-btn').on('click', function(e){
  // 	$('html,body').stop().animate({scrollTop: $(this.hash).offset().top + $('#mobile-menu').height()*3.3}, 1000);
  // 	e.preventDefault();
	// });
});
