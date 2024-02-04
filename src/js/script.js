$(document).ready(function() {
    // работы с меню-бургер
    $('.menu__burger').on('click', function() {
        $('.navigation').addClass('active');
        $('.navigation').addClass('appearanceLayer');
        $('.navigation .content').addClass('appearanceMenu');
        $('body').addClass('lock');

    });
    
    $('.close').on('click', function() {
        // Начинаем анимацию исчезновения
        $('.navigation').addClass('fadeLayer');
        $('.navigation .content').addClass('fadeMenu');
        
        // Прослушиваем окончание анимации исчезновения для .navigation .content
        $('.navigation .content').one('animationend', function() {
            // Удаляем классы анимации появления
            $('.navigation').removeClass('appearanceLayer');
            $('.navigation .content').removeClass('appearanceMenu');
            // Удаляем класс active, делая меню невидимым
            $('.navigation').removeClass('active');
            $('body').removeClass('lock');
            // Очищаем классы анимации исчезновения, чтобы они не мешали следующему появлению
            $('.navigation').removeClass('fadeLayer');
            $('.navigation .content').removeClass('fadeMenu');
        });
    });

    // изменения цвета sidepanel при скролле
    $(window).scroll(function() {
        if ($(window).scrollTop() > 350) {
            $('.sidepanel').addClass('сhange-theme');
        } else {
            $('.sidepanel').removeClass('сhange-theme');
        }
    });
    
    // плавная анимация при нажатии на гиперссылку
    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });
});
