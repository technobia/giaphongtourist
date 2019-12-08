import React, { useEffect } from 'react';

const HomeClients = () => {
  useEffect(() => {
    const $ = window.jQuery;
    $('.fade-left').bind('inview', function(event, visible) {
      if (visible) {
        $(this).addClass('animated fadeInLeft');
      }
    });
  });
  return (
    <section className="sectionhome">

      <div className="container clearfix">

        <div className="grid_12">
          <div className="titlesection">
            <h1>TOUR OPERATORS</h1>
            <h4>LOREM IPSUM DOLOR SIT AMET CONSECTEUR ADIP</h4>
          </div>
        </div>

        <div className="grid_3">
          <div className="imgclient fade-left animate1">
            <img alt="" src="img/clients/client1.png"/>
          </div>
        </div>

        <div className="grid_3">
          <div className="imgclient fade-left animate2">
            <img alt="" src="img/clients/client2.png"/>
          </div>
        </div>

        <div className="grid_3">
          <div className="imgclient fade-left animate3">
            <img alt="" src="img/clients/client3.png"/>
          </div>
        </div>

        <div className="grid_3">
          <div className="imgclient fade-left animate4">
            <img alt="" src="img/clients/client4.png"/>
          </div>
        </div>

      </div>

    </section>
  );
}

export default HomeClients;
