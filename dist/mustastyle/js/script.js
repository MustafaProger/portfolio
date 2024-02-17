"use strict"

$(document).ready(function () {

    // создание невидимого меню для контактов
    $('.contact').on('click', function () {
        $('.contact').toggleClass('show_contact');
    });

    // плавная анимация при скролле
    $('a[href^="#"').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

    //появление скрытого navbar при нажатии на бургер
    //анимация на список ul
    $('.burger__menu').on('click', function () {
        $('.burger__menu').toggleClass('active');
        $('.navbar').toggleClass('active');
        $('.list__item').toggleClass('fadeindown');
        $('body').toggleClass('lock');
    });

    //работа с slick-слайдер
    $('.carousel__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrowLeft.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrowRight.svg"></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 618,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    });

    //работы с формами
    $('ul.tabs__caption').each(function (i) {
        var storage = localStorage.getItem('tab' + i);
        if (storage) {
            $(this).find('li').removeClass('active').eq(storage).addClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(storage).addClass('active');
        }
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        var ulIndex = $('ul.tabs__caption').index($(this).parents('ul.tabs__caption'));
        localStorage.removeItem('tab' + ulIndex);
        localStorage.setItem('tab' + ulIndex, $(this).index());
    });

    function active_text_about_section(btn, active, disactive) {
        $(btn).on('click', function () {
            $(active).addClass('active');
            $(disactive).removeClass('active');
        });
    }

    active_text_about_section('.consultation__btn', '.text_about_section-consultation', '.text_about_section-make-order')
    active_text_about_section('.make-order__btn', '.text_about_section-make-order', '.text_about_section-consultation')

    // Проверяем, была ли уже сохранена информация о выбранной секции
    var selectedSection = localStorage.getItem('selectedSection');

    // Если есть сохраненная информация, активируем соответствующую секцию
    if (selectedSection === 'make-order') {
        $('.text_about_section-make-order').addClass('active');
        $('.text_about_section-consultation').removeClass('active');
    } else {
        // По умолчанию активируем секцию консультации
        $('.text_about_section-consultation').addClass('active');
        $('.text_about_section-make-order').removeClass('active');
    };

    $('.consultation__btn').on('click', function () {
        // Сохраняем выбор секции в localStorage
        localStorage.setItem('selectedSection', 'consultation');

        $('.text_about_section-consultation').addClass('active');
        $('.text_about_section-make-order').removeClass('active');
    });

    $('.make-order__btn').on('click', function () {
        // Сохраняем выбор секции в localStorage
        localStorage.setItem('selectedSection', 'make-order');

        $('.text_about_section-make-order').addClass('active');
        $('.text_about_section-consultation').removeClass('active');
    });

    //маска для номера
    $("input[name=phone]").mask("+7 999 999-99-99");

    //валидация формы
    function validateForm(item) {
        $(item).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: "Введите свое имя",
                    minlength: jQuery.validator.format('Введите минимум {0} символов')
                },
                email: {
                    required: "Введите свой адрес почты", 
                    email: "Неправильно введена почта"
                },
                phone: "Введите свой номер телефона",

            },
        });
    };
    validateForm(".consultation form");
    validateForm(".make-order form");

    //отправка на почту при помощи ajax
    function emailAjax(item, namephp) {
        $(item).submit(function(e) {
            e.preventDefault();
    
            if($(this).valid()) {
                $('body').addClass('sending')
            } else {
                return
            }
    
            $.ajax({
                type: "POST",
                url: namephp,
                data: $(this).serialize() 
            }).done(function() {
                $(this).find('input').val('');
                $('body').removeClass('sending');
                $("form").trigger("reset");
                // alert('Письмо отправлено!');
                $('overlay').fadeIn('slow');
                $('body').addClass('sent');
            });

            return false
        });
    
    }
    emailAjax('.consultation', 'php/consultation/consultation.php')
    emailAjax('.make-order', 'php/make-order/make-order.php')

    // закрытие модального окна при нажатии на close (&times;)
    $("#close-thanks").on('click', function() {
        $('body').removeClass('sent');
    })

    $("#close-recommend").on('click', function() {
        $('body').removeClass('recommend');
    })
    
    //добавление фиксированной кнопки page-up
    $(window).scroll(function () {
        if (window.matchMedia('(max-width: 425px)').matches) {
            // Ваше условие для ширины экрана менее 425px
            if ($(window).scrollTop() > 1600) {
                $('.page-up').fadeIn();
            } else {
                $('.page-up').fadeOut();
            }
        }
    });
    
    //модальное окно "рекомендация" при нажатии "модель часов"
    function recommend() {
        let score = 1;
        
        if (score > 0) {
            $('.model-watch').one('click', function() {
                $('body').addClass('recommend'); 
                score--;
            });
        }
    };

    recommend();
})