import { Fragment } from "react";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";

const Home = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Fashion Home"
      />
      <LayoutOne
      ></LayoutOne>
    </Fragment>
  );
};

export default Home;
