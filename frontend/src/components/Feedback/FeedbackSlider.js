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
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      beforeChange: (current, next) => setSlideIndex((next / 2) * 100),
    };
      
  return (
    <Fragment>
         {FeedbackData && (
      <div className="feedback-content-area rmb-65 wow fadeInLeft delay-0-2s">
        <div className="section-title mb-50">
          <span className="sub-title mb-20">Customer Reviews</span>
          <h2>WHAT PEOPLE SAY</h2>
        </div>
        <div
          className="progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={50}
          style={{ backgroundSize: `${slideIndex}% 100%` }}
        >
          <span className="slider__label sr-only">50% completed</span>
        </div>

        <Slider {...props} className="feedback-active mt-20">
        {FeedbackData.map((single, key) => (
          <div className="feedback-item" key={key}>
            <p>
              {single.para}
            </p>
            <div className="feedback-author">
              <img src="assets/images/reviews/fb-author1.png" alt="Authro" />
              <div className="title">
                <h4>{single.name}</h4>
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
