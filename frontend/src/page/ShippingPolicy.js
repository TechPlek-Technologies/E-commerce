import { Fragment } from "react"
import SEO from "../components/Seo"
import LayoutOne from "../layouts/LayoutOne"
import ShippingSection from "../wrappers/ShippingSection"


const ShippingPolicy = () => {
  return (
    <Fragment>
      <SEO titleTemplate="Shipping and Delivery Policy" />

      <LayoutOne>
        <ShippingSection/>
      </LayoutOne>
    </Fragment>
  )
}

export default ShippingPolicy;
