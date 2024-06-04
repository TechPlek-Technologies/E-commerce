import { Fragment } from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import TermsSection from "../wrappers/TermsSection";

const TermsAndCondition = () => {
  return (
    <Fragment>
      <SEO titleTemplate="Terms And Conditions" />

      <LayoutOne>
        <TermsSection />
      </LayoutOne>
    </Fragment>
  );
};

export default TermsAndCondition;
