var m_open = false;

$(".ham-menu").on("click", function() {
  $(this).toggleClass("open");
  $(".mobile-nav-wrapper").slideToggle();
});

$(window).resize(function() {
  if ($(window).width() > 850) {
    $(".mobile-nav-wrapper").slideUp();
    $(".ham-menu").removeClass("open");
  }
});

$(window).scroll(function() {
  if ($(this).width() < 1800) {
    if ($(this).height() <= 768) {
      if ($(this).scrollTop() < 500) {
        console.log("500");
      }
      if ($(this).scrollTop() > 1000) {
        console.log("1000");
      }
    }
  }
});