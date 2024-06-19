jQuery(document).ready(function(){
    "user strick"
    $('.slider').ripples({
        dropRadius: 15,
        perturbance: 0.01,
      });
    
      $('.work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled: true
        }
      });

      $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        responsive:{
        0:{
          items: 1
        },
        480:{
          items: 2
        },
        768:{
          items: 3
        },
      }
      });

      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });

      $('a.smooth-scroll').smoothScroll();

      $("a.smooth-scroll").click(function(event){
        event.preventDefault();

        var section = $(this).attr("href");

        $('html, body').animate({
          scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
      });
})