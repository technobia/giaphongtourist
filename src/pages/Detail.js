import React, { useEffect, useState } from "react";
import useAnimate from '../hook/useAnimate';
import { getTourDetail } from "../services/tour";
import ReacrMarkdown from "react-markdown";

const Detail = (props) => {
  const [detail, setDetail] = useState({});
  useAnimate();

  useEffect(() => {
    const getTour = async () => {
      const url = new URL(window.location.href);
      const id = url.searchParams.get("id");
      const data = await getTourDetail(id);
      if (data.hasOwnProperty("id")) {
        setDetail(data)
      } else {
        props.history.push("/");
      }
    };
    getTour();
    // eslint-disable-next-line
  }, []);
  console.log(detail);

  return (
    <>
      <section className="header-page fade-up header-page-single-project" style={{
        backgroundImage: `url(${detail.img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }}>
        <div className="bounce-in animate4"><h2
          className="header-pagetitle"
        >{detail.title}</h2></div>
      </section>

      <div className="divider"><span></span></div>

      <section id="internalpage">

      {/*<!--start container-->*/}
      <div className="container clearfix">


        {/*<!--start content-->*/}
        <div className="grid_12">

          {/*<!--start post-->*/}
          <div className="singlepost red">

            <div style={{ height: 450 }}>
              <img alt="" className="imgsinglepost" src={detail.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>


              <h1 className="titlesinglepost">{detail.title}</h1>

              <ReacrMarkdown source={detail.content || ""} escapeHtml={false} className="detail-content" />

              <div className="divider"><span></span></div>
          </div>
          {/*<!--end post-->*/}


        </div>
        {/*<!--end content-->*/}


      </div>
      {/*<!--end container-->*/}

    </section>
    </>
  );
};

export default Detail;
