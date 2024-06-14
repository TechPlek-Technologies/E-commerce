import React, { Fragment } from "react"; 
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import ProductImageDescription from "../components/product-details/ProductImageDescription";
import ProductDescriptionTab from "../components/product-details/ProductDescriptionTab";
import RelatedProductSlider from "../components/product-details/RelatedProductSlider";


const ProductDetails = () => {

  let { slug } = useParams();
  const { products } = useSelector((state) => state.products);
  const product = products.product.find(product => product.slug === slug);
  
// console.log(product);
  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
       
        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={product}
        />

        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={product.description}
        />

        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.categories[0]}
        />
      </LayoutOne>
    </Fragment>
  );
};

export default ProductDetails;
