import React, { useEffect } from 'react';

const HomeShowbiz = () => {
  useEffect(() => {
    const $ = window.jQuery;
    //start carousel
    $(document).ready(function() {

      $('.showbiz-container').showbizpro({
        dragAndScroll: 'on',
        visibleElementsArray: [4, 3, 2, 1],
      });

      $('.fade-down').bind('inview', function(event, visible) {
        if (visible) {
          $(this).addClass('animated fadeInDown');
        }
      });

    });
    //end carousel
  });
  return (
    <section className='sectionhome fade-down'>
      <div className='showbiz-container fullwidth nopaddings '>

        <div className='showbiz sb-modern-skin'>
          <div className='overflowholder'>
            <ul>

              <li className='sb-modern-skin'>

                <div className='mediaholder'>
                  <div className='mediaholder_innerwrap'>
                    <img
                      alt='' src='img/gallery/masonry/little/img2-vertical.jpg'
                    />
                  </div>
                </div>

                <div className='darkhover' />

                <div className='detailholder blue'>
                  <div className='showbiz-title'>LOREM IPSUM DOLOR SIT AMET<span
                    className='bulletgallery'
                  /></div>

                  <p className='excerpt'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className='sb-readmore'>
                    <a href='#'>READ MORE</a>
                  </div>

                  <div className='sb-clear' />
                </div>

              </li>

              <li className='sb-modern-skin'>

                <div className='mediaholder'>
                  <div className='mediaholder_innerwrap'>
                    <img
                      alt='' src='img/gallery/masonry/little/img6-vertical.jpg'
                    />
                  </div>
                </div>

                <div className='darkhover' />

                <div className='detailholder green'>
                  <div className='showbiz-title'>LOREM IPSUM DOLOR SIT AMET<span
                    className='bulletgallery'
                  /></div>

                  <p className='excerpt'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className='sb-readmore'>
                    <a href='#'>READ MORE</a>
                  </div>

                  <div className='sb-clear' />
                </div>

              </li>

              <li className='sb-modern-skin'>

                <div className='mediaholder'>
                  <div className='mediaholder_innerwrap'>
                    <img
                      alt='' src='img/gallery/masonry/little/img9-vertical.jpg'
                    />
                  </div>
                </div>

                <div className='darkhover' />

                <div className='detailholder violet'>
                  <div className='showbiz-title'>LOREM IPSUM DOLOR SIT AMET<span
                    className='bulletgallery'
                  /></div>

                  <p className='excerpt'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className='sb-readmore'>
                    <a href='#'>READ MORE</a>
                  </div>

                  <div className='sb-clear' />
                </div>

              </li>

              <li className='sb-modern-skin'>

                <div className='mediaholder'>
                  <div className='mediaholder_innerwrap'>
                    <img
                      alt='' src='img/gallery/masonry/little/img2-vertical.jpg'
                    />
                  </div>
                </div>

                <div className='darkhover' />

                <div className='detailholder blue'>
                  <div className='showbiz-title'>LOREM IPSUM DOLOR SIT AMET<span
                    className='bulletgallery'
                  /></div>

                  <p className='excerpt'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className='sb-readmore'>
                    <a href='#'>READ MORE</a>
                  </div>

                  <div className='sb-clear' />
                </div>

              </li>

              <li className='sb-modern-skin'>

                <div className='mediaholder'>
                  <div className='mediaholder_innerwrap'>
                    <img
                      alt='' src='img/gallery/masonry/little/img6-vertical.jpg'
                    />
                  </div>
                </div>

                <div className='darkhover'></div>

                <div className='detailholder green'>
                  <div className='showbiz-title'>LOREM IPSUM DOLOR SIT AMET<span
                    className='bulletgallery'
                  /></div>

                  <p className='excerpt'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className='sb-readmore'>
                    <a href='#'>READ MORE</a>
                  </div>

                  <div className='sb-clear' />
                </div>

              </li>

              <li className='sb-modern-skin'>

                <div className='mediaholder'>
                  <div className='mediaholder_innerwrap'>
                    <img
                      alt='' src='img/gallery/masonry/little/img9-vertical.jpg'
                    />
                  </div>
                </div>

                <div className='darkhover' />

                <div className='detailholder violet'>
                  <div className='showbiz-title'>LOREM IPSUM DOLOR SIT AMET<span
                    className='bulletgallery'
                  /></div>

                  <p className='excerpt'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className='sb-readmore'>
                    <a href='#'>READ MORE</a>
                  </div>

                  <div className='sb-clear' />
                </div>

              </li>

              <li className='sb-modern-skin'>

                <div className='mediaholder'>
                  <div className='mediaholder_innerwrap'>
                    <img
                      alt='' src='img/gallery/masonry/little/img2-vertical.jpg'
                    />
                  </div>
                </div>

                <div className='darkhover' />

                <div className='detailholder blue'>
                  <div className='showbiz-title'>LOREM IPSUM DOLOR SIT AMET<span
                    className='bulletgallery'
                  /></div>

                  <p className='excerpt'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className='sb-readmore'>
                    <a href='#'>READ MORE</a>
                  </div>

                  <div className='sb-clear' />
                </div>

              </li>

            </ul>

            <div className='sbclear' />
          </div>
          <div className='sbclear' />
        </div>
      </div>
    </section>
  );
};

export default HomeShowbiz;