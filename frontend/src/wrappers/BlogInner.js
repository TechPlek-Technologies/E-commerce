import React from "react";
import { Link } from "react-router-dom";

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
const truncateText = (text, limit) => {
  if (text.length <= limit) {
    return text;
  }
  return text.split(" ").slice(0, limit).join(" ") + "...";
};

const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const BlogInner = ({ data }) => {

  return (
    <section className="news-standard-page rel z-1 rpt-35 pb-40 rpb-100">
      {data?.blogs.length > 0 && (
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mt-65">
              {data?.blogs.map((item) => (
                <div className="news-standard-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src={
                        JSON.parse(item.icon)
                          ? JSON.parse(item.icon)[0].url
                          : ""
                      }
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-calendar-alt" />
                        <a href="#">{formatDate(data.blogs[0].date)}</a>
                      </li>
                      <li>
                        <i className="fas fa-award" />
                        <a href="#">
                          {item.category
                            ? capitalizeFirstLetter(item.category)
                            : ""}
                        </a>
                      </li>
                    </ul>
                    <h4>
                      <Link to={{ pathname: `/blog/${item.slug}` }}>
                        <a>{item.name ? item.name : ""}</a>
                      </Link>
                    </h4>
                    <p>
                      {" "}
                      {item.shortDescription
                        ? truncateText(item.shortDescription, 20)
                        : ""}
                    </p>
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
                {BlogRecent({ data })}
                {BlogCategory({ data })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const BlogCategory = ({ data }) => {
  return (
    <div className="widget widget-menu wow fadeInUp delay-0-4s">
      <h4 className="widget-title">
        <i className="flaticon-leaf-1" />
        Category
      </h4>
      {data.categories.map((item) => (
        <ul>
          <li>
            <Link href="#">{item.name ? item.name : ""}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

const BlogRecent = ({ data }) => {
  return (
    <div className="widget widget-news wow fadeInUp delay-0-2s">
      <h4 className="widget-title">
        <i className="flaticon-leaf-1" />
        Recent Posts
      </h4>
      {data?.blogs.slice(0, 5).map((item, index) => (
        <ul key={index}>
          <li>
            <div className="image">
              <img
                src={JSON.parse(item.icon) ? JSON.parse(item.icon)[0].url : ""}
                alt=""
              />
            </div>
            <div className="content pt-10">
              <h6>
                <Link to={{ pathname: `/blog/${item.slug}` }}>
                  {item.name ? item.name : ""}
                </Link>
              </h6>
              <span className="name">
                {item.category ? capitalizeFirstLetter(item.category) : ""}
              </span>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default BlogInner;
