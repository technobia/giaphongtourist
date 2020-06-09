import React, { useEffect, useState } from "react";
import useAnimate from '../hook/useAnimate';
import { getTours } from "../services/tour";
import ReacrMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";

const Tour = () => {
  const [collections, setCollections] = useState([]);
  useAnimate();

  useEffect(() => {
    const getTourList = async () => {
      const data = await getTours();
      setCollections(data)
    };
    getTourList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="header-page fade-up header-page-tours">
        <div className="bounce-in animate4"><h2
          className="header-pagetitle"
        >TOUR CỦA CHÚNG TÔI HIỆN ĐANG KHAI THÁC</h2></div>
      </section>

      <div className="divider"><span/></div>

      <section id="internalpage">

        <div className="container clearfix">

          {collections.map(item => (
            <div className="grid_6" key={item.id}>
              <div className="archivetour yellow fade-left animate1">

                <div className="leftarchivetour">

                  <NavLink to={`/chi-tiet?id=${item.id}`}><img
                    alt="" className="imgleftarchivetour opacity"
                    src={item.img}
                  /></NavLink>

                  <div className="pricetitleleftarchivetour">

                    <div className="priceleftarchivetour">
                      <p>{item.price}</p>
                    </div>
                    <p className="titleleftarchivetour">{item.type}</p>
                  </div>


                </div>

                <div className="rightarchivetour">

                  <div className="titledayarchivetour">
                    <NavLink to={`/chi-tiet?id=${item.id}`}><p
                      className="titlearchivetour"
                    >{item.title}</p></NavLink>

                    <div className="dayarchivetour">
                      <p>{item.durations}</p>
                      <span>DAYS</span>
                    </div>

                  </div>

                  <div className="descriptioniconsarchivetour">

                    <ReacrMarkdown source={item.description} className="descriptionarchivetour" escapeHtml />

                  </div>

                </div>

              </div>
            </div>
          ))}


        </div>

      </section>

      <div className="divider"><span/></div>
    </>
  )
};

export default Tour;
