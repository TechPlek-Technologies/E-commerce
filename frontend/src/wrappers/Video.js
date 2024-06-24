import React from "react";
import { useSelector } from "react-redux";
import VideoInner1 from "../components/VideoInner/VideoInner1";

const Video = () => {
  const { products } = useSelector((state) => state.products);

  if (products === null) {
    return (
      <div className="flone-preloader-wrapper">
        <div className="flone-preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <section className="gallery-area pt-20 rpt-20">
      <VideoInner1 products={products} />
    </section>
  );
};

export default Video;
