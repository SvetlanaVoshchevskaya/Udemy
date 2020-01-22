'use strict';
// slick-slider
$(document).ready(function() {
  $('.carousel__inner').slick({
    speed: 1200,
    // adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png"/></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png"/> </button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active')
      .siblings()
      .removeClass('catalog__tab_active')
      .closest('div.container')
      .find('div.catalog__content')
      .removeClass('catalog__content_active')
      .eq($(this).index())
      .addClass('catalog__content_active');
  });

  function changeClass(itemClass) {
    $(itemClass).each(function(indx) {
      $(this).on('click', function(event) {
        event.preventDefault();
        $('.catalog-item__front-side')
          .eq(indx)
          .toggleClass('catalog-item__front-side_active');
        $('.catalog-item__back-side')
          .eq(indx)
          .toggleClass('catalog-item__back-side_active');
      });
    });
  }
  changeClass('.catalog-item__link');
  changeClass('.catalog-item__back');
});




//tyni-slider pure js
// var slider = tns({
//   container: '.carousel__inner',
//   items: 1,
//   slideBy: 'page',
//   controls: false,
//   nav: false
// });

// document.querySelector('.prev').addEventListener('click', function() {
//   slider.goTo('prev');
// });

// document.querySelector('.next').addEventListener('click', function() {
//   slider.goTo('next');
// });
