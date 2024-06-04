import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import WhyUsData from "../components/data/WhyUsData.json";

const WhyUsSection = () => {
  return (
    <Fragment>
      {WhyUsData && (
        <div className="row py-20">
          {WhyUsData.map((single, key) => (
            <div className="col-lg-3 col-sm-6" key={key}>
              <div className="about-feature-two style-two wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src={single.image} />
                </div>
                <h4>
                  <Link href="/">
                    <a>{single.h4}</a>
                  </Link>
                </h4>
                <p>{single.p}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default WhyUsSection;
