/*
 * Author: matchthemes.com
 *
 */

(function ($) {
  'use strict';

  $(window).on('scroll', function () {
    if ($(document).scrollTop() > 10) {
      $('.headerHolder, .headerHolder5').addClass('nav-fixed-top');
    } else {
      $('.headerHolder, .headerHolder5').removeClass('nav-fixed-top');
    }
  });

  // home slider
  $('.home-slider, .testimonial-slider').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
  });

  $('.home-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    navText: '',
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },

      1024: {
        items: 4,
      },
    },
  });

  //mobile menu
  $('.nav-button').on('click', function (e) {
    e.preventDefault();

    $('.mobile-menu-holder, .menu-mask').addClass('is-active');
    $('body').addClass('has-active-menu');
  });

  $('.exit-mobile, .menu-mask').on('click', function (e) {
    e.preventDefault();

    $('.mobile-menu-holder, .menu-mask').removeClass('is-active');
    $('body').removeClass('has-active-menu');
  });

  // $('.menu-mobile > li.menu-item-has-children > a').on('click', function(e){

  // 			e.preventDefault();
  // 			e.stopPropagation();

  // 			if ( $(this).parent().hasClass('menu-open') )

  // 			$(this).parent().removeClass('menu-open');

  // 			else {

  // 			$(this).parent().addClass('menu-open');

  // 			}

  // 			}); // --------------------> function to Add class .menu-open for mobile, blocked <-----------------------------

  // end mobile menu

  // menu edge screen turn left

  $('.menu-nav li').on('mouseenter mouseleave', function (e) {
    if ($('ul', this).length) {
      var elm = $('.sub-menu', this);
      var off = elm.offset();
      var l = off.left;
      var w = elm.width();
      var docW = $(window).width();

      var isEntirelyVisible = l + w <= docW;

      if (!isEntirelyVisible) {
        $(this).addClass('edge');
      } else {
        $(this).removeClass('edge');
      }
    }
  });
  $(document).ready(function () {
    var current = location.pathname.split('/').slice(-1)[0]; // Gets the last part of the URL path
    $('#idiomas li a').each(function () {
      var $this = $(this);
      // if the current path is like this link, make it active
      if ($this.attr('href').indexOf(current) !== -1) {
        $('#idiomas li').removeClass('current-menu-item'); // remove from all menu items
        $this.parent().addClass('current-menu-item'); // add to this one
      }
    });
  });
  //gallery

  $('.gallery-post a').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  // faq

  $('h4.faq-title').on('click', function () {
    if ($(this).next().is(':hidden')) {
      $(this).toggleClass('active').next().slideDown();
    } else {
      $(this).removeClass('active').next().slideUp();
    }
    return false;
  });

  //fluid width videos

  $('.single-post-content, .custom-page-template, .post-video').fitVids({
    customSelector: "iframe[src^='https://w.soundcloud.com']",
  });

  // accordion menu

  $('.menu-section').hide();

  $('.menu-title-section').on('click', function () {
    if ($(this).next().is(':hidden')) {
      $('.menu-title-section').removeClass('active').next().slideUp();
      $(this).toggleClass('active').next().slideDown();
    } else {
      $('.menu-title-section').removeClass('active').next().slideUp();
    }
    return false;
  });
  // Assuming you're using Bootstrap's tabs
  $('.dropdown-menu a').on('click', function (e) {
    e.preventDefault();

    // Remove active state from all tabs
    $('.dropdown-menu a').each(function () {
      $(this).attr('aria-selected', 'false');
    });

    // Set the clicked tab to active
    $(this).attr('aria-selected', 'true');

    // Show the corresponding tab pane
    var tab = $(this).attr('href');
    $('.tab-pane').removeClass('active').removeClass('show');
    $(tab).addClass('active').addClass('show');
  });

  $('.dropdown-menu a').on('click', function (e) {
    e.preventDefault();

    // Remove the 'active' class from all dropdown items
    $('.dropdown-menu a').removeClass('active').attr('aria-selected', 'false');

    // Add the 'active' class to the clicked item and set 'aria-selected' to true
    $(this).addClass('active').attr('aria-selected', 'true');

    // Show the corresponding tab pane
    var tab = $(this).attr('href');
    $('.tab-pane').removeClass('active show');
    $(tab).addClass('active show');
  });

  // end accordion menu

  //scroll up button

  $('.scrollup').hide();
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 400) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $("a.scrolltop[href^='#']").on('click', function (e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').stop().animate({ scrollTop: 0 }, 1000, 'easeOutExpo');
  });
})(jQuery);
