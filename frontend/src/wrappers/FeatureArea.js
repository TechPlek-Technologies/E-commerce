import React from 'react';
import { Link } from "react-router-dom";
import { useAllSetting } from '../utils/setting-utils';

const FeatureArea = () => {

    const {footerBanner=[] }=useAllSetting() || {};

  return (
    <section className="feature-three-area pb-40">
    <div className="container-fluid">
      <div className="feature-three-inner">
        <div className="feature-two-item wow fadeInUp delay-0-2s">
          <div className="icon">
            <i className="flaticon-delivery-man" />
          </div>
          <div className="content">
            <h4>
              <Link href="/">{footerBanner?footerBanner.delivery.title:""}</Link>
            </h4>
            <p>{footerBanner?footerBanner.delivery.description:""}</p>
          </div>
        </div>
        <div className="feature-two-item wow fadeInDown delay-0-4s">
          <div className="icon">
            <i className="flaticon-offer" />
          </div>
          <div className="content">
            <h4>
              <Link href="/">{footerBanner?footerBanner.security.title:""}</Link>
            </h4>
            <p>{footerBanner?footerBanner.security.title:""}</p>
          </div>
        </div>
        <div className="feature-two-item wow fadeInUp delay-0-6s">
          <div className="icon">
            <i className="flaticon-24-hours" />
          </div>
          <div className="content">
            <h4>
              <Link href="/">{footerBanner?footerBanner.support.title:""}</Link>
            </h4>
            <p>{footerBanner?footerBanner.support.title:""}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeatureArea;
