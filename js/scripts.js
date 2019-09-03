// Navbar Transparent
(function ($) {

    var navbar = $('.navbar');
    var lastScrollTop = 0;

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        // Scroll down
        if (st > lastScrollTop) {
            navbar.fadeOut();
        } 
        // Scroll up but still lower than 200 (change that to whatever suits your need)
        else if(st < lastScrollTop && st > 200) {
            navbar.fadeIn();
            navbar.removeClass('navbar-light bg-transparent').addClass('navbar-dark bg-custom');
        }
        // Reached top
        else {
            navbar.removeClass('navbar-dark bg-custom').addClass('navbar-light bg-transparent');
        }
        lastScrollTop = st;
    });

})(jQuery);