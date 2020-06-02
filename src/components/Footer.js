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
            <h3>GIA PHONG TOURIST</h3>
            <p>Chúng tôi chuyên cung cấp vào hỗ trợ tư vấn các tour du lịch trong nước và nước ngoài với gia cạnh tranh cùng đội ngũ dày dặn kinh nghiệm.</p>
            <p>Chúng tôi cam kết sẽ đem đến cho các bạn một chuyến đi đầy trải nghiệm vào ấn tượng.</p>
          </div>

          <div className='grid_4 gridfooter'>
            <h3>LIÊN HỆ</h3>
            <p>Anh Hùng: 0983.363.374<br />Anh Nam: 0918.574.027</p>
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
