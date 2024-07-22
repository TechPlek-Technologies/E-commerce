import React, { useState } from "react";
import Slider from "react-slick";
import VideoModal from "../../wrappers/VideoModal";
import { currency } from "../../helpers/currency";
import { useSelector } from "react-redux";

const VideoInner1 = ({
  products,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const showControls = () => {
    setControlsVisible(true);
  };

  const hideControls = () => {
    setControlsVisible(false);
  };

  const productActive = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    focusOnSelect: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <section className="product-section pt-10 rpt-70 rpb-70">
      <div className="container">
        <div className="section-title text-center mb-30">
          <h2>Exclusive Collection</h2>
        </div>
        <Slider {...productActive} className="product-active">
          {products?.product.map((item) => (

            
            <div
              className="wow fadeInUp delay-0-2s"
              key={item.video ? item.video[0].name :""}
              onMouseEnter={showControls}
              onMouseLeave={hideControls}
            >
              <video
                width="100%"
                height="400px"
                playsInline
                muted
                autoPlay
                loop
                // controls={controlsVisible}
                onClick={async() =>{
                  await setSingleProduct(item);
                  setModalShow(true)
                } 

                  }
              >
                <source src={"./assets/Video/Video-12.mp4"} type="video/mp4" />
                <div>
                <p>this is a demo text</p>
              </div>
              </video>
             
            </div>
          ))}
        </Slider>
      </div>

      <VideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={singleProduct}
        currency={currency}
        wishlistItem={wishlistItems}
        compareItem={compareItems}
      />
    </section>
  );
};

export default VideoInner1;
