$("#content").css("top", "75%");

$(document).ready(function() {
    $("#fixed-container").css("position", "fixed");
    $("#fixed-container").addClass("fixed-container-box-shadow");
    $("#menu-trigger").css("position", "fixed");
    $(".remove-active").removeClass("active");
    $(".clients .h3, .locations .h3").addClass("visuallyhidden");

    pigOnTop($(window).scrollTop());

    sr.reveal(".box-container .box-image, .service .ps-article, .dt-box, .dd-box, .jumbotron .h1, .jumbotron p, .wrapper-body-contact .contact-box address, .wrapper-body-contact .contact-box dt, .wrapper-body-contact .contact-box dd");
});

$(window).on("scroll", function() {
    pigOnTop($(window).scrollTop());
});

$("#nav-menu a, .content section h1 > a, .content section h2 > a, h3 a").on("click", function() {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            scrollToTrigger(target);
            return false;
        }
    }
});

$("#menu-trigger button").on("click", function() {
    menuAppear();
});

$("#close-trigger button, #black-out").on("click", function() {
    menuDisappear();
});

$(".big-nav-pills a").on("shown.bs.tab", function(e) {
    sr.sync();
})

function scrollToTrigger(el) {
    var i = ($(window).height() * 15) / 75;
    var offTop = el.offset().top - i;

    $("html, body").scrollTop(offTop);
}

function pigOnTop(st) {
    if (st <= 0) {
        var h = 100;
    } else {
        var h = 15;
    }

    $("#fixed-container").css("height", h + "%");
}

function menuAppear() {
    $("#menu-container").show();
    $("#nav-menu .menu-list > li").removeClass("menu-list-disappear");
    $("#menu-container").removeClass("menu-container-disappear");
    $("#black-out").removeClass("hidden");
    $("#close-trigger").removeClass("hidden");
    $("#menu-container").addClass("focus").removeClass("visuallyhidden");
}

function menuDisappear() {
    $("#nav-menu .menu-list > li").addClass("menu-list-disappear");
    $("#menu-container").addClass("menu-container-disappear");
    $("#black-out").addClass("black-out-disappear");
    setTimeout(function() {
        $("#black-out").addClass("hidden");
        $("#black-out").removeClass("black-out-disappear");
    }, 300);
    setTimeout(function() {
        $("#menu-container").removeClass("focus").addClass("visuallyhidden");
        $("#close-trigger").addClass("hidden");
    }, 500);
}
