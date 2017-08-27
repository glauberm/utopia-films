window.sr = ScrollReveal();

$(document).ready(function ()
{
    $("#fixed-container").css("position", "fixed");
    $("#menu-trigger").css("position", "fixed");
    $("#content").css("top", "75%");

    pigOnTop($(window).scrollTop());
    scrollRevealTrigger();
    magnificPopupTrigger();
});

$(window).on("scroll", function ()
{
    pigOnTop($(window).scrollTop());
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
    if(work === true) {
        i = 0;
    } else {
        i = ($(window).height() * 15) / 30;
    }

    console.log($(window).height(), i);

    $("html, body").animate({
        scrollTop: el.offset().top - i
    }, 500);
}

function pigOnTop(st)
{
    if (st <= 0) {
        var h = 100;
    } else {
        var h = 15;
    }

    $("#fixed-container").css("height", h+"%");
}

function scrollRevealTrigger()
{
    sr.reveal(".box-container .box-image, .service .ps-article, .dt-box, .dd-box, .jumbotron p, .contact-box address, .contact-box dt, .contact-box dd");
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

function magnificPopupTrigger()
{
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        gallery: {
            enabled: true
        },
    });
}
