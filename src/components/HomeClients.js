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
            <h1>ĐỐI TÁC</h1>
            <h4>Hiện chúng tôi đang liên kết với những đối tác sau</h4>
          </div>
        </div>

        <div className="grid_3">
          <div className="imgclient fade-left animate1">
            <img alt="" src="img/clients/tugo-logo.png"/>
          </div>
        </div>

      </div>

    </section>
  );
}

export default HomeClients;
