$(document).ready(function() {
    // работы с меню-бургер
    $('.menu__burger').on('click', function() {
        $('.navigation').addClass('active');
        $('.navigation').addClass('appearanceLayer');
        $('.navigation .content').addClass('appearanceMenu');
        $('.list__item').addClass('appearanceList');
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
            $('.list__item').removeClass('appearanceList');
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


//работа с анимацией процентов в progressBar
document.addEventListener('DOMContentLoaded', function() {
    let percentElements = document.querySelectorAll(".percent");
    let progressBarElements = document.querySelectorAll(".progressBar");
    let animated = Array(percentElements.length).fill(false); // Флаги анимации для каждого прогресс-бара

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function updateProgressBar(i) {
        let percentJS = 0;
        let targetPercent = parseInt(percentElements[i].innerText.replace('%', ''), 10);

        function animate() {
            if (percentJS < targetPercent) {
                percentJS++;
                progressBarElements[i].style.width = percentJS + '%';
                percentElements[i].innerText = percentJS + '%';
                setTimeout(animate, 8)
            }
        }
        animate();
    }

    function checkAndAnimateProgressBars() {
        percentElements.forEach((item, i) => {
            if (isInViewport(item) && !animated[i]) {
                updateProgressBar(i);
                animated[i] = true; // Помечаем прогресс-бар как анимированный
            }
        });
    }

    // Проверяем и анимируем прогресс-бары при первой загрузке страницы
    checkAndAnimateProgressBars();

    // Проверяем и анимируем прогресс-бары при прокрутке
    window.addEventListener('scroll', checkAndAnimateProgressBars);
});
