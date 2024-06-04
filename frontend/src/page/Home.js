import { Fragment } from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import HeroSlider from "../wrappers/HeroSlider";
import Category from "../wrappers/Category";
import ClientLogo from "../wrappers/ClientLogo";
import Feedback from "../wrappers/Feedback";
import FeatureArea from "../wrappers/FeatureArea";
import BlogSection from "../wrappers/BlogSection";
import WhyUsSection from "../wrappers/WhyUsSection";


const Home = () => {
  

  return (
    <Fragment>
      <SEO
        titleTemplate="Home"
      />
      <LayoutOne>

        <HeroSlider/>

        <Category/>

        <ClientLogo/>

        <Feedback/>

        <WhyUsSection/>

        <BlogSection/>

        <FeatureArea/>

      </LayoutOne>
    </Fragment>
  );
};

export default Home;
