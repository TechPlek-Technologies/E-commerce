import { Link } from "react-router-dom";
import { Fragment } from "react";
import Slider from "react-slick";
import ClientLogoData from "../data/ClientLogoData.json";

const ClientLogoSlider = () => {

 const clientLogo = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1000,
        pauseOnHover:false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };

      
  return (
    <Fragment>
      {ClientLogoData && (
      <Slider {...clientLogo} className="client-logo-wrap py-60">
      {ClientLogoData.map((single, key) => (
        <div className="client-logo-item" key={key}>
          <Link href="/contact">
            <a>
              <img
                src={single.image}
                alt="Client Logo"
              />
            </a>
          </Link>
        </div>
         ))}
      </Slider>)}
    </Fragment>
  );
};
export default ClientLogoSlider;
