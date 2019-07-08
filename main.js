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
        backgroundPosition: "50% 70%",
        ease: Linear.easeNone
    })
    //.addIndicators() // for debugging purposes
    .addTo(controller);

// About Section
new ScrollMagic.Scene({
        triggerElement: "#slideAbout",
        triggerHook: "onLeave",
    })
    .setPin("#slideAbout")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// Experiences Section
new ScrollMagic.Scene({
        triggerElement: "#slideExperiences",
        triggerHook: "onLeave",
    })
    .setPin("#slideExperiences")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// Education Section
new ScrollMagic.Scene({
        triggerElement: "#slideEducation",
        triggerHook: "onLeave",
    })
    .setPin("#slideEducation")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// Skills Section  
new ScrollMagic.Scene({
        triggerElement: "#slideSkills",
        triggerHook: "onLeave",
    })
    .setPin("#slideSkills")
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// Interests Section  
new ScrollMagic.Scene({
        triggerElement: "#slideInterests",
        triggerHook: "onLeave",
    })
    .setPin("#slideInterests")
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
