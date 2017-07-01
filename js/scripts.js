window.sr = ScrollReveal();

$(document).ready(function ()
{
    // Fixa a logo no topo
    $("#fixed-container").css("position", "fixed");
    // Some e fixa o menu trigger
    $("#menu-trigger").css("position", "fixed").addClass("hidden");

    pigOnTop($(window).scrollTop());
    menu($(window).scrollTop());
    scrollRevealTrigger();
    collapseTrigger();
    magnificPopupTrigger();
});

$(window).on("scroll", function ()
{
    pigOnTop($(window).scrollTop());
    menu($(window).scrollTop());
});

// Rolar suave para links internos @ CSS-Tricks
$("#nav-menu a, .content section .h1 > a, h3 a").on("click", function()
{
    if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
        if (target.length) {
            // Fix do Work
            if(target.selector == "#work") {
                scrollToTrigger(target, true);
            } else {
                scrollToTrigger(target);
            }
            return false;
        }
    }
});

// Abrir menu focus ao clicar em menu trigger
$("#menu-trigger button").on("click", function()
{
    menuAppear();
    menuFocusAppear();
});

// Fechar menu focus ao clicar em close trigger
$("#close-trigger button, #black-out").on("click", function()
{
    menuDisappear();
    setTimeout(function() {
        menuFocusDisappear();
    }, 500);
});

// Fechar menu focus ao clicar em link do menu
$("#nav-menu li a").on("click", function()
{
    menuDisappear();
    setTimeout(function() {
        menuFocusDisappear();
    }, 500);
});

// Ao clicar nas pills refaz a animação
$(".big-nav-pills a").on("shown.bs.tab", function (e)
{
    sr.sync();
})

function scrollToTrigger(el, work=false)
{
    i = (work === true ? 0 : 250);

    $("html, body").animate({
        scrollTop: el.offset().top - i
    }, 500);
}

// Diminui o fixed-container e adiciona a box-shadow
function pigOnTop(st)
{
    if (st <= 0) {
        var h = 100;
        fixedContainerBoxShadowDisappear();
    } else if (st >=400) {
        var h = 15;
        fixedContainerBoxShadowAppear();
    } else {
        var h = 100 - 15 * (st / 100);
        fixedContainerBoxShadowDisappear();
    }

    $("#fixed-container").css("height", h+"%");
}

// Funções do menu
function menu(st)
{
    if (st <= 0) {
        (function($, viewport) {
            if(viewport.is(">sm")) {
                menuTriggerDisappear();
                menuAppear();
                menuFocusDisappear();
            } else {
                menuTriggerAppear();
                menuFocusDisappear();
            }
        })(jQuery, ResponsiveBootstrapToolkit);
    } else if (st > 0) {
        (function($, viewport) {
            if(viewport.is(">sm")) {
                menuTriggerAppear();
                menuDisappear();
                menuFocusDisappear();
            } else {
                menuTriggerAppear();
                menuDisappear();
                menuFocusDisappear();
            }
        })(jQuery, ResponsiveBootstrapToolkit);
    }
}

function scrollRevealTrigger()
{
    sr.reveal(".box-container .box-image");
    sr.reveal(".service .ps-article");
    sr.reveal(".dt-box");
    sr.reveal(".dd-box");
    sr.reveal(".contact-box dt");
    sr.reveal(".contact-box dd");
}

function menuAppear()
{
    $("#menu-container").show();
    $("#nav-menu .menu-list > li").removeClass("menu-list-disappear");
    $("#menu-container").removeClass("menu-container-disappear");
}

function menuDisappear()
{
    $("#nav-menu .menu-list > li").addClass("menu-list-disappear");
    $("#menu-container").addClass("menu-container-disappear");
}

function menuFocusAppear()
{
    $("#black-out").fadeIn(0, function() {
        $(this).removeClass("hidden");
    });
    $("#close-trigger").removeClass("hidden");
    $("#menu-container").addClass("focus");
}

function menuFocusDisappear()
{
    $("#black-out").fadeOut(500, function() {
        $(this).addClass("hidden");
    });
    $("#menu-container").removeClass("focus");
    $("#close-trigger").addClass("hidden");
}

function menuTriggerAppear()
{
    $("#menu-trigger").removeClass("hidden");
}

function menuTriggerDisappear()
{
    $("#menu-trigger").addClass("hidden");
}

function fixedContainerBoxShadowAppear()
{
    $("#fixed-container").addClass("fixed-container-box-shadow");
}

function fixedContainerBoxShadowDisappear()
{
    $("#fixed-container").removeClass("fixed-container-box-shadow");
}

function collapseTrigger()
{
    (function($, viewport) {
        $(document).ready(function() {
            if(viewport.is("<sm")) {
                $(".collapse").collapse("hide");
            }
        });
    })(jQuery, ResponsiveBootstrapToolkit);
}

function magnificPopupTrigger()
{
    /*$('.gallery-iframe').magnificPopup({
        delegate: 'a',
        type: 'iframe',
        gallery: {
            enabled: true
        },
        callbacks: {
            elementParse: function(item) {
                if(item.el.context.className == 'gallery-image') {
                    item.type = 'image';
                } else {
                    item.type = 'iframe';
                }
            }
        },
    });*/

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        gallery: {
            enabled: true
        },
    });
}
