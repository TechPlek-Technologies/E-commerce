import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

const BlogCategoryInner = () => {
  let { category } = useParams();
  const { blogData } = useSelector((store) => store.blog);

  const desiredCategory = blogData.blogs.filter(
    (blog) => blog?.category === category
  );

//   console.log("category", typeof desiredCategory);
//   console.log("category", desiredCategory);

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
  return (
    <section className="news-standard-page rel z-1 rpt-35 pb-40 rpb-100">
      {desiredCategory && (
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mt-65">
              {desiredCategory.map((item) => (
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
                        <a href="#">{formatDate(item.date)}</a>
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
                     
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                {BlogRecent({ blogData })}
                { <BlogCategory1 data={blogData.categories}/>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const BlogCategory1 = ({data}) => {
    return (
      <div className="widget widget-menu wow fadeInUp delay-0-4s">
        <h4 className="widget-title">
          <i className="flaticon-leaf-1" />
          Category
        </h4>
        {data.map((item) => (
        <ul>
          <li>
            <Link to={{ pathname: `/blog/category/${item?.slug}` }}>{item.name?item.name:""}</Link>
          </li>
        </ul> ))}
      </div>
    );
  };

const BlogRecent = ({ blogData }) => {
    return (
      <div className="widget widget-news wow fadeInUp delay-0-2s">
        <h4 className="widget-title">
          <i className="flaticon-leaf-1" />
          Recent Posts
        </h4>
        {blogData?.blogs.slice(0, 5).map((item, index) => (
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

export default BlogCategoryInner;
