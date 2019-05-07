var m_open = false;

$(".ham-menu").on("click", function(){
  $(this).toggleClass("open");
  $(".mobile-nav-wrapper").slideToggle();
});

$(window).resize(function(){
  if($(window).width() > 850){
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
      if($(this).scrollTop() > 1000) {
        console.log("1000");
      }
    }
  }
});

$(".logo-wrapper").on("click", function(){
  if(m_open == false){
    m_open = true;
    $("body").append("<div class='info-modal'><span class='close-modal' onclick='closeModal()'><span></span><span></span></span></div>");
  }
});

function closeModal(){
  if(m_open == true){
    m_open = false;
    $(".info-modal").remove();
  }
}