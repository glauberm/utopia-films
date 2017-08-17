window.sr = ScrollReveal();

$(document).ready(function ()
{
    $("#fixed-container").css("position", "fixed");
    $("#menu-trigger").css("position", "fixed");

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

$("#nav-menu a, .content section h1 > a, .content section h2 > a, h3 a").on("click", function()
{
    if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
        if (target.length) {
            if(target.selector == "#work") {
                scrollToTrigger(target, true);
            } else {
                scrollToTrigger(target, false);
            }
            return false;
        }
    }
});

$("#menu-trigger button").on("click", function()
{
    menuAppear();
    menuFocusAppear();
});

$("#close-trigger button, #black-out").on("click", function()
{
    menuDisappear();
    setTimeout(function() {
        menuFocusDisappear();
    }, 500);
});

$("#nav-menu li a").on("click", function()
{
    menuDisappear();
    setTimeout(function() {
        menuFocusDisappear();
    }, 500);
});

$(".big-nav-pills a").on("shown.bs.tab", function (e)
{
    sr.sync();
})

function scrollToTrigger(el, work)
{
    i = (work === true ? 0 : 175);

    $("html, body").animate({
        scrollTop: el.offset().top - i
    }, 500);
}

function pigOnTop(st)
{
    if (st <= 0) {
        var h = 100;
        fixedContainerBoxShadowDisappear();
    } else {
        var h = 15;
        fixedContainerBoxShadowAppear();
    }

    $("#fixed-container").css("height", h+"%");
}

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
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        gallery: {
            enabled: true
        },
    });
}
