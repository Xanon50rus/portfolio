$(document).ready(function(){

	const wrap = $('#wrapper'),
			info = $('#information'),
      btn = $('.menu__order-call, .menu__btn-phone'),
			infoBtn = $('.orange-btn'),
      modal = $('.cover, .modal, .content'),
			submit = $('#content__submit'),
			infoSubmit = $('#content__info-submit'),
			infoModal = $('.info-cover, .info-modal, .info-content'),
			login = $('#content__login'),
			phone = $('#content__phone'),
			infoLogin = $('#content__info-login'),
			infoPhone = $('#content__info-phone'),
			infoEmail = $('#content__info-email');

btn.on('click', () => {
  modal.fadeIn();
	$('.modal, .content').css('display', 'flex');
});

// close modal
$('.modal').click( () => {
  wrap.on('click', function(event) {
    let select = $('.content');
    if ($(event.target).closest(select).length)
      return;
    modal.fadeOut();
		login.val('');
		phone.val('');
    wrap.unbind('click');
  });
});

submit.click( () => {
	if (login.val() != 0 && phone.val().length === 15 ) {
		modal.fadeOut();
		login.val('');
		phone.val('');
	} else {
		alert('Вы не ввели данные!');
	}
});


infoBtn.on('click', () => {
  infoModal.fadeIn();
	$('.info-modal, .info-content').css('display', 'flex');
});

// close modal
$('.info-modal').click( () => {
  info.on('click', function(event) {
    let select = $('.info-content');
    if ($(event.target).closest(select).length)
      return;
    infoModal.fadeOut();
		login.val('');
		infoPhone.val('');
    info.unbind('click');
  });
});

infoSubmit.click( () => {
	if(infoLogin.val() != 0 && infoPhone.val().length === 15 &&
		 infoEmail.val().length != 0) {
		infoModal.fadeOut();
		infoLogin.val('');
		infoPhone.val('');
		infoEmail.val('');
	} else {
		alert('Вы не ввели данные!');
	}
});


$(function(){
  $("#content__phone").mask("8(999) 999-9999");
});

$(function(){
  $("#content__info-phone").mask("8(999) 999-9999");
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
	itemsMobile:       [1000, 1],
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
	$(menu).is(':visible') ? $('svg').css({'display': 'block'}) : $('svg').css({ 'display': 'none' });
	menu.toggle('slow');
	if ($(this).html() == '<i class="fas fa-times fa-3x"></i>'){
		function disableScroll() {
			if (window.addEventListener) // older FF
					window.addEventListener('DOMMouseScroll', preventDefault, false);
			document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
			window.onwheel = preventDefault; // modern standard
			window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
			window.ontouchmove  = preventDefault; // mobile
			document.onkeydown  = preventDefaultForScrollKeys;
		}
	} else {
		function enableScroll() {
				if (window.removeEventListener)
						window.removeEventListener('DOMMouseScroll', preventDefault, false);
				document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
				window.onmousewheel = document.onmousewheel = null;
				window.onwheel = null;
				window.ontouchmove = null;
				document.onkeydown = null;
				document.addEventListener('wheel', preventDefault, {passive: false});
		}
	}
	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
e = e || window.event;
if (e.preventDefault)
		e.preventDefault();
e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
			preventDefault(e);
			return false;
	}
}
});

//Ошибка какая-то
$("a[href^='#']").on("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top
			}, 777);
			e.preventDefault();
			return false;
	});
});
