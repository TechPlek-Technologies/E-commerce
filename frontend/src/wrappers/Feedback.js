import React from 'react';
import FeedbackSlider from '../components/Feedback/FeedbackSlider';

const Feedback = () => {
  return (
    <section className="feedback-section pt-10 pb-20">
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-12">
              <FeedbackSlider />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Feedback;
