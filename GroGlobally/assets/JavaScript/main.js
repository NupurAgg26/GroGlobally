
$(window).on("load",function() {
    $(".Preloader").fadeOut("slow"); 
});


$(document).ready(function() {
    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } 
        else {
            $(".navbar").removeClass("navbar-shrink");
            }
        });


    $('.about-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    $.scrollIt({
        topOffset: -50
    });

    $(".nav-link").on("click",function () {
        $(".navbar-collapse").collapse("hide"); 
    });
    function toggleTheme() {
        if (localStorage.getItem("shala-theme") !== null) {
            if (localStorage.getItem("shala-theme") === "dark") {
               $("body").addClass("dark"); 
            } 
            else {
                $("body").removeClass("dark");    
            }
        }
        updateIcon();
    }
    toggleTheme();

    $(".toogle-theme").on("click",function() {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("shala-theme","dark");
            
        } else {
            localStorage.setItem("shala-theme","light");
        }
        updateIcon();
    });

    function updateIcon() {
      if ($("body").hasClass("dark")){
          $(".toggle-theme i").removeClass("fa-moon");
          $(".toggle-theme i").addClass("fa-sun");    
      } 
      else {
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");         
      }  
    }
});