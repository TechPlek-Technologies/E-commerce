import React from 'react';
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <section className="news-section pt-20 rpt-100 pb-20 rpb-40">
    <div className="container">
      <div className="section-title text-center mb-40">
        <h2>Latest News &amp; Blog</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-4 col-md-6">
          <div className="news-item wow fadeInUp delay-0-2s">
            <div className="image">
              <img src="/assets/img/blog/Vedarma-blog.jpg" alt="News" />
              <span className="date">
                <b>25</b> July
              </span>
            </div>
            <div className="content">
              <span className="sub-title">NEEM OIL</span>
              <h4>
                <Link href="/">
                BENEFITS OF NEEM OIL FOR HAIR PROBLEMS
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
        </div>
      </div>
    </div>
  </section>
  )
}

export default BlogSection;
