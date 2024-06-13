import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import SwiperSlider, { SwiperSlide } from "../swiper/swiperSlider";

import { getProducts } from "../../helpers/product";
import SectionTitle from "../section-title/SectionTitle";
import ProductGridSingle from "./ProductGridSingle";
import { currency } from "../../helpers/currency";

const settings = {
  loop: false,
  slidesPerView: 4,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 4
    }
  }
};


const RelatedProductSlider = ({ spaceBottomClass, category }) => {
  const { products } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const prods = getProducts(products.product, category, null, 6);
  
  return (
    <div className={clsx("related-product-area", spaceBottomClass)}>
      <div className="container">
        <SectionTitle
          titleText="Related Products"
          positionClass="text-center"
          spaceClass="mb-50"
        />
        {prods?.length ? (
          <SwiperSlider options={settings}>
              {prods.map(product => (
                <SwiperSlide key={product._id}>
                  <ProductGridSingle
                    product={product}
                    currency={currency}
                    cartItem={
                      cartItems.find((cartItem) => cartItem._id === product._id)
                    }
                    wishlistItem={
                      wishlistItems.find(
                        (wishlistItem) => wishlistItem._id === product._id
                      )
                    }
                    compareItem={
                      compareItems.find(
                        (compareItem) => compareItem._id === product._id
                      )
                    }
                  />
                </SwiperSlide>
              ))}
          </SwiperSlider>
        ) : null}
      </div>
    </div>
  );
};

RelatedProductSlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default RelatedProductSlider;
