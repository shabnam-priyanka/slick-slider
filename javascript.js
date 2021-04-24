$(document).ready(function () {
  //slider-1
  $(".slider-1").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    fade: true,
    speed: 500,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    dots: true,
  });

  //  slider 2
  $(".slider-2").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    fade: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    dots: true,
  });
});
