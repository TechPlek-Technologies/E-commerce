import { Fragment, useState } from "react";
import Slider from "react-slick";
import FeedbackData from "../data/FeedbackData.json"

const FeedbackSlider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const props = {
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 400,
      arrows: false,
      dots: false,
      autoplay: true,
      pauseOnHover:false,
      autoplaySpeed: 3000,
      beforeChange: (current, next) => setSlideIndex((next / 2) * 100),
    };
      
  return (
    <Fragment>
         {FeedbackData && (
      <div className="feedback-content-area rmb-65 wow fadeInLeft delay-0-2s">
        <div className="section-title text-center mb-10">
          <h2>WHAT PEOPLE SAY</h2>
        </div>

        <Slider {...props} className="feedback-active mt-20">
        {FeedbackData.map((single, key) => (
          <div className="feedback-item style-two delay-0-2s">
          <div className="content-image">
            <p>
            {single.para?single.para:""}
            </p>
          </div>
          <div className="feedback-author">
            <div className="icon">
              <i className="flaticon-quote" />
            </div>
            <div className="title">
              <h4>{single.name?single.name:""}</h4>
            </div>
            <div className="ratting">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </div>
           ))}
        </Slider>
      </div>)}
    </Fragment>
  );
};
export default FeedbackSlider;
