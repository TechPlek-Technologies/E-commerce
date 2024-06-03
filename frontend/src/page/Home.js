import { Fragment } from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import HeroSlider from "../wrappers/HeroSlider";
import Category from "../wrappers/Category";


const Home = () => {
  

  return (
    <Fragment>
      <SEO
        titleTemplate="Fashion Home"
      />
      <LayoutOne>

        <HeroSlider/>

        <Category/>

      </LayoutOne>
    </Fragment>
  );
};

export default Home;
