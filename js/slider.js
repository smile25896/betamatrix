$(document).on('ready', function() {
  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 3
  });
});

$(document).on('ready', function() {
  $(".category").slick({
    dots: false,
    infinite: false,
    centerMode: false,
    variableWidth: true,
    // slidesToShow: 8,
    slidesToScroll: 3
  });
});