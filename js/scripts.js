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
        if (st > lastScrollTop) {
            navbar.fadeIn();
            navbar.removeClass('navbar-dark bg-transparent').addClass('navbar-light bg-custom');
        } 
        else if(st < lastScrollTop && st > 200) {
            navbar.removeClass('navbar-dark bg-transparent').addClass('navbar-light bg-custom');
        }
        else {
            navbar.removeClass('navbar-light bg-custom').addClass('navbar-dark bg-transparent');
        }
        lastScrollTop = st;
    });

})(jQuery);

$(document).ready(function() {
    $("button#checkout").last().click(function () {
        let pName = $("#pname option:selected").val();
        let pSize = $("#psize option:selected").val();
        let pCrust = $("#pcrust option:selected").val();
        let pToppings = [];
    
    
        $.each($("input[name= 'toppings']:checked"), function () {
            let top = pToppings.push($(this).val());
    
        $("button#checkout").hide();
        $("button#place-order").show();
    
        });
    
    $("button#more").click(function() {
        $("#more-order").append(
            '<div id="hide-now">' +
                '<p>Choose Pizza: <span class="pizza-size"></span></p>' +
                '<select id="pname">' +
                    '<option selected value="0">Select</option>' +
                    '<option value="Bbq Steak">Bbq Steak</option>' +
                    '<option value="Chicken Bbq">Chicken Bbq</option>' +
                    '<option value="Peri-peri Chicken">Peri-peri Chicken</option>' +
                '</select>' +
                '<hr>' +
                '<p>Pizza size chosen: <span class="pizza-size"></span></p>' +
                '<select id="psize">' +
                    '<option selected value="0">Select</option>' +
                    '<option value="small">Small</option>' +
                    '<option value="medium">Medium</option>' +
                    '<option value="large">Large</option>' +
                '</select>' +
                '<hr>' +
                '<p>Choose type of crust:</p>' +
                '<select id="pcrust">' +
                    '<option selected value="0">Select</option>' +
                    '<option value="Crispy">Crispy -- 200</option>' +
                    '<option value="Stuffed">Stuffed -- 300</option>' +
                    '<option value="Gluten-free">Gluten-free -- 400</option>' +
                '</select>' +
    
                '<hr>' +
                '<p>Choose toppings:</p>' +
                '<div class="form-check form-check-inline" id="tops">' +
                    '<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Pepperoni" name="toppings">' +
                    '<label class="form-check-label" for="inlineCheckbox1">Pepperoni</label>' +
                '</div>' +
                '<div class="form-check form-check-inline">' +
                    '<input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Pepperoni" name="toppings">' +
                    '<label class="form-check-label" for="inlineCheckbox2">Mushroom</label>' +
                '</div>' +
                '<div class="form-check form-check-inline">' +
                    '<input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Onions" name="toppings">' +
                    '<label class="form-check-label" for="inlineCheckbox3">Onions</label>' +
                '</div>' +
                '<div class="form-check form-check-inline">' +
                    '<input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="Bacon" name="toppings">' +
                    '<label class="form-check-label" for="inlineCheckbox4">Bacon</label>' +
                '</div>' +
    
                '<hr>' +
            '</div>'
    
        );
    
        $("button#place-order").hide();
        $("button#checkout").show();
    });
    
        switch (pSize) {
            case '0':
                price = 0;
                break;
            case 'small':
                price = 500;
                break;
            case 'medium':
                price = 1000;
                break;
            case 'large':
                price = 1500;
                break;
            default:
                alert("errro");
        }
    
    
        switch (pCrust) {
            case '0':
                c_price = 0;
                break;
            case 'Crispy':
                c_price = 200;
                break;
            case 'Stuffed':
                c_price = 300;
                break;
            case 'Gluten-free':
                c_price = 400;
                break;
            default:
                alert("error");
        }
       
        let topping_value = pToppings.length * 100;
    
    
        if ((pSize == "0") && (pCrust == "0")) {
           
            
        } else {
            total = price + c_price + topping_value;
            $("#hide-now").hide();
            $("#show-now").show();
    
            newOrder= new Order(pName, pSize, pCrust, pToppings, total);
    
            $("#show-now").append(`<tr><td id="pizzaname" class="padding"> `+newOrder.name + `</td><td id="pizzasize" class="padding">` + newOrder.size + `</td><td id="pizzasize" class="padding"> `+ newOrder.crust +`</td><td id="pizzasize" class="padding"> `+ newOrder.toppings +`</td><td id="pizzasize" class="padding">` + newOrder.total +`</td></tr>`);
    
        }
    
    });
    
    $("input#delivery-option").click(function () {
        $("#delivery").show();
        $("#pickup").hide();
    
    });
    
    $("input#pickup-option").click(function () {
        $("#pickup").show();
        $("#delivery").hide();
    
    });
    
    $("button#place-order").click(function() {
        let yourName = $("input#your-name").val();
        let deliveryDate = $("input#delivery-date").val();
        let apartment = $("input#house").val();
        let street = $("input#road").val();
        let city = $("input#city").val();
        let pickupOption = $("#pickup-option").is(":checked");
        let deliveryOption = $("#delivery-option").is(":checked");
        let pName = $("#pname option:selected").val();
    
        function pickupDelivery(){
            if (pickupOption == true && deliveryOption == false){
                return true;
            } else if (pickupOption == false && deliveryOption == true){
                return false;
            }
        }
        
    
        let pickOrDelivery = pickupDelivery();
    
        if (pickOrDelivery == true) {
            alert("Your order of " + pName+ " pizza has been received " + yourName + ". The order costs Ksh. " + total +  " and shall be ready in 30 minutes.");
        } else {
            alert("Your order of " + pName + " pizza has been received " + yourName + ". The order costs Ksh. " + total + " and shall be delivered to " + apartment + ", "
                 + street + ", " + city + " on " + deliveryDate + ".");
        }   
    });

});