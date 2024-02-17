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
                            <li><a href="index.html#promo" class="header__link">Home</a></li>\
                            <li><a href="yourcar.html" class="header__link">Your car</a></li>\
                            <li><a href="ourcar.html" class="header__link">Company car</a></li>\
                            <li><a href="index.html#condition" class="header__link">Requirements</a></li>\
                            <li class="dropdown navbar">\
                            <a class="header__link" id="header__link"\
                                data-bs-toggle="dropdown" aria-expanded="false"\
                                >Contacts</a>\
                            <ul class="dropdown-menu">\
                                <li><a class="dropdown-item" href="tel:+79680603084">+7 (968) 060-30-84</a></li>\
                                <li><a class="dropdown-item" href="tel:+79680603084">+7 (968) 312-75-22</a></li>\
                                <li><a class="dropdown-item dropdown-item_3" href="tel:+79680603084">+7 (968) 102-87-53</a></li>\
                            </ul>\
                        </li>\
                            <li><a href="request.html" class="header__link">Submit application</a></li>\
                        </ul>\
                        <div id="languageButtons" style="padding-top: 10px">\
                            <button id="ruButton" style="font-size: 20px; padding-left: 0">\
                                Русский\
                                <img src="../src/icons/flag/russian-flag.png" style="width: 15px; height: 15px; margin: -3px 0;" alt="">\
                            </button>\
                            <span>|<span>\
                            <button id="enButton" style="font-size: 20px; padding-left: 2px">\
                                English\
                                <img src="../src/icons/flag/uk-flag.png" style="width: 15px; height: 15px; margin: -3px 0;" alt="">\
                            </button>\
                        </div>\
                    </nav>\
                </div>\
            </div>\
        </div>\
    </header>\
<style>\
    .header__list {\
        padding: 17px 0px;\
    }\
    .header__link {\
        font-size: 25px;\
    }\
    #header__link::after {\
        margin: 14px 0 10px 116px;\
    }\
    .header__list .dropdown .dropdown-menu .dropdown-item {\
        font-size: 16px;\
    }\
    @media (max-width: 1200px){\
        .header__list {\
            padding: 20px 0px;\
        }\
        .header__list li {\
            font-size: 20px;\
        }\
        .header__link {\
            font-size: 21px !important;\
        }\
        #header__link::after {\
            margin: 12px 0 10px 95px;\
        }\
    }\
    @media (max-width: 930px) {\
        #header__link::after {\
            margin: 21px 0 10px 113px;\
        }\
    }\
</style>\
'