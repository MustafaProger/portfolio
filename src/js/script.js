$(document).ready(function() {
    //работы с меню-бургер
    $('.menu__burger').on('click', function() {
        $('.navigation').addClass('active');
        $('.navigation').addClass('appearanceLayer');
        $('.navigation .content').addClass('appearanceMenu');
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
            // Очищаем классы анимации исчезновения, чтобы они не мешали следующему появлению
            $('.navigation').removeClass('fadeLayer');
            $('.navigation .content').removeClass('fadeMenu');
        });
    });
});
