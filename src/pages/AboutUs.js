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


          <div className="grid_6 blue fade-left animate1">
            <h2 className="titlewithborder"><span>OUR AGENCY</span></h2>
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

          <div className="grid_6 green fade-right animate1">
            <h2 className="titlewithborder"><span>OUR SKILLS</span></h2>
            <div className="dividerheight10"></div>
            <div className="progressbar green fade-right animate1">
              <h4 className="progressbartitle" style={{ width: '100%' }}><span>HONEYMOON - 100%</span>
              </h4>
            </div>
            <div className="progressbar red fade-right animate2">
              <h4 className="progressbartitle" style={{ width: '70%' }}><span>PACKAGE TOURS - 70%</span>
              </h4>
            </div>
            <div className="progressbar orange fade-right animate3">
              <h4 className="progressbartitle" style={{ width: '60%' }}><span>FLY AND DRIVE - 60%</span>
              </h4>
            </div>
            <div className="progressbar violet fade-right animate4">
              <h4 className="progressbartitle" style={{ width: '90%' }}><span>TRAVEL RELAX - 90%</span>
              </h4>
            </div>
          </div>

          <div className="grid_12"></div>

          <div className="grid_6 blue fade-left animate1">
            <h2 className="titlewithborder"><span>OUR TESTIMONIALS</span></h2>
            <div className="dividerheight20"></div>
            <div className="textevidence">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                cursus, elit vitae fermentum hendrerit, neque erat fringilla
                nibh, vel sodales sem diam nec nunc. <i>- John Doe -</i></p>
            </div>
            <br />
            <div className="textevidence">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                cursus, elit vitae fermentum hendrerit, neque erat fringilla
                nibh, vel sodales sem diam nec nunc. <i>- Jane Hope -</i></p>
            </div>
            <br />
            <div className="textevidence">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                cursus, elit vitae fermentum hendrerit, neque erat fringilla
                nibh, vel sodales sem diam nec nunc. <i>- Nick Spitch -</i></p>
            </div>

          </div>


          <div className="grid_6 blue fade-right animate1">
            <h2 className="titlewithborder"><span>OUR FEATURES</span></h2>

            <div className="dividerheight20"></div>

            <div className="accordion accordionlight">

              <h4 className="blue-borderleft firstaccordiontitle">CREATIVE</h4>
              <div>
                <p>
                  Mauris mauris ante, blandit et, ultrices a, suscipit eget,
                  quam. Integer
                  ut neque. Vivamus nisi metus, molestie vel, gravida in,
                  condimentum sit
                  amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin
                  viverra leo ut
                  odio. Curabitur malesuada. Vestibulum a velit eu ante
                  scelerisque vulputate.
                </p>
              </div>

              <h4 className="green-borderleft">DYNAMIC</h4>
              <div>
                <p>
                  Mauris mauris ante, blandit et, ultrices a, suscipit eget,
                  quam. Integer
                  ut neque. Vivamus nisi metus, molestie vel, gravida in,
                  condimentum sit
                  amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin
                  viverra leo ut
                  odio. Curabitur malesuada. Vestibulum a velit eu ante
                  scelerisque vulputate.
                </p>
              </div>

              <h4 className="orange-borderleft">PROFESSIONAL</h4>
              <div>
                <p>
                  Mauris mauris ante, blandit et, ultrices a, suscipit eget,
                  quam. Integer
                  ut neque. Vivamus nisi metus, molestie vel, gravida in,
                  condimentum sit
                  amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin
                  viverra leo ut
                  odio. Curabitur malesuada. Vestibulum a velit eu ante
                  scelerisque vulputate.
                </p>

              </div>

            </div>

          </div>


          <div className="grid_12 orange">
            <br /><h2 className="titlewithborder"><span>MEET OR TEAM</span></h2>
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

          <div className="grid_3">
            <div className="member green fade-left animate3">
              <div className="imgmember">
                <img
                  alt="" className="opacity" src="img/team/member/member3.jpg"
                />
              </div>
              <h4 className="membername">JULIETTE LIGHT</h4>
              <p className="memberposition"><i>Sales Agent</i></p>
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
            <div className="member red fade-left animate4">
              <div className="imgmember">
                <img
                  alt="" className="opacity" src="img/team/member/member4.jpg"
                />
              </div>
              <h4 className="membername">MARK SPITCH</h4>
              <p className="memberposition"><i>Sales Agent</i></p>
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
            <br /><h2 className="titlewithborder"><span>OUR CLIENTS</span></h2>
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

      <div className="divider"><span/></div>
    </>
  );
};

export default AboutUs;
