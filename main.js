// Scrollmagic
$(function() {
    var controller = new ScrollMagic.Controller();
       // Parallax background
new ScrollMagic.Scene({
        triggerElement: "#parallax",
        triggerHook: "onEnter",
    })
    .duration('200%')
    .setTween("#parallax", {
        backgroundPosition: "40% 100%",
        ease: Linear.easeNone
    })
    //.addIndicators() // for debugging purposes
    .addTo(controller);

new ScrollMagic.Scene({
        triggerElement: "#slidein",
        triggerHook: "onLeave",
    })
    .setPin("#slidein")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

});

// Initialize AOS
$(function() {
   AOS.init({
      once: true
   })
});

// Changing colour of navbar when scrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    }
    else {
      $(".navbar").removeClass("scrolled");
    }
  });
