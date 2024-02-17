"use strict"

$(document).ready(function() {
    // Работа скрытого меню 
    $('.list__item_menu-hide').on('click', function(e) {
        $(".list__item_menu-hide").not(this).removeClass('active');
        $(this).toggleClass('active');
        e.stopPropagation(); // Предотвращаем всплытие события
    });

    //Работа подскрытого меню в скрытом меню
    $('.sub-menu__list_contact li').on('click', function(e) {
        $('.sub-menu__list_contact li').not(this).removeClass('active');
        $(this).toggleClass('active');
        e.stopPropagation(); // Предотвращаем всплытие события, чтобы избежать воздействия на родительские элементы
    });

    // Закрыть все активные меню при клике вне их области
    $(document).on('click', function() {
        $('.list__item_menu-hide').removeClass('active');
    });
    
    // slick-слайдер
    $('.game__slick-galeri ').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrowLeft.svg" alt="prevArrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrowRight.svg" alt="prevArrow"></button>',
        speed: 500,
        dots: true
    });

    // плавная анимация при скролле
    $('a[href^="#"').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

    // работа меню-бургер
    $('.header__burger').on('click', function () {
        $('.header__burger').toggleClass('active');
        $('.navbar').toggleClass('active');
        $('.list__item').toggleClass('fadeDownList');
        $('body').toggleClass('lock');
    });

    //маска для номера
    $("input[name=phone]").mask("+7 999 999-99-99");

    //отправка на почту при помощи ajax
    $('#feedback__form').submit(function(e) {
        e.preventDefault();

        if($(this).valid()) {
            $('body').addClass('sending')
        } else {
            return
        }

        $.ajax({
            type: "POST",
            url: 'php/smart.php',
            data: $(this).serialize() 
        }).done(function() {
            $(this).find('input').val('');
            $('body').removeClass('sending');
            $("form").trigger("reset");
            alert('Письмо отправлено!');
        });

        return false
    });
});