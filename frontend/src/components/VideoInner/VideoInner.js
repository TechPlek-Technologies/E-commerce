import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import VideoModal from "../../wrappers/VideoModal";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const VideoInner = ({product,
    currency,
    cartItem,
    wishlistItem,
    compareItem,}) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const [modalShow, setModalShow] = useState(false);
//   const discountedPrice = getDiscountPrice(product.price, product.discount);
//   const finalProductPrice = +(product.price * currency.currencyRate).toFixed(2);
//   const finalDiscountedPrice = +(
//     discountedPrice * currency.currencyRate
//   ).toFixed(2);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className="container-fluid">
        <Slider {...settings} className="gallery-active">
            <div className="gallery-item big-item wow fadeInUp delay-0-4s">
              <img src="/assets/img/WhyUs/ayurveda.webp" alt="Gallery" />
              <div className="gallery-over">
              <div className="content">
                  <h4>Organic Fruits Juice</h4>
                  <p>Fresh Food &amp; Vegetable</p>
                </div>
                <Link href="/portfolio-details">
                  <a className="details-btn" href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=11s">
                    <i className="fas fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
        </Slider>
      </div>
      {/* <VideoModal show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        // discountedPrice={discountedPrice}
        // finalProductPrice={finalProductPrice}
        // finalDiscountedPrice={finalDiscountedPrice}
        wishlistItem={wishlistItem}
        compareItem={compareItem}/> */}
    </Fragment>
  );
};

export default VideoInner;
