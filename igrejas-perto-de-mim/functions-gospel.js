$( document ).ready(function() {
    console.log( "ready!" );
    
    $(function() {
    //caches a jQuery object containing the header element
    var header = $("#top");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.removeClass('large-top').addClass("small-top");
        } else {
            header.removeClass("small-top").addClass('large-top');
        }
    });
});
});