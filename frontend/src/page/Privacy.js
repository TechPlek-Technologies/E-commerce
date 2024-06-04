import React, { Fragment } from "react";
import PrivacySection from "../wrappers/PrivacySection";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";

const Privacy = () => {
  return (
    <Fragment>
      <SEO titleTemplate="Privacy Policy" />

      <LayoutOne>

        <PrivacySection />
        
      </LayoutOne>

    </Fragment>
  );
};

export default Privacy;
