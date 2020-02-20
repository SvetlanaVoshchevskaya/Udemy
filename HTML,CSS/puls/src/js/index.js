'use strict';
// slick-slider
$(document).ready(function() {
  //carousel
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
  //catalog tabs
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
  // cards link
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

  //Modal
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn();
  });
  $('.js-close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut();
  });
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__subtitle').text(
        $('.catalog-item__title')
          .eq(i)
          .text()
      );
      $('.overlay, #order').fadeIn();
    });
  });
  // validation form
  function validateForm(formId) {
    $(formId).validate({
      rules: {
        name: 'required',
        phone: { required: true, minlength: 10 },
        email: { required: true, email: true }
      },
      messages: {
        name: 'Пожалуйста введите Ваше имя',
        phone: {
          required: 'Пожалуйста введите Ваш телефон',
          minlength: jQuery.validator.format(
            'Номер телефона должен содержать {0}  цифр'
          )
        },
        email: {
          required: 'Пожалуйста введите Ваш e-mail',
          email: 'Ваш email должен быть в формате name@domain.com'
        }
      }
    });
  }
  validateForm('#consultation form');
  validateForm('#consultation-form');
  validateForm('#order form');
  $('input[name=phone]').mask('+7(999) 999-99-99');

  // sending form`s data
  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '../mailer/smart.php',
      data: $(this).serialize()
    }).done(function() {
      $(this)
        .find('input')
        .val('');
      $('#consultation , #order').fadeOut();
      $('.overlay , #thanks').fadeIn();
      $('form').trigger('reset');
    });
    return false;
  });
  //scroll and page-up
  $(window).scroll(function() {
    if ($(this).scrollTop() > 900) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
    $("a[href^='#']").click(function() {
      const _href = $(this).attr('href');
      $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
      return false;
    });
  });
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
