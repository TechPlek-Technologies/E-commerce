import React, { Fragment } from "react";
import WhyUsData from "../components/data/WhyUsData.json";

const WhyUsSection = () => {
  return (
    <Fragment>
      {WhyUsData && (
        <div  className="container">
        <div className="row py-20">
        <div className="section-title text-center mb-10">
          <h2>Why Vedarma?</h2>
        </div>


          {WhyUsData.map((single, key) => (
            <div className="col-lg-3 col-sm-6" key={key}>
              <div className="about-feature-two style-two wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src={single.image?single.image:""} />
                </div>
                <h4>
                 
                    {single.h4?single.h4:""}
                  
                </h4>
                <p>{single.p?single.p:""}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      )}
    </Fragment>
  );
};

export default WhyUsSection;
