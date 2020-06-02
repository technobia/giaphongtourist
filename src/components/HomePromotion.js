import React, { useEffect } from 'react';

const HomePromotion = () => {
  useEffect(() => {
    const $ = window.jQuery;
    $('.bounce-in').bind('inview', function(event, visible) {
      if (visible) {
        $(this).addClass('animated bounceIn');
      }
    });

    $('.rotate-In-Down-Left').bind('inview', function(event, visible) {
      if (visible) {
        $(this).addClass('animated rotateInDownLeft');
      }
    });

    $('.rotate-In-Down-Right').bind('inview', function(event, visible) {
      if (visible) {
        $(this).addClass('animated rotateInDownRight');
      }
    });
  });

  return (
    <section className="sectionhome" id="homepromotions">

      <div className="container clearfix">

        <div className="grid_4">
          {/*<a className="btnpromotion rotate-In-Down-Left animate1" href="#"><p*/}
            {/*className="blue"*/}
          {/*>LAST MINUTE</p></a>*/}
          &nbsp;
        </div>

        <div className="grid_4">
          <h1 className="bounce-in animate2">KHUYẾN MÃI</h1>
          <h4 className="bounce-in animate3">NỘI DUNG KHUYẾN MÃI ĐANG ĐƯỢC CẬP NHẬT...</h4>
        </div>

        <div className="grid_4">
          {/*<a className="btnpromotion rotate-In-Down-Right animate1" href="#"><p*/}
            {/*className="green"*/}
          {/*>PROMOTIONS</p></a>*/}
          &nbsp;
        </div>

      </div>

    </section>
  );
}

export default HomePromotion;
