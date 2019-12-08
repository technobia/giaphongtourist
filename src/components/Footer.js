import React from 'react';

const Footer = () => {
  return (
    <>
      <footer id="footer">

        <div className="container clearfix">

          <div className="grid_3 gridfooter">
            <h3>LOVE TRAVEL</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu lorem, mattis quis convallis ac</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu lorem, mattis quis convallis ac</p>
          </div>

          <div className="grid_3 gridfooter">
            <h3>CONTACTS</h3>
            <p>Address: Broadway Road 234 - 35127<br />Phone: +001 3072341187<br />Mail: info@lovetravel.com</p>
            <p className="socialfooter"><a href="#"><img alt="" src="img/footer/facebook.jpg" /></a><a href="#"><img alt="" src="img/footer/dribble.jpg" /></a><a href="#"><img alt="" src="img/footer/twitter.jpg" /></a><a href="#"><img alt="" src="img/footer/instagram.jpg" /></a><a href="#"><img alt="" src="img/footer/google.jpg" /></a></p>
          </div>

          <div className="grid_3 gridfooter">
            <h3>TWEET</h3>

            <div id="tweets"></div>

          </div>

          <div className="grid_3 gridfooter">
            <h3>NEWSLETTER</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu lorem, mattis quis convallis ac</p>

            <form className="newsletterfooter">
              <input type="text" />
              <input type="submit" />
            </form>

          </div>

        </div>

      </footer>

      <section id="copyright">

        <div className="container">

          <div className="grid_12">
            <p>© Copyright 2013 by Nicdark - All Rights Reserved</p>
          </div>

        </div>

        <div className="backtotop">
          <a href="#startpage"><img alt="" src="img/footer/arrowbacktotop.png" /></a>
        </div>

      </section>
    </>
  )
};

export default Footer;
