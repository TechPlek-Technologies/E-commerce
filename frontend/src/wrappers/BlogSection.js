import React from 'react';
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <section className="news-section pt-130 rpt-100 pb-70 rpb-40">
    <div className="container">
      <div className="section-title text-center mb-60">
        <span className="sub-title mb-20">Read Article Tips</span>
        <h2>Latest News &amp; Blog</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-4 col-md-6">
          <div className="news-item wow fadeInUp delay-0-2s">
            <div className="image">
              <img src="assets/images/news/news1.jpg" alt="News" />
              <span className="date">
                <b>25</b> July
              </span>
            </div>
            <div className="content">
              <span className="sub-title">Vegetable</span>
              <h4>
                <Link href="/">
                  Unicode UTF8 Character Sets They Sltimate Guide Systems
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
          <div className="news-item wow fadeInUp delay-0-4s">
            <div className="image">
              <img src="assets/images/news/news2.jpg" alt="News" />
              <span className="date">
                <b>25</b> July
              </span>
            </div>
            <div className="content">
              <span className="sub-title">Farming</span>
              <h4>
                <Link href="/">
                  Quality Foods Requirments For Every Human Body’s
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
              <img src="assets/images/news/news3.jpg" alt="News" />
              <span className="date">
                <b>25</b> July
              </span>
            </div>
            <div className="content">
              <span className="sub-title">Organic Fruits</span>
              <h4>
                <Link href="/">
                  Choose Awesome Vegetables For Your Daily Life Routine
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
      </div>
    </div>
  </section>
  )
}

export default BlogSection
