import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Slider from 'react-slick';

const BlogSection = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const { blogData } = useSelector((store) => store.blog);

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
    <section className="news-section pt-20 rpt-100 pb-20 rpb-40">
    <div className="container">
      <div className="section-title text-center mb-40">
        <h2>Latest News &amp; Blog</h2>
      </div>
      {blogData && (
      <Slider {...props} className="feedback-active mt-20">
         {blogData.map((item) => (
      <div className="row justify-content-center">
        <div className="col-xl-12 col-md-6">
          <div className="news-item wow fadeInUp delay-0-2s">
            <div className="image">
              <img src={item.description ? item.description : "Blogs"} alt="Blogs" />
            </div>
            <div className="content">
              <span className="sub-title">{item.name ? item.name : ""}</span>
              <h4>
                <Link href="/">
                {item.shortDescription ? item.shortDescription : ""}
                </Link>
              </h4>
              <Link to={{ pathname: `/blog/${item.slug}`}}>
                <a className="read-more">
                  Read More <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="col-xl-4 col-md-6">
          <div className="news-item wow fadeInUp delay-0-4s">
            <div className="image">
              <img src="/assets/img/blog/Vedarma-blog2.jpg" alt="News" />
              <span className="date">
                <b>25</b> July
              </span>
            </div>
            <div className="content">
              <span className="sub-title">Ayurvedic Medicines</span>
              <h4>
                <Link href="/">
                Your Ultimate Guide To Buy Ayurvedic Medicines Online In India.
                </Link>
              </h4>
              <Link href="/">
                <a className="read-more">
                  Read More <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="news-item wow fadeInUp delay-0-6s">
            <div className="image">
              <img src="/assets/img/blog/Vedarma-blog3.jpg" alt="News" />
              <span className="date">
                <b>25</b> July
              </span>
            </div>
            <div className="content">
              <span className="sub-title"> History</span>
              <h4>
                <Link href="/">
                History Of Ayurveda: A Brief Overview (In Hindi)
                </Link>
              </h4>
              <Link href="/">
                <a className="read-more">
                  Read More <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div> */}
      </div>  ))}
      </Slider>)}
    </div>
  </section>
  )
}

export default BlogSection;
