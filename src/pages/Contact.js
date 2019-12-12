import React from 'react';
import useAnimate from '../hook/useAnimate';

const Contact = () => {
  useAnimate();
  return (
    <>
      <section id="internalpage" style={{ marginTop: 100 }}>

        <div className="container clearfix">

          <div className="grid_6 violet fade-left">
            <h2 className="titlewithborder"><span>OUR FEATURES</span></h2>

            <div className="dividerheight20"></div>

            <div className="accordion accordionlight">

              <h4
                className="violet-borderleft firstaccordiontitle"
              >CREATIVE</h4>
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

              <h4 className="violet-borderleft">DYNAMIC</h4>
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

              <h4 className="violet-borderleft">PROFESSIONAL</h4>
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

          <div className="grid_6 blue fade-up">
            <h2 className="titlewithborder"><span>OUR AGENCY</span></h2>
            <div className="dividerheight20"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus, elit vitae fermentum hendrerit, neque erat fringilla nibh,
              vel sodales sem diam nec nunc. Donec mattis blandit metus ut
              volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</p><br />
            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin cursus, elit vitae fermentum hendrerit, neque erat fringilla
              nibh, vel sodales sem diam nec nunc.
            </blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus, elit vitae fermentum hendrerit, neque erat fringilla nibh,
              vel sodales sem diam nec nunc. Donec mattis blandit metus ut
              volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Proin cursus, elit vitae fermentum hendrerit.</p>

          </div>

        </div>

      </section>

      <div className="divider"><span></span></div>
    </>
  );
};

export default Contact;
