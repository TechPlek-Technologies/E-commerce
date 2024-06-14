import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BlogSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { blogData } = useSelector((store) => store.blog);
  console.log(blogData);
  const props = {
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 400,
    arrows: false,
    dots: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setSlideIndex((next / 2) * 100),
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.split(" ").slice(0, limit).join(" ") + "...";
  };
  return (
    <section className="news-section pt-20 rpt-100 pb-20 rpb-40">
      <div className="container">
        <div className="section-title text-center mb-40">
          <h2>Latest News &amp; Blog</h2>
        </div>
        {blogData && (
          <Slider {...props} className="feedback-active mt-20">
            {blogData.blogs.map((item) => (
              <div className="row justify-content-center">
                <div className="col-xl-12 col-md-6">
                  <div className="news-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src={
                          JSON.parse(item.icon)
                            ? JSON.parse(item.icon)[0].url
                            : ""
                        }
                        alt="Blogs"
                      />
                    </div>
                    <div className="content">
                      <span className="sub-title">
                        {item.name ? item.name : ""}
                      </span>
                      <h5>
                        <Link to={`/blog/${item.slug}`}>
                          {item.shortDescription ? truncateText(item.shortDescription, 20) : ""}
                        </Link>
                      </h5>
                      <Link to={{ pathname: `/blog/${item.slug}` }}>
                        Read More <i className="fas fa-angle-double-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
