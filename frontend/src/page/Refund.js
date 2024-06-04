import { Fragment } from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import RefundSection from "../wrappers/RefundSection";

const Refund = () => {
  return (
    <Fragment>
    <SEO titleTemplate="Cancellation And Refund Policy" />

    <LayoutOne>

      <RefundSection/>
     
    </LayoutOne>
    
  </Fragment>
  )
}

export default Refund;
