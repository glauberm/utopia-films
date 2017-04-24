$(document).ready(function ()
{
    // Fixa a logo no topo
    $("#fixed-container").css("position", "fixed");
    // Some e fixa o menu trigger
    $("#menu-trigger").css("position", "fixed").addClass("hidden");
    // Torna os elementos invisíveis para animá-los abaixo
    //$(".box-container .box-image, .about .box-text-wrap, .production-service .ps-article, .production-companies .dt-box, .dd-box, .contact-box").addClass("invisible");

    pigOnTop($(window).scrollTop());
    menu($(window).scrollTop());
    //revealTrigger($(window).scrollTop());
    collapseTrigger();
    magnificPopupTrigger();
});

$(window).on("scroll", function ()
{
    pigOnTop($(window).scrollTop());
    menu($(window).scrollTop());
    //revealTrigger($(window).scrollTop());
});

// Rolar suave para links internos @ CSS-Tricks
$("#nav-menu a, .content section .h1 > a, h3 a").on("click", function()
{
    if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
        if (target.length) {
            $("html, body").animate({
                scrollTop: target.offset().top - 150
            }, 500);
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
    //$(".box-container .box-image, .dt-box, .dd-box, .contact-box").addClass("invisible").removeClass("fade-in-top");
    //revealTrigger($(window).scrollTop());
})

// Diminui o fixed-container e adiciona a box-shadow
function pigOnTop(st)
{
    if (st <= 0) {
        var h = 100;
        fixedContainerBoxShadowDisappear();
    } else if (st >= 400) {
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

// Revela as coisas quando o scroll chega nelas
/*function revealTrigger(scrollTop)
{
    $(".box-container .box-image, .production-service .ps-article, .dt-box, .dd-box, .contact-box").each(function() {
        if(isScrolledIntoView(scrollTop, $(this))) {
            $(this).removeClass("invisible").addClass("fade-in-top");
        }
    });

    $(".about .box-text-wrap").each(function() {
        if(isScrolledIntoView(scrollTop, $(this))) {
            $(this).removeClass("invisible").addClass("zoom-fade-in");
        }
    });
}*/

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

function isScrolledIntoView(scrollTop, elem)
{
    var docViewBottom = scrollTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + ($(elem).height()/4);

    return ((elemBottom <= docViewBottom) && (elemTop >= scrollTop));
}

function magnificPopupTrigger()
{
    $('.gallery-featured-work').magnificPopup({
        delegate: 'a',
        type: 'iframe',
        gallery: { enabled: true },
    });
}
