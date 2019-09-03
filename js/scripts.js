// Business Logic

let total = 0;
function Order(name,size, crust, toppings, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
};

function Address(house, road, city) {
    this.house = house;
    this.road = road;
    this.city = city;

};

Address.prototype.fullAddress = function() {
    return this.house + ", " + this.road + ", " + this.city;
};


// User Logic

// Navbar Transparent
(function ($) {

    var navbar = $('.navbar');
    var lastScrollTop = 0;

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        // Scroll down
        if (st > lastScrollTop) {
            navbar.fadeIn();
            navbar.removeClass('navbar-dark bg-transparent').addClass('navbar-light bg-custom');
        } 
        // Scroll up but still lower than 200 (change that to whatever suits your need)
        else if(st < lastScrollTop && st > 200) {
            navbar.removeClass('navbar-dark bg-transparent').addClass('navbar-light bg-custom');
        }
        // Reached top
        else {
            navbar.removeClass('navbar-light bg-custom').addClass('navbar-dark bg-transparent');
        }
        lastScrollTop = st;
    });

})(jQuery);