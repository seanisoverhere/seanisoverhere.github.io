// Changing colour of navbar when scrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
    }
    else {
      $(".navbar").removeClass("scrolled");
    }
  });
