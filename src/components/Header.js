import React from "react";
import p1 from "../statics/p1.jpg";
import p2 from "../statics/p2.jpg";
import p3 from "../statics/p3.jpg";
import p4 from "../statics/p4.jpg";
import p5 from "../statics/p5.jpg";
import video from "../statics/video.mp4";
import SlideImg from "./SlideImg";
import { useSelector } from "react-redux";

const Header = () => {
  const siteData = useSelector((state) => state.siteData);
  return (
    <div className="row mt-5">
      <div className="col-md-8">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <SlideImg
              img={p1}
              active="active"
              title={siteData.title2}
              desc={siteData.shortDesc}
            />
            <SlideImg
              img={p2}
              title={siteData.title2}
              desc={siteData.shortDesc}
            />
            <SlideImg
              img={p3}
              title={siteData.title2}
              desc={siteData.shortDesc}
            />
            <SlideImg
              img={p4}
              title={siteData.title2}
              desc={siteData.shortDesc}
            />
            <SlideImg
              img={p5}
              title={siteData.title2}
              desc={siteData.shortDesc}
            />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <video src={video} className="w-100" controls></video>
        <h6 className="mt-2 text-center">
          <strong>{siteData.title1}</strong>
        </h6>
        <p className="para">{siteData.para1}</p>
      </div>
    </div>
  );
};

export default Header;
