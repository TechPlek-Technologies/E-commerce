import React from "react";

const AboutSection1 = () => {
  return (
    <section className="who-we-are rel z-1 pt-40 rpt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="who-we-are-content rmb-35 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-20">
                <h2>
                  Quality Healthcare Made Simple With Vedarma's Holistic Approach
                </h2>
              </div>
              <p>
                Founded in December 2021 to promote Indian Ayurveda globally,
                Vedarma blends ancient wisdom with modern innovation, offering
                transformative healing through premium Ayurvedic products and
                Nutraceuticals. Embracing the essence of Ayurveda – the Science
                of Life – we’re dedicated to enriching lives globally.
              </p>
              <p>
                VEDARMA is one of the most trusted Ayurvedic Medicine and
                Nutraceutical Company based in India that offers an excellent
                range of Herbal and Nutraceuticals products for faster healing
                with ultimate results. From revitalizing hair and soothing
                joints to enhancing skin, strength, and stamina, VEDARMA caters
                to all your wellness needs.
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-lg-right">
            <div className="who-we-are-image wow fadeInRight delay-0-2s">
              <img src="assets/images/about/who-we-are.png" alt="Who We Are" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
