import React from 'react';
import { usePage } from '../utils/page-utils';


const PrivacySection = () => {

    const page = usePage("privacyPage");

  return (
    <section className="who-we-are rel z-1 pt-40 rpt-100 rpy-100">
    <div className="container">
      <div className="row align-items-center">
        <div>
        {page && (
          <div
            className="who-we-are-content rmb-35 wow fadeInLeft delay-0-2s"
            dangerouslySetInnerHTML={{
              __html: page && page.content,
            }}
          ></div>)}
        </div>
      </div>
    </div>
  </section>
  )
}

export default PrivacySection;
