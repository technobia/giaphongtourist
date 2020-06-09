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

        <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>

          <div className='grid_4 gridfooter'>
            <h4 style={{ marginBottom: 0 }}>CÔNG TY TNHH SX TM - DV DU LỊCH GIA PHONG</h4>
            <h5 style={{ marginTop: 0, marginBottom: "1rem" }}>GIA PHONG TRAVEL & TRADING</h5>
            <p style={{ marginBottom: 0 }}>120/35 Đường 59, Phường 14, Quận Gò Vấp, TP.HCM</p>
            <p style={{ marginBottom: 0 }}>Tel: (08) 2213 1291 - 2213 1292</p>
            <p style={{ marginBottom: 0 }}>Fax: (08) 6296 1757</p>
          </div>

          <div className='grid_4 gridfooter'>
            <h3>LIÊN HỆ</h3>
            <p>Anh Hùng: 0983.363.374<br />Anh Nam: 0918.574.027</p>
            <p>Email: <a href="mailto:giaphongtravel@gmail.com" style={{ color: "white" }}>giaphongtravel@gmail.com</a></p>
            <p className='socialfooter'>
              <a href='#'><img
                alt='' src='img/footer/facebook.jpg'
              /></a>
            </p>
          </div>

          {/*<div className='grid_4 gridfooter'>*/}
            {/*<h3>COMMENTS</h3>*/}

            {/*<div*/}
              {/*className='fb-comment-embed'*/}
              {/*data-href='https://www.facebook.com/zuck/posts/10102577175875681?comment_id=1193531464007751&amp;reply_comment_id=654912701278942'*/}
              {/*data-width=''*/}
              {/*data-include-parent='true'*/}
              {/*style={{ background: 'white' }}*/}
            {/*/>*/}

          {/*</div>*/}

        </div>

      </footer>

      <section id='copyright'>

        <div className='container'>

          <div className='grid_12'>
            <p>© Copyright 2020 by <a href="https://technobia.info" style={{ color: "white" }}>Binh Tran</a></p>
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
