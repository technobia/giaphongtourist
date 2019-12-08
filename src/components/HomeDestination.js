import React, { useEffect } from 'react';

const HomeDestination = () => {
  useEffect(() => {
    const $ = window.jQuery;
    $('.fade-left').bind('inview', function(event, visible) {
      if (visible) {
        $(this).addClass('animated fadeInLeft');
      }
    });


    $('.fade-right').bind('inview', function(event, visible) {
      if (visible) {
        $(this).addClass('animated fadeInRight');
      }
    });
  });
  return (
    <section id='homedestinations'>

      <div className='container arrowscarousel yellow clearfix'>

        <div className='grid_6'>
          <div id='showbiz_left_2' className='arrowcarouselprev fade-right'/>
        </div>
        <div className='grid_6'>
          <div id='showbiz_right_2' className='arrowcarouselnext fade-left'/>
        </div>

      </div>

      <div className='container clearfix showbiz-container'>


        <div
          className='showbiz' data-left='#showbiz_left_2'
          data-right='#showbiz_right_2' data-play='#showbiz_play_2'
        >
          <div className='overflowholder'>
            <ul>


              <li>
                <div className='destinationcarousel single-carousel'>

                  <img
                    alt='' className='imgdestination'
                    src='img/destinations/destination1.jpg'
                  />

                  <div className='avatarandtitle'>

                    <div className='avatardestination'>
                      <img alt='' src='img/destinations/avatar1.jpg' />
                    </div>

                    <p className='titledestination'>
                      <a href='#'>Phuket - Thailandia</a>
                    </p>

                  </div>

                  <p className='descriptiondestination'>Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Quisque</p>

                  <div className='infodestination'>

                    <div className='viewdestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/viewicon.png'
                                        />
                                        234
                                    </span>
                    </div>

                    <div className='likedestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/likeicon.png'
                                        />
                                        234
                                    </span>
                    </div>

                    <div className='commentsdestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/commenticon.png'
                                        />
                                        234
                                    </span>
                    </div>

                  </div>

                </div>
              </li>


              <li>
                <div className='destinationcarousel single-carousel'>

                  <img
                    alt='' className='imgdestination'
                    src='img/destinations/destination2.jpg'
                  />

                  <div className='avatarandtitle'>

                    <div className='avatardestination'>
                      <img alt='' src='img/destinations/avatar2.jpg' />
                    </div>

                    <p className='titledestination'>
                      <a href='#'>Venice - Italy</a>
                    </p>

                  </div>

                  <p className='descriptiondestination'>Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Quisque</p>

                  <div className='infodestination'>

                    <div className='viewdestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/viewicon.png'
                                        />
                                        234
                                    </span>
                    </div>

                    <div className='likedestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/likeicon.png'
                                        />
                                        234
                                    </span>
                    </div>

                    <div className='commentsdestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/commenticon.png'
                                        />
                                        234
                                    </span>
                    </div>

                  </div>

                </div>
              </li>


              <li>
                <div className='destinationcarousel single-carousel'>

                  <img
                    alt='' className='imgdestination'
                    src='img/destinations/destination3.jpg'
                  />

                  <div className='avatarandtitle'>

                    <div className='avatardestination'>
                      <img alt='' src='img/destinations/avatar3.jpg' />
                    </div>

                    <p className='titledestination'>
                      <a href='#'>Temple - Thailand</a>
                    </p>

                  </div>

                  <p className='descriptiondestination'>Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Quisque</p>

                  <div className='infodestination'>

                    <div className='viewdestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/viewicon.png'
                                        />
                                        234
                                    </span>
                    </div>

                    <div className='likedestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/likeicon.png'
                                        />
                                        234
                                    </span>
                    </div>

                    <div className='commentsdestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/commenticon.png'
                                        />
                                        234
                                    </span>
                    </div>

                  </div>

                </div>
              </li>


              <li>
                <div className='destinationcarousel single-carousel'>

                  <img
                    alt='' className='imgdestination'
                    src='img/destinations/destination4.jpg'
                  />

                  <div className='avatarandtitle'>

                    <div className='avatardestination'>
                      <img alt='' src='img/destinations/avatar4.jpg' />
                    </div>

                    <p className='titledestination'>
                      <a href='#'>Barcelona - Spain</a>
                    </p>

                  </div>

                  <p className='descriptiondestination'>Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Quisque</p>

                  <div className='infodestination'>

                    <div className='viewdestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/viewicon.png'
                                        />
                                        234
                                    </span>
                    </div>

                    <div className='likedestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/likeicon.png'
                                        />
                                        234
                                    </span>
                    </div>

                    <div className='commentsdestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/commenticon.png'
                                        />
                                        234
                                    </span>
                    </div>

                  </div>

                </div>
              </li>


              <li>
                <div className='destinationcarousel single-carousel'>

                  <img
                    alt='' className='imgdestination'
                    src='img/destinations/destination1.jpg'
                  />

                  <div className='avatarandtitle'>

                    <div className='avatardestination'>
                      <img alt='' src='img/destinations/avatar1.jpg' />
                    </div>

                    <p className='titledestination'>
                      <a href='#'>Phuket - Thailandia</a>
                    </p>

                  </div>

                  <p className='descriptiondestination'>Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Quisque</p>

                  <div className='infodestination'>

                    <div className='viewdestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/viewicon.png'
                                        />
                                        234
                                    </span>
                    </div>

                    <div className='likedestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/likeicon.png'
                                        />
                                        234
                                    </span>
                    </div>

                    <div className='commentsdestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/commenticon.png'
                                        />
                                        234
                                    </span>
                    </div>

                  </div>

                </div>
              </li>

              <li>
                <div className='destinationcarousel single-carousel'>

                  <img
                    alt='' className='imgdestination'
                    src='img/destinations/destination2.jpg'
                  />

                  <div className='avatarandtitle'>

                    <div className='avatardestination'>
                      <img alt='' src='img/destinations/avatar2.jpg' />
                    </div>

                    <p className='titledestination'>
                      <a href='#'>Venice - Italy</a>
                    </p>

                  </div>

                  <p className='descriptiondestination'>Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Quisque</p>

                  <div className='infodestination'>

                    <div className='viewdestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/viewicon.png'
                                        />
                                        234
                                    </span>
                    </div>

                    <div className='likedestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/likeicon.png'
                                        />
                                        234
                                    </span>
                    </div>

                    <div className='commentsdestination'>
                                    <span>
                                        <img
                                          alt=''
                                          src='img/destinations/commenticon.png'
                                        />
                                        234
                                    </span>
                    </div>

                  </div>

                </div>
              </li>


            </ul>
          </div>
        </div>


      </div>

    </section>
  );
}

export default HomeDestination;
