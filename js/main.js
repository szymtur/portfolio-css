$(document).ready(function(){
    scrolled();
});

$(window).scroll(function(){
    scrolled();
});

function scrolled(){
    var navHeight = $('#main-menu').outerHeight();
    var scrolled = $(window).scrollTop();
    
    if(scrolled > navHeight){
        $('#main-menu').addClass('scrolled');
    } else {
        $('#main-menu').removeClass('scrolled');
    }
}