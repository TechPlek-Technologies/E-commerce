import React from "react";
import { Link } from "react-router-dom";

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const BlogInner = ({ data }) => {



  const isoDateStr = data.blogs[0].date;
  const formattedDate = formatDate(isoDateStr);
  return (
    <section className="news-standard-page rel z-1 pt-40 rpt-35 pb-40 rpb-100">
      {data?.blogs && (
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mt-65">
              {data?.blogs.map((item) => (
                <div className="news-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src={JSON.parse(item.icon)? JSON.parse(item.icon)[0].url:""} alt="" />
                  </div>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-calendar-alt" />
                        <a href="#">{item.date ? formattedDate : ""}</a>
                      </li>
                      <li>
                        <i className="far fa-comment-dots" />
                        <a href="#">{item.review ? item.review.length : 0}</a>
                      </li>
                    </ul>
                    <h4>
                      <Link href="/blog-details">
                        <a>{item.name ? item.name : ""}</a>
                      </Link>
                    </h4>
                    <p>{item.shortDescription ? item.shortDescription : ""}</p>
                    <Link to={{ pathname: `/blog/${item.slug}` }}>
                      <a className="read-more">
                        Read More <i className="fas fa-angle-double-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="blog-sidebar mt-65">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input
                      type="text"
                      placeholder="Search keywords"
                      required=""
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                {BlogCategory({data})}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const BlogCategory = ({data}) => {
  console.log(data);
  return (
    <div className="widget widget-menu wow fadeInUp delay-0-4s">
      <h4 className="widget-title">
        <i className="flaticon-leaf-1" />
        Category
      </h4>
      {data.categories.map((item) => (
      <ul>
        <li>
          <Link href="#">{item.name ? item.name:""}</Link>
        </li>
      </ul> ))}
    </div>
  );
};

export default BlogInner;
