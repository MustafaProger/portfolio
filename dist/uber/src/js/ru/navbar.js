document.getElementById("navbar").innerHTML = '\
    <header class="header">\
        <div class="top__header">\
            <div class="container">\
                <div class="header__content">\
                    <div class="logo_without_text"></div>\
                    <div class="header__burger">\
                        <span></span>\
                    </div>\
                    <section class="dark">\
                        <div class="load-flash" style="display: none; visibility: hidden;"></div>\
                        <div class="mode-toggle noselect">\
                            <div class="toggle-switch"></div>\
                        </div>\
                    </section>\
                    <nav class="header__menu">\
                        <ul class="header__list">\
                            <li><a href="index.html#promo" class="header__link">Главная</a></li>\
                            <li><a href="yourcar.html" class="header__link">Со своим автомобилем</a></li>\
                            <li><a href="ourcar.html" class="header__link">На автомобили компании</a></li>\
                            <li><a href="index.html#condition" class="header__link">Требования</a></li>\
                            <li class="dropdown navbar">\
                            <a class="header__link" id="header__link"\
                                data-bs-toggle="dropdown" aria-expanded="false"\
                                >Контакты</a>\
                            <ul class="dropdown-menu">\
                                <li><a class="dropdown-item" href="tel:+79680603084">+7 (968) 060-30-84</a></li>\
                                <li><a class="dropdown-item" href="tel:+79680603084">+7 (968) 312-75-22</a></li>\
                                <li><a class="dropdown-item dropdown-item_3" href="tel:+79680603084">+7 (968) 102-87-53</a></li>\
                            </ul>\
                        </li>\
                            <li><a href="request.html" class="header__link">Оставить заявку</a></li>\
                        </ul>\
                        <div id="languageButtons" style="padding-top: 5px">\
                            <button id="ruButton" style="font-size: 20px; padding-left: 0">\
                                Русский\
                                <img src="../src/icons/flag/russian-flag.png" style="width: 15px; height: 15px; margin: -3px 0;" alt="">\
                            </button>\
                            <span>|<span>\
                            <button id="enButton" style="font-size: 20px; padding-left: 2px">\
                                English\
                                <img src="../src/icons/flag/uk-flag.png" style="width: 15px; height: 15px; margin: -3px 0;" alt="">\
                            </button>\
                        </span>\
                    </nav>\
                </div>\
            </div>\
        </div>\
    </header>\
'