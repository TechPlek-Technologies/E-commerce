import PropTypes from "prop-types";
import { Fragment } from "react";
import ScrollToTop from "../helpers/scroll-to-top";
import HeaderOne from "../wrappers/HeaderOne";
import Footer from "../wrappers/Footer";

const LayoutOne = ({ children }) => {
  return (
    <Fragment>
      <HeaderOne
        layout="container-fluid"
        headerPaddingClass="header-padding-1"
      />
      {children}
      <Footer/>

      <ScrollToTop />
    </Fragment>
  );
};

LayoutOne.propTypes = {
  children: PropTypes.node,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string,
};

export default LayoutOne;
