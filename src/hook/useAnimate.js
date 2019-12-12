import { useEffect } from 'react';

export default function useAnimate() {
  useEffect(() => {
    const $ = window.jQuery;
    $('.fade-up').bind('inview', function(event, visible) {
      if (visible == true) {
        $(this).addClass('animated fadeInUp');
      }
    });


    $('.fade-down').bind('inview', function(event, visible) {
      if (visible == true) {
        $(this).addClass('animated fadeInDown');
      }
    });


    $('.fade-left').bind('inview', function(event, visible) {
      if (visible == true) {
        $(this).addClass('animated fadeInLeft');
      }
    });


    $('.fade-right').bind('inview', function(event, visible) {
      if (visible == true) {
        $(this).addClass('animated fadeInRight');
      }
    });


    $('.bounce-in').bind('inview', function(event, visible) {
      if (visible == true) {
        $(this).addClass('animated bounceIn');
      }
    });


    $('.rotate-In-Down-Left').bind('inview', function(event, visible) {
      if (visible == true) {
        $(this).addClass('animated rotateInDownLeft');
      }
    });

    $('.rotate-In-Down-Right').bind('inview', function(event, visible) {
      if (visible == true) {
        $(this).addClass('animated rotateInDownRight');
      }
    });
  });
}
