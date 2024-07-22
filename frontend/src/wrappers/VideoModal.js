import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";
import { getProductCartQuantity } from "../helpers/product";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slice/cart-slice";
import { addToWishlist } from "../redux/slice/wishlist-slice";
import { addToCompare } from "../redux/slice/compare-slice";
import ProductRating from "../components/product/ProductRating";
import VideoPlayerWithDialog from "../components/VideoInner/Share";

const VideoModal = ({ show, onHide, wishlistItem, compareItem,currency, product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const [selectedProductColor, setSelectedProductColor] = useState(
    product?.colors?.length > 0 ? product.colors[0].value : ""
  );
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variants? product?.variants[0]?.attr : ""
  );
  const [productStock, setProductStock] = useState(
    product.variants? product?.variants[0]?.qty : ""
  );

  const [quantityCount, setQuantityCount] = useState(1);
  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize
  );

  const onCloseModal = () => {
    setThumbsSwiper(null);
    onHide();
  };

  const parentDivRef = React.useRef(null);
  if (!product) {
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
    <Modal
      show={show}
      onHide={onCloseModal}
      className="product-quickview-modal-wrapper"
    >
      <div className="modal-close-button-wrapper">
        <button className="modal-close-button" onClick={onCloseModal}>
          &times;
        </button>
      </div>

      {product && 
      (
        <div>
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div>
              <VideoPlayerWithDialog video={product?.video?.length > 0 ? product?.video[0]:[]} />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="product-details-content quickview-content">
              <div>
                <img src={product?.image ? product?.image[0].url : ""} alt="" />
                <h2>{product?.name}</h2>
              </div>
              <div className="product-details-price">
                {product.price !== null ? (
                  <Fragment>
                    <span>{product?.price}</span>{" "}
                  </Fragment>
                ) : (
                  ""
                )}
              </div>
              {product?.rating && product?.rating > 0 ? (
                <div className="pro-details-rating-wrap">
                  <div className="pro-details-rating">
                    <ProductRating ratingValue={product?.rating} />
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="pro-details-list">
                <p>{product.shortDescription}</p>
              </div>
              {product.colors ? (
                <div className="pro-details-size-color">
                  <div className="pro-details-color-wrap">
                    <span>Color</span>
                    <div className="pro-details-color-content">
                      {product.colors.map((single, key) => {
                        return (
                          <label
                            className={`pro-details-color-content--single ${single.value}`}
                            key={key}
                          >
                            <input
                              type="radio"
                              value={single.value}
                              name="product-color"
                              checked={
                                single.value === selectedProductColor
                                  ? "checked"
                                  : ""
                              }
                              onChange={() => {
                                setSelectedProductColor(single.value);
                                setSelectedProductSize(single.attr);
                                setProductStock(single.qty);
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
                      {product.attributes &&
                        product.attributes.map((single) => {
                          <label
                          className={`pro-details-size-content--single`}
                          key={single.name}
                        >
                          <input
                            type="radio"
                            value={single.name}
                            checked={
                              single.name === selectedProductSize
                                ? "checked"
                                : ""
                            }
                            onChange={() => {
                              setSelectedProductSize(single.name);
                              setProductStock(single.stock);
                              setQuantityCount(1);
                            }}
                          />
                          <span className="size-name">
                            {single.name}
                          </span>
                        </label>
                        })}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {product.affiliateLink ? (
                <div className="pro-details-quality">
                  <div className="pro-details-cart btn-hover">
                    <a
                      href={product.affiliateLink}
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
                              ...product,
                              quantity: quantityCount,
                              selectedProductColor: selectedProductColor
                                ? selectedProductColor
                                : product.selectedProductColor
                                ? product.selectedProductColor
                                : null,
                              selectedProductSize: selectedProductSize
                                ? selectedProductSize
                                : product.selectedProductSize
                                ? product.selectedProductSize
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
                      onClick={() => dispatch(addToWishlist(product))}
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
                      onClick={() => dispatch(addToCompare(product))}
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
      )}
    </Modal>
  );
};

export default VideoModal;
