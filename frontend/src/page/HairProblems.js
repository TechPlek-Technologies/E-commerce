import { Fragment } from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import PageBanner1 from "../components/service-details/PageBanner1";
import HairProblemSection from "../wrappers/HairProblemSection";

const HairProblems = () => {
  return (
    <Fragment>
    <SEO
      titleTemplate="About Us"
    />

    <LayoutOne>

      <PageBanner1/>

      <HairProblemSection/>

    </LayoutOne>
  </Fragment>
  )
}

export default HairProblems;
