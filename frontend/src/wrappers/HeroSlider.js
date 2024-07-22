import { Link } from "react-router-dom";
import { useHome } from "../utils/home-utils";

const HeroSlider = () => {

    const { banner = [] }=useHome("homePage") || {};

  return (
    <div className="slider-area">
      <div
        className="single-slide bg-img"
      >
        <Link to={process.env.PUBLIC_URL + "/"}>
        {/* <img style={{width:"100vw"}} alt={banner.image ? banner.image[0].name: "Banner"} src={banner.image ? banner.image[0].url :""} /> */}
        <img style={{width:"100vw"}} alt={banner.image ? banner.image[0].name: "Banner"} src={"https://vedarma.com/wp-content/uploads/2024/04/web-banner-1536x325.webp"} />
      </Link>
      </div>
    </div>
  );
};

export default HeroSlider;

