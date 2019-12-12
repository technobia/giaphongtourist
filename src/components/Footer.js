import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const $ = window.$;
    $('#tweets').twitterFeed({
      url: 'http://www.your-site.xx/js/twitter/twitterfeed.php', //insert here your twitterfeed.php url, see the documentation
    });
  });
  return (
    <>
      <footer id='footer'>

        <div className='container clearfix'>

          <div className='grid_4 gridfooter'>
            <h3>LOVE TRAVEL</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              arcu lorem, mattis quis convallis ac</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              arcu lorem, mattis quis convallis ac</p>
          </div>

          <div className='grid_4 gridfooter'>
            <h3>CONTACTS</h3>
            <p>Address: Broadway Road 234 - 35127<br />Phone: +001
              3072341187<br />Mail: info@lovetravel.com</p>
            <p className='socialfooter'>
              <a href='#'><img
                alt='' src='img/footer/facebook.jpg'
              /></a>
            </p>
          </div>

          <div className='grid_4 gridfooter'>
            <h3>COMMENTS</h3>

            <div
              className='fb-comment-embed'
              data-href='https://www.facebook.com/zuck/posts/10102577175875681?comment_id=1193531464007751&amp;reply_comment_id=654912701278942'
              data-width=''
              data-include-parent='true'
              style={{ background: 'white' }}
            />

          </div>

        </div>

      </footer>

      <section id='copyright'>

        <div className='container'>

          <div className='grid_12'>
            <p>© Copyright 2013 by Nicdark - All Rights Reserved</p>
          </div>

        </div>

        <div className='backtotop'>
          <a href='#startpage'><img
            alt='' src='img/footer/arrowbacktotop.png'
          /></a>
        </div>

      </section>
    </>
  );
};

export default Footer;
