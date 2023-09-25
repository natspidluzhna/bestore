$(document).ready(function () {
  $(".slider").slick({
    autoplay: true,
    fade: true,
    speed: 1000,
    dots: true,
    arrows: false,
  });
});

/* ========== slick slider on the article =====================*/
$(document).ready(function () {
  $(".article-slider .content").css("display", "flex");
  $(".article-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".icon-arrow-left"),
    nextArrow: $(".icon-arrow-right"),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
