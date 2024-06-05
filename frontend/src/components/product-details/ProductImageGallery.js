import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from 'swiper';
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import SwiperSlider, { SwiperSlide } from "../swiper/swiperSlider";

const ProductImageGallery = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);


  const slides = product?.image?.map((img, i) => ({
    src: img.url,
    key: i,
  })) || [];

  // Swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    thumbs: { swiper: thumbsSwiper?.destroyed ? null : thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: (swiperInstance) => {
      if (swiperInstance?.destroyed) {
        console.warn("Swiper instance is destroyed");
      } else {
        setThumbsSwiper(swiperInstance);
      }
    },
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true
  };

  return (
    <Fragment>
      <div className="product-large-image-wrapper">
        {(product?.discountPercentage || product?.new) && (
          <div className="product-img-badges">
            {product.discountPercentage && (
              <span className="pink">-{product.discountPercentage}%</span>
            )}
            {product.new && <span className="purple">New</span>}
          </div>
        )}
        {product?.image?.length ? (
          <SwiperSlider options={gallerySwiperParams}>
            {product.image.map((single, key) => (
              <SwiperSlide key={key}>
                <button className="lightgallery-button" onClick={() => setIndex(key)}>
                  <i className="pe-7s-expand1"></i>
                </button>
                <div className="single-image">
                  <img
                    src={single.url}
                    className="img-fluid"
                    alt={single.name}
                  />
                </div>
              </SwiperSlide>
            ))}
            <AnotherLightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={slides}
              plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </SwiperSlider>
        ) : null}
      </div>
      <div className="product-small-image-wrapper mt-15">
        {product?.image?.length ? (
          <SwiperSlider options={thumbnailSwiperParams}>
            {product.image.map((single, key) => (
              <SwiperSlide key={key}>
                <div className="single-image">
                  <img
                    src={single.url}
                    className="img-fluid"
                    alt={single.name}
                  />
                </div>
              </SwiperSlide>
            ))}
          </SwiperSlider>
        ) : null}
      </div>
    </Fragment>
  );
};

ProductImageGallery.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })),
    discountPercentage: PropTypes.number,
    new: PropTypes.bool,
  })
};

export default ProductImageGallery;
