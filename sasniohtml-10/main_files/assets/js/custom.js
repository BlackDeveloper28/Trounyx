/*-----------------------------------------------------------------------------------

    Template Name: sasnio

    Note: This is Custom Js file

-----------------------------------------------------------------------------------

    [Table of contents]
    
    01. logodata
    02. client-slider
    03. services-slider
    04. screenshots-slider
    05. companie
    06. mobile-nav
    07. count
    08. slider-for
    09. accordion
    10. progressbar
    11. Navbar Menu
    12. scrollTop

-----------------------------------------------------------------------------------*/
/*- 01. logodata -*/ 

jQuery(document).ready(function($){
    if ( $.isFunction($.fn.owlCarousel) ) {
    $('.logodata').owlCarousel({
        loop:true,
        dot:false,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        800:{
            items:3
        },
        1000:{
            items:4
        },
        1200:{
            items:5
        }
      }
    })

/*- 02. client-slider -*/ 

    $('.client-slider').owlCarousel({
        loop:true,
        dot:true,
        nav:false,
        center:true,
        // autoplay:true,
        // autoplayTimeout:3000,
        items:1,
    })

/*- 03. services-slider -*/ 

    $('.services-slider').owlCarousel({
        loop:true,
        dot:false,
        nav:false,
        center:true,
        // autoplay:true,
        // autoplayTimeout:3000,
        responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        },
        1200:{
            items:3
        }
      }
    })

/*- 04. screenshots-slider -*/ 

    $('.screenshots-slider').owlCarousel({
        loop:true,
        dot:false,
        nav:true,
        center:true,
        autoplay:true,
        autoplayTimeout:3000,
        navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
        responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        },
        1200:{
            items:3
        }
      }
    })

/*- 05. companie -*/ 

    $('.companie').owlCarousel({
        loop:true,
        dot:false,
        nav:false,
        center:true,
        autoplay:true,
        autoplayTimeout:5000,
        responsive:{
        0:{
            items:1
        },
        773:{
            items:2,
            center:false
        },
        1200:{
            items:3
        }
      }
    })

/*- 06. mobile-nav -*/ 

    jQuery('.mobile-nav .menu-item-has-children').on('click', function($) {

          jQuery(this).toggleClass('active');

        }); 

        jQuery('#nav-icon4').click(function($){

            jQuery('#mobile-nav').toggleClass('open');

        });

        jQuery('#res-cross').click(function($){

           jQuery('#mobile-nav').removeClass('open');

        });


        jQuery('.bar-menu').click(function($){

            jQuery('#mobile-nav').toggleClass('open');
            jQuery('#mobile-nav').toggleClass('hmburger-menu');
            jQuery('#mobile-nav').show();

        });

        jQuery('#res-cross').click(function($){

           jQuery('#mobile-nav').removeClass('open');

        });
}
});



/* 07. count */
let count = document.querySelectorAll(".count");
let arr = Array.from(count);

arr.map(function (item) {
  let startnumber = 0;

  function counterup() {
    startnumber++;
    item.innerHTML = startnumber;

    if (startnumber == item.dataset.number) {
      clearInterval(stop);
    }
  }
  let stop = setInterval(function () {
    counterup();
  }, 10);
});

// count end

/*- 08. slider-for -*/ 

if ( $.isFunction($.fn.slick) ) {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                    {
                        breakpoint: 993,
                        settings: {
                        slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                        slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                        slidesToShow: 1,
                    }
                }
                ]
        });
}


/* 09. accordion */
    $('.accordion-item .heading').on('click', function(e) {
        e.preventDefault();

        // Add the correct active class
        if($(this).closest('.accordion-item').hasClass('active')) {
            // Remove active classes
            $('.accordion-item').removeClass('active');
        } else {
            // Remove active classes
            $('.accordion-item').removeClass('active');

            // Add the active class
            $(this).closest('.accordion-item').addClass('active');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle(300);
        $('.accordion-item .content').not($content).slideUp('fast');
    });

/* 10. progressbar */
  {
    function animateElements() {
      $('.progressbar').each(function () {
        var elementPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        var percent = $(this).find('.circle').attr('data-percent');
        var percentage = parseInt(percent, 10) / parseInt(100, 10);
        var animate = $(this).data('animate');
        if (elementPos < topOfWindow + $(window).height() - 10 && !animate) {
          $(this).data('animate', true);
          $(this).find('.circle').circleProgress({
            startAngle: -Math.PI / 2,
            value: percent / 100,
            size: 270,
            thickness: 6,
            emptyFill: "#fef0db",
            fill: {
              color: '#fe3379'
            }
          }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('div').text((stepValue*100).toFixed() + "%");
          }).stop();
        }
      });
    }

    // Show animated elements
    animateElements();
    $(window).scroll(animateElements);
  };

/* 11. Navbar Menu  */

    $('.navbar .dropdown').hover(function () {
        $(this).find('.dropdown-menu').addClass('show');
    }, function () {
        $(this).find('.dropdown-menu').removeClass('show')
    });

    $('.navbar .dropdown-item').hover(function () {
        $(this).find('.dropdown-side').addClass('show');
    }, function () {
        $(this).find('.dropdown-side').removeClass('show')
    });

    $(".navbar .search-form").on("click", ".search-icon", function () {

        $(".navbar .search-form").toggleClass("open");

        if ($(".navbar .search-form").hasClass('open')) {

            $(".search-form .close-search").slideDown();

        } else {

            $(".search-form .close-search").slideUp();
        }
    });

    $(".navbar").on("click", ".navbar-toggler", function () {

        $(".navbar .navbar-collapse").toggleClass("show");
    });

    function noScroll() {
        window.scrollTo(0, 0);
    }

    var open = false,
        navDark = $(".topnav.dark"),
        logoChan = $(".topnav.dark .logo img");

    $('.topnav .menu-icon').on('click', function () {
        open = !open;

        $('.hamenu').toggleClass("open");

        if (open) {

            $('.hamenu').animate({ top: 0 });

            $('.topnav .menu-icon').addClass('open');

            navDark.addClass("navlit");
            logoChan.attr('src', 'img/logo-light.png');


        } else {

            $('.hamenu').delay(300).animate({ top: "-100%" });

            $('.topnav .menu-icon').removeClass('open');

            navDark.removeClass("navlit");
            logoChan.attr('src', 'img/logo-dark.png');

        }
    });

    $('.hamenu .menu-links .main-menu > li .animsition-link').on('click', function () {
        $('.hamenu').removeClass("open");
    });

/* 12. scrollTop */

function inVisible(element) {
  var WindowTop = $(window).scrollTop();
  var WindowBottom = WindowTop + $(window).height();
  var ElementTop = element.offset().top;
  var ElementBottom = ElementTop + element.height();
  if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
    animate(element);
}

function animate(element) {
  if (!element.hasClass('ms-animated')) {
    var maxval = element.data('max');
    var html = element.html();
    element.addClass("ms-animated");
    $({
      countNum: element.html()
    }).animate({
      countNum: maxval
    }, {
      duration: 5000,
      easing: 'linear',
      step: function() {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function() {
        element.html(this.countNum + html);
      }
    });
  }

}

$(function() {
  $(window).scroll(function() {
    $("h2[data-max]").each(function() {
      inVisible($(this));
    });
  })
});
 let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#f0346e ${scrollValue}%, #fff ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// end