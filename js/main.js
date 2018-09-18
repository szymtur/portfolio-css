$(document).ready(function() {
    scrolled();
    hideDropMenu();
    smoothScroll();
    scrollTop();
});

$(window).scroll(function() {
    scrolled();
});

function scrolled() {
    var navHeight = $('#main-menu').outerHeight();
    var scrolled = $(window).scrollTop();

    if (scrolled > navHeight) {
        $('#main-menu').addClass('scrolled');
    } else {
        $('#main-menu').removeClass('scrolled');
    }
}

function hideDropMenu() {
    $('.menu-item').click(function () {
        $('#drop-menu').prop('checked', false);
    });
}

function smoothScroll(){
    $("a[href*=\\#]").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        } 
    });
}

function scrollTop(){
    let buttonSubmit = $('input[type="submit"]');

    buttonSubmit.on('click', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1500, 'linear');
        return false;
    });
}