var mainSlider;

$(document).ready(function() {

  mainSlider = $('.owl-carousel');

  mainSlider.owlCarousel({
    autoplay: true,
    autoplayTimeout: 4000,
    lazyLoad: true,
    loop: true,
    items: 1,
    dots:true,
    smartSpeed: 500
  });

  mainSlider.on('changed.owl.carousel', function(property) {
    var current = property.item.index;
    var prev = $(property.target).find(".owl-item").eq(current).prev().find(".item").attr('data-navipicture');
    var next = $(property.target).find(".owl-item").eq(current).next().find(".item").attr('data-navipicture');

    $('.navPrev').find('img').attr('src', prev);
    $('.navNext').find('img').attr('src', next);
  });

});

$('.navNext').on('click', function() {
  mainSlider.trigger('next.owl.carousel', [300]);
  return false;
});

$('.navPrev').on('click', function() {
  mainSlider.trigger('prev.owl.carousel', [300]);
  return false;
});