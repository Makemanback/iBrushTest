$(document).ready(function(){
  $('.slick').slick( {
    arrows: false,
    dots: true,
    dotsClass: 'slick__dot',
  });
});

window.addEventListener("resize", function() {
  if (window.innerWidth >= 768) {
    $('.slick').slick('unslick');
    sliderIsLive = false;
  }
  else {
    if (sliderIsLive) {
      $('.slick').slick();
      sliderIsLive = true;
    }
  }
});
