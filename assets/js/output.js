$(document).ready(function($) {
    // 最初から完全に見えていたらフェードイン
    fadeinElements()
    $(window).scroll(function() {
        fadeinElements()
    });
});

function fadeinElements() {
    var windowHeight = window.innerHeight;
    var scrollVal = $(window).scrollTop();
    $('.work-block').each(function(index) {
        var nodeTopPosition = $(this).offset().top;      
        if (scrollVal + windowHeight > nodeTopPosition + 30) {
            $(this).addClass(index % 2 === 0 ? "left-fadein" : "right-fadein");
        }
    });
}