/* =================================
                preloader
==================================== */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

});

/* =================================
                Team
==================================== */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            }
        }

    });
});

/* =================================
             Progress bars
==================================== */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({

                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/* =================================
            Responsive Tabs
==================================== */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });


});

/* =================================
            Portfolio
==================================== */
$(window).on('load', function () {

    //initialize isotope
    $("#isotope-container").isotope({});

    //filter
    $("#isotope-filters").on('click', 'button', function () {

        //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');

    });
});

/* =================================
            Magnifier
==================================== */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });



});

/* =================================
            Testimonials
==================================== */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});

/* =================================
                Stats
==================================== */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    })

});

/* =================================
                Client
==================================== */
$(function () {
    $("#client-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2,
            },
            480: {
                items: 3,
            } ?
            768 : {
                items: 6,
            }
        }


    });
});

/* =========================================
              Google Map
============================================ 
$(window).on('load', function () {

    // Map Variables
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatlng = {
        lat: 40.712685,
        lng: -74.005920
    };

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });

});
*/


/* ==========================
         Navigation
============================= */
/* black to white and vice versa */
$(function () {

    showHideNave();

    $(window).scroll(function () {

        showHideNave();

    });

    function showHideNave() {

        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            $("#back-to-top").fadeIn();

        } else {

            $("nav").removeClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            $("#back-to-top").fadeOut();
        }
    }

});

/* ==========================
       Mobile Menu
============================= */
$(function () {

    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });
});


/* ==========================
         Animation
============================= */
$(function () {
    new WOW().init();
});

$(window).on('load', function () {

    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");

});