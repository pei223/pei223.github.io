$(document).ready(function($) {
    $(window).scroll(function() {
        var windowHeight = window.innerHeight;
        var scrollVal = $(window).scrollTop();
        $('.profile-detail').each(function() {
            var nodeTopPosition = $(this).offset().top;      
            if (scrollVal + windowHeight > nodeTopPosition + 10) {
                $(this).addClass("profile-detail-fadein");
            }
        });
    });
});