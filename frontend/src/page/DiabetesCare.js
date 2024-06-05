import { Fragment } from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import PageBanner from "../components/service-details/PageBanner";
import DiabetesCareSection from "../wrappers/DiabetesCareSection";


const DiabetesCare = () => {
  return (
    <Fragment>
    <SEO
      titleTemplate="About Us"
    />

    <LayoutOne>

        <PageBanner/>

        <DiabetesCareSection/>

    </LayoutOne>
  </Fragment>
  )
}

export default DiabetesCare;
