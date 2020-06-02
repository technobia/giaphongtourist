import React, { useEffect } from 'react';
import ReacrMarkdown from "react-markdown";

const HomeDestination = ({ tours }) => {
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

              {tours.map(item => (
                <li key={item.id}>
                  <div className='destinationcarousel single-carousel'>

                    <div className="img">
                      <img
                        alt='' className='imgdestination'
                        src={item.img}
                      />
                    </div>

                    <div className='avatarandtitle'>

                      <p className='titledestination'>
                        <a href='#'>{item.title}</a>
                      </p>

                    </div>

                    <ReacrMarkdown source={item.description} className="descriptiondestination" escapeHtml />

                  </div>
                </li>
              ))}


            </ul>
          </div>
        </div>


      </div>

    </section>
  );
}

export default HomeDestination;
