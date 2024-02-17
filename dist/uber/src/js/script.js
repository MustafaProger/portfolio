"use strict"

// затемнение и фиксирование заднего фона при выхода меню бургер
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $(".header__burger").toggleClass('active');
        $(".header__menu").toggleClass('active');
        $("body").toggleClass('lock')
        $(".subheader").toggleClass('lock')
        $(".promo").toggleClass('lock')
        $(".advantage").toggleClass('lock')
        $(".mobile").toggleClass('lock')
        $(".chose").toggleClass('lock')
        $(".condition").toggleClass('lock')
        $(".world").toggleClass('lock')
        $(".footer").toggleClass('lock')
        $(".cities").toggleClass('lock')
        $(".yourcar").toggleClass('lock')
        $(".ourcar").toggleClass('lock')
        $(".request").toggleClass('lock')
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    const body = document.getElementById('body');
    
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);


        if (error === 0) {
            body.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                body.classList.remove('_sending');
            } else {
                let result = await response.json();
                alert(result.message);
                body.classList.remove('_sending');
            }

        } else {
            alert('Заполните обязательные поля')
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll("._req");

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === "") {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});

// Слушаем событие клика по кнопке
document.getElementById('languageButton').addEventListener('click', function () {
    // Получаем текущий URL страницы
    var currentURL = window.location.href;

    // Проверяем, на каком языке сейчас страница
    if (currentURL.indexOf('/en/') !== -1) {
        // Если на английском, переключаемся на русский
        window.location.href = currentURL.replace('/en/', '/ru/');
    } else if (currentURL.indexOf('/ru/') !== -1) {
        // Если на русском, переключаемся на английский
        window.location.href = currentURL.replace('/ru/', '/en/');
    }
});

// Слушаем событие клика по кнопке

var currentURL = window.location.href;

if (currentURL.indexOf('/en/') !== -1) {
    // Если на английской странице, кнопка "English" неактивна
    document.getElementById('enButton').disabled = true;
    document.getElementById('ruButton').addEventListener('click', function () {
        window.location.href = currentURL.replace('/en/', '/ru/');
    });
} else if (currentURL.indexOf('/ru/') !== -1) {
    // Если на русской странице, кнопка "Русский" неактивна
    document.getElementById('ruButton').disabled = true;
    document.getElementById('enButton').addEventListener('click', function () {
        window.location.href = currentURL.replace('/ru/', '/en/');
    });
}