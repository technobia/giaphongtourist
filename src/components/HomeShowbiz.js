import React, { useEffect } from 'react';
import ReacrMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";

const HomeShowbiz = ({ tours = [] }) => {
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

              {tours.map((tour, index) => index < 4 && (
                <li className='sb-modern-skin' key={tour.id}>

                  <div className='mediaholder'>
                    <div className='mediaholder_innerwrap'>
                      <div className="img">
                        <img
                          alt='' src={tour.img}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='darkhover' />

                  <div className='detailholder blue'>
                    <div className='showbiz-title'>{tour.title}<span
                      className='bulletgallery'
                    /></div>

                    <ReacrMarkdown source={tour.description} className="excerpt" escapeHtml />

                    <div className='sb-readmore'>
                      <NavLink to={`/chi-tiet?id=${tour.id}`}>CHI TIẾT</NavLink>
                    </div>

                    <div className='sb-clear' />
                  </div>

                </li>
              ))}

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
