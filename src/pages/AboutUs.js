import React from 'react';
import useAnimate from '../hook/useAnimate';

const AboutUs = () => {
  useAnimate();

  return (
    <>
      <section className="header-page fade-up header-page-about-us">
        <div className="bounce-in animate4"><h2 className="header-pagetitle">GIỚI THIỆU<br /><span className="header-pagedescription">Về chúng tôi</span>
        </h2></div>
      </section>

      <div className="divider"><span/></div>

      <section id="internalpage">

        <div className="container clearfix">


          <div className="grid_12 blue fade-left animate1">
            <h2 className="titlewithborder"><span>VỀ CHÚNG TÔI</span></h2>
            <div className="dividerheight20"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus, elit vitae fermentum hendrerit, neque erat fringilla nibh,
              vel sodales sem diam nec nunc. Donec mattis blandit metus ut
              volutpat. Quisque orci lectus, sodales at cursus et, gravida quis
              nisl. Donec mattis blandit metus ut volutpat. Quisque orci lectus,
              sodales at cursus et, gravida quis nisl</p><br />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus, elit vitae fermentum hendrerit, neque erat fringilla nibh,
              vel sodales sem diam nec nunc. Donec mattis blandit metus ut
              volutpat. Quisque orci lectus, sodales at cursus et, gravida quis
              nisl. Donec mattis blandit metus ut volutpat. Quisque orci lectus,
              sodales at cursus et, gravida quis nisl</p>
          </div>


          <div className="grid_12 orange">
            <br /><h2 className="titlewithborder"><span>ĐỘI NGŨ</span></h2>
          </div>

          <div className="grid_3">
            <div className="member orange fade-left animate1">
              <div className="imgmember">
                <img
                  alt="" className="opacity" src="img/team/member/member1.jpg"
                />
              </div>
              <h4 className="membername">JANE MC DOE</h4>
              <p className="memberposition"><i>Owner</i></p>
              <p className="memberdescription">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus ut cursus eros. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.</p>
              <div className="socialmember">
                <ul>
                  <li><a title="Facebook" className="tooltip" href="#"><img
                    alt="" src="img/team/facebook.png"
                  /></a></li>
                  <li><a title="Twitter" className="tooltip" href="#"><img
                    alt="" src="img/team/twitter.png"
                  /></a></li>
                  <li><a title="Instagram" className="tooltip" href="#"><img
                    alt="" src="img/team/instagram.png"
                  /></a></li>
                  <li><a title="Dribble" className="tooltip" href="#"><img
                    alt="" src="img/team/dribble.png"
                  /></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid_3">
            <div className="member blue fade-left animate2">
              <div className="imgmember">
                <img
                  alt="" className="opacity" src="img/team/member/member2.jpg"
                />
              </div>
              <h4 className="membername">NICK HOPE</h4>
              <p className="memberposition"><i>Cofounder</i></p>
              <p className="memberdescription">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Vivamus ut cursus eros. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.</p>
              <div className="socialmember">
                <ul>
                  <li><a title="Facebook" className="tooltip" href="#"><img
                    alt="" src="img/team/facebook.png"
                  /></a></li>
                  <li><a title="Twitter" className="tooltip" href="#"><img
                    alt="" src="img/team/twitter.png"
                  /></a></li>
                  <li><a title="Instagram" className="tooltip" href="#"><img
                    alt="" src="img/team/instagram.png"
                  /></a></li>
                  <li><a title="Dribble" className="tooltip" href="#"><img
                    alt="" src="img/team/dribble.png"
                  /></a></li>
                </ul>
              </div>
            </div>
          </div>


          <div className="grid_12 blue">
            <br /><h2 className="titlewithborder"><span>ĐỐI TÁC</span></h2>
          </div>

          <div className="grid_3">
            <div className="imgclient fade-left animate1">
              <img alt="" src="img/clients/tugo-logo.png"/>
            </div>
          </div>


        </div>


      </section>

      <div className="divider"><span/></div>
    </>
  );
};

export default AboutUs;
