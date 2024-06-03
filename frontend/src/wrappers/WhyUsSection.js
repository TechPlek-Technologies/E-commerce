import React from 'react';
import { Link } from "react-router-dom";

const WhyUsSection = () => {
  return (
    <section className="what-we-provide-two rel z-1 pt-130 rpt-100 pb-115 rpb-55">
    <div className="container">
      <div className="section-title text-center mb-60">
        <span className="sub-title mb-20">WHY VEDARMA?</span>
      </div>
      <div className="row justify-content-between align-items-center">
        <div className="col-xl-3 col-md-4">
          <div className="what-we-provide-left wow fadeInUp delay-0-2s">
            <div className="ww-provide-item">
              <div className="icon">
                <img src="/assets/img/WhyUs/ayurveda.webp" alt="Icon" />
              </div>
              <h4>
                <Link href="/service-details">Pure Natural Ingredients</Link>
              </h4>
              <p>Prudently Chosen and Expertly Sourced</p>
            </div>
            <div className="ww-provide-item">
              <div className="icon">
                <img src="/assets/img/WhyUs/exprt.webp" alt="Icon" />
              </div>
              <h4>
                <Link href="/service-details">Genuine Expert Guidance</Link>
              </h4>
              <p>Support from Seasoned Health Practitioners</p>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-md-4">
          <div className="what-we-provide-images rmt-10 rmb-55 pr-0 wow fadeInUp delay-0-4s">
            <img
              src="assets/images/services/what-we-provide-2.png"
              alt="Service"
            />
            <img
              className="bg"
              src="assets/images/services/service-center-bg.png"
              alt="Backgroound"
            />
          </div>
        </div>
        <div className="col-xl-3 col-md-4">
          <div className="what-we-provide-right wow fadeInUp delay-0-6s">
            <div className="ww-provide-item">
              <div className="icon">
                <img src="/assets/img/WhyUs/diet-plan.webp" alt="Icon" />
              </div>
              <h4>
                <Link href="/service-details">Custom Ayurveda Experience</Link>
              </h4>
              <p>Tailored Offerings by Ayurveda Specialists</p>
            </div>
            <div className="ww-provide-item">
              <div className="icon">
                <img src="/assets/img/WhyUs/lifestyle.webp" alt="Icon" />
              </div>
              <h4>
                <Link href="/service-details">Holistic Wellness Pioneers</Link>
              </h4>
              <p>Thoughtfully Curated Ayurvedic Health Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WhyUsSection
