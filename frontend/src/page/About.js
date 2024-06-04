import React, { Fragment } from 'react';
import SEO from '../components/Seo';
import LayoutOne from '../layouts/LayoutOne';
import AboutSection1 from '../wrappers/AboutSection1';
import AboutSection2 from '../wrappers/AboutSection2';

const About = () => {
  return (
    <Fragment>
    <SEO
      titleTemplate="About Us"
    />

    <LayoutOne>

    <AboutSection1/>

    <AboutSection2/>

    </LayoutOne>
  </Fragment>
  )
}

export default About;
