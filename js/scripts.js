$("#fixed-container").css("position", "fixed");
$("#menu-container").addClass("hidden");

$(document).ready(function ()
{
    pigOnTop($("#fixed-container").offset().top);
    menu($("#fixed-container").offset().top);
    collapseTrigger();
});

$(window).on("scroll", function ()
{
    pigOnTop($(window).scrollTop());
    menu($(window).scrollTop());
});

$("#nav-menu a").click(function() {
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
                menuDisappear();
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

/*function appearAnimations()
{
    // Torna os elementos invisíveis para animá-los abaixo
    jQuery('.conteudo article > .alignnone, .conteudo article > .aligncenter, .conteudo article > .wp-video, .conteudo article > figure, .conteudo article > h2, .conteudo article > blockquote, .conteudo article > .alignleft, .conteudo article > .alignright').addClass('invisible');
}*/

$("#menu-trigger button").on("click", function() {
    menuAppear();
    menuFocusAppear();
});

$("#close-trigger button, #black-out").on("click", function() {
    menuDisappear();
    setTimeout(function() {
        menuFocusDisappear();
    }, 500);
});

$("#nav-menu li a").on("click", function() {
    menuDisappear();
    setTimeout(function() {
        menuFocusDisappear();
    }, 500);
});

function menuAppear()
{
    (function($, viewport) {
        if(viewport.is("sm")) {
            $("#menu-container").fadeIn(500, function() {
                $("#menu-container").removeClass("hidden");
            });
        } else {
            $("#menu-container").removeClass("hidden");
        }
    })(jQuery, ResponsiveBootstrapToolkit);

    if($("#nav-menu .menu-list > li").hasClass("disappear")) {
        $("#nav-menu .menu-list > li").removeClass("disappear");
        if($("#menu-container").hasClass("disappear")) {
            $("#menu-container").removeClass("disappear");
        }
    }
}

function menuDisappear()
{
    if(!$("#nav-menu .menu-list > li").hasClass("disappear")) {
        $("#nav-menu .menu-list > li").addClass("disappear");
        if(!$("#menu-container").hasClass("disappear")) {
            $("#menu-container").addClass("disappear");
        }
    }
}

function menuFocusAppear()
{
    //$("body").css("overflow", "hidden");
    $("#black-out").fadeIn(0, function() {
        $("#black-out").removeClass("hidden");
    });
    if(!$("#menu-container").hasClass("focus")) {
        $("#menu-container").addClass("focus");
    }
}

function menuFocusDisappear()
{
    //$("body").css("overflow", "auto");
    $("#black-out").fadeOut(500, function() {
        $("#black-out").addClass("hidden");
    });
    if($("#menu-container").hasClass("focus")) {
        $("#menu-container").removeClass("focus");
    }
}

function menuTriggerAppear()
{
    if($("#menu-trigger").hasClass("hidden")) {
        $("#menu-trigger").css("display", "flex").fadeIn(0, function() {
            $("#menu-trigger").removeClass("hidden");
        });
    }
}

function menuTriggerDisappear()
{
    if(!$("#menu-trigger").hasClass("hidden")) {
        $("#menu-trigger").fadeOut(1000, function() {
            $("#menu-trigger").addClass("hidden");
        });
    }
}

function fixedContainerBoxShadowAppear()
{
    if(!$("#fixed-container").hasClass("fixed-container-box-shadow")) {
        $("#fixed-container").addClass("fixed-container-box-shadow");
    }
}

function fixedContainerBoxShadowDisappear()
{
    if($("#fixed-container").hasClass("fixed-container-box-shadow")) {
        $("#fixed-container").removeClass("fixed-container-box-shadow");
    }
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
