import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import { getProductCartQuantity } from "../helpers/product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cart-slice";
import { addToWishlist } from "../redux/slice/wishlist-slice";
import { addToCompare } from "../redux/slice/compare-slice";
import ProductRating from "../components/product/ProductRating";
import ReactPlayer from "react-player";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import SwipeableEdgeDrawerComponent from "../components/VideoInner/Share";

const VideoModal = ({
  show,
  onHide,
  product,
  discountedPrice,
  currency,
  finalProductPrice,
  finalDiscountedPrice,
  wishlistItem,
  compareItem,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [showShareButtons, setShowShareButtons] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleShareButtonClick = () => {
    setShowShareButtons(!showShareButtons);
  };

  const handleAskQuestionClick = () => {
    setShowForm(!showForm);
  };

  const showControls = () => {
    setControlsVisible(true);
  };

  const hideControls = () => {
    setControlsVisible(false);
  };

  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: { swiper: thumbsSwiper },
    // modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true,
  };

  const data = {
    id: "6",
    sku: "asdf128",
    name: "Lorem ipsum jacket",
    price: 19.85,
    discount: 0,
    offerEnd: "October 17, 2024 12:11:00",
    new: true,
    rating: 5,
    saleCount: 65,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    image: [
      "/assets/img/product/fashion/6.jpg",
      "/assets/img/product/fashion/3.jpg",
      "/assets/img/product/fashion/1.jpg",
      "/assets/img/product/fashion/8.jpg",
      "/assets/img/product/fashion/9.jpg",
    ],
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    fullDescription:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
  };

  const [selectedProductColor, setSelectedProductColor] = useState(
    data.variation ? data.variation[0].color : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    data.variation ? data.variation[0].size[0].name : ""
  );
  const [productStock, setProductStock] = useState(
    data.variation ? data.variation[0].size[0].stock : data.stock
  );

  const [quantityCount, setQuantityCount] = useState(1);
  const productCartQty = getProductCartQuantity(
    cartItems,
    data,
    selectedProductColor,
    selectedProductSize
  );

  const onCloseModal = () => {
    setThumbsSwiper(null);
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onCloseModal}
      className="product-quickview-modal-wrapper"
    >
      <Modal.Header closeButton></Modal.Header>

      <div>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="product-large-image-wrapper">
        <div
          className="wow fadeInUp delay-0-2s"
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
         
        >
          <ReactPlayer
            url="/assets/Video/Video-129.mp4"
            controls
            width="100%"
            height="100%"
            // style={{position:"fixed"}}
          />
          <div className="button-container">
            <button
              className="video-btn"
              type="button"
              onClick={handleShareButtonClick}
            >
              <i className="fa fa-share-alt" />
            </button>
            <button
              className="video-btn"
              type="button"
              onClick={handleAskQuestionClick}
            >
              <i className="fa fa-question" />
            </button>
            {showShareButtons && (
              <div className="share-buttons">
                <FacebookShareButton
                  url={"/assets/Video/Video-129.mp4"}
                  className="share-button"
                >
                  <a className="mfp-iframe video-play1">
                    <i className="fab fa-facebook-f" />
                  </a>
                </FacebookShareButton>
                <TwitterShareButton
                  url={"/assets/Video/Video-129.mp4"}
                  className="share-button"
                >
                  <a className="mfp-iframe video-play1">
                    <i className="fab fa-twitter" />
                  </a>
                </TwitterShareButton>
                <LinkedinShareButton
                  url={"/assets/Video/Video-129.mp4"}
                  className="share-button"
                >
                  <a className="mfp-iframe video-play1">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </LinkedinShareButton>
              </div>
            )}
          </div>
        </div>
      </div>
           
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="product-details-content quickview-content">
              <div>
                <img src="/assets/img/WhyUs/diet-plan.webp" alt="" />
                <h2>{data.name}</h2>
              </div>
              <div className="product-details-price">
                {data.price !== null ? (
                  <Fragment>
                    <span>{data.price}</span>{" "}
                  </Fragment>
                ) : (
                  ""
                )}
              </div>
              {data.rating && data.rating > 0 ? (
                <div className="pro-details-rating-wrap">
                  <div className="pro-details-rating">
                    <ProductRating ratingValue={data.rating} />
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="pro-details-list">
                <p>{data.shortDescription}</p>
              </div>
              {data.variation ? (
                <div className="pro-details-size-color">
                  <div className="pro-details-color-wrap">
                    <span>Color</span>
                    <div className="pro-details-color-content">
                      {data.variation.map((single, key) => {
                        return (
                          <label
                            className={`pro-details-color-content--single ${single.color}`}
                            key={key}
                          >
                            <input
                              type="radio"
                              value={single.color}
                              name="product-color"
                              checked={
                                single.color === selectedProductColor
                                  ? "checked"
                                  : ""
                              }
                              onChange={() => {
                                setSelectedProductColor(single.color);
                                setSelectedProductSize(single.size[0].name);
                                setProductStock(single.size[0].stock);
                                setQuantityCount(1);
                              }}
                            />
                            <span className="checkmark"></span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                  <div className="pro-details-size">
                    <span>Size</span>
                    <div className="pro-details-size-content">
                      {data.variation &&
                        data.variation.map((single) => {
                          return single.color === selectedProductColor
                            ? single.size.map((singleSize, key) => {
                                return (
                                  <label
                                    className={`pro-details-size-content--single`}
                                    key={key}
                                  >
                                    <input
                                      type="radio"
                                      value={singleSize.name}
                                      checked={
                                        singleSize.name === selectedProductSize
                                          ? "checked"
                                          : ""
                                      }
                                      onChange={() => {
                                        setSelectedProductSize(singleSize.name);
                                        setProductStock(singleSize.stock);
                                        setQuantityCount(1);
                                      }}
                                    />
                                    <span className="size-name">
                                      {singleSize.name}
                                    </span>
                                  </label>
                                );
                              })
                            : "";
                        })}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {data.affiliateLink ? (
                <div className="pro-details-quality">
                  <div className="pro-details-cart btn-hover">
                    <a
                      href={data.affiliateLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              ) : (
                <div className="pro-details-quality">
                  <div className="cart-plus-minus">
                    <button
                      onClick={() =>
                        setQuantityCount(
                          quantityCount > 1 ? quantityCount - 1 : 1
                        )
                      }
                      className="dec qtybutton"
                    >
                      -
                    </button>
                    <input
                      className="cart-plus-minus-box"
                      type="text"
                      value={quantityCount}
                      readOnly
                    />
                    <button
                      onClick={() =>
                        setQuantityCount(
                          quantityCount < productStock - productCartQty
                            ? quantityCount + 1
                            : quantityCount
                        )
                      }
                      className="inc qtybutton"
                    >
                      +
                    </button>
                  </div>
                  <div className="pro-details-cart btn-hover">
                    {productStock && productStock > 0 ? (
                      <button
                        onClick={() =>
                          dispatch(
                            addToCart({
                              ...data,
                              quantity: quantityCount,
                              selectedProductColor: selectedProductColor
                                ? selectedProductColor
                                : data.selectedProductColor
                                ? data.selectedProductColor
                                : null,
                              selectedProductSize: selectedProductSize
                                ? selectedProductSize
                                : data.selectedProductSize
                                ? data.selectedProductSize
                                : null,
                            })
                          )
                        }
                        disabled={productCartQty >= productStock}
                      >
                        {" "}
                        Add To Cart{" "}
                      </button>
                    ) : (
                      <button disabled>Out of Stock</button>
                    )}
                  </div>
                  <div className="pro-details-wishlist">
                    <button
                      className={wishlistItem !== undefined ? "active" : ""}
                      title={
                        wishlistItem !== undefined
                          ? "Added to wishlist"
                          : "Add to wishlist"
                      }
                      onClick={() => dispatch(addToWishlist(data))}
                    >
                      <i className="pe-7s-like" />
                    </button>
                  </div>
                  <div className="pro-details-compare">
                    <button
                      className={compareItem !== undefined ? "active" : ""}
                      disabled={compareItem !== undefined}
                      title={
                        compareItem !== undefined
                          ? "Added to compare"
                          : "Add to compare"
                      }
                      onClick={() => dispatch(addToCompare(data))}
                    >
                      <i className="pe-7s-shuffle" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </Modal>
  );
};

export default VideoModal;
