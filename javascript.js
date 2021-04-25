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

  // slider 3
  $(".slider-3").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 500,
    dots: true,
  });
});
