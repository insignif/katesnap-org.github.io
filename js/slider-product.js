$('.sl').slick({
  slidesToShow: 1,
  arrows: true,
  dots: false,
  asNavFor: '.sl-2',
  draggable: false,

});


$('.sl-2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sl',
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
  draggable: true,
});


