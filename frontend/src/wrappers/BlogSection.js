import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slick';

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

const BlogSection = () => {

  const [loading, setLoading] = useState(true);
  const [blogs,setBlogs] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      const domain = process.env.REACT_APP_URL;
      try {
        const response = await axios.get(`${domain}/blogs`);
        console.log("response", response.data);

        if (response.data.success) {
            setBlogs(response.data.blogs)
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flone-preloader-wrapper">
        <div className="flone-preloader">
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  const props = {
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 400,
    arrows: false,
    dots: false,
    autoplay: false,
    pauseOnHover:false,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setSlideIndex((next / 2) * 100),
  };

  const isoDateStr = blogs[0].date;
  const formattedDate = formatDate(isoDateStr);

  return (
    <section className="news-section pt-20 rpt-100 pb-20 rpb-40">
    <div className="container">
      <div className="section-title text-center mb-40">
        <h2>Latest News &amp; Blog</h2>
      </div>
      {blogs && (
      <Slider {...props} className="feedback-active mt-20">
         {blogs.map((item) => (
      <div className="row justify-content-center">
        <div className="col-xl-9 col-md-6">
          <div className="news-item wow fadeInUp delay-0-2s">
            <div className="image">
              <img src="/assets/img/blog/Vedarma-blog.jpg" alt="Blogs" />
              <span className="date">
              {item.date ? formattedDate : ""}
              </span>
            </div>
            <div className="content">
              {/* <span className="sub-title">NEEM OIL</span> */}
              <h4>
                <Link href="/">
                {item.name ? item.name : ""}
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
