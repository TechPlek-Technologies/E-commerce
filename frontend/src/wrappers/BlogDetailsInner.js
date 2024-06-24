import React from "react";
import { Link } from "react-router-dom";

const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const BlogDetailsInner = ({ data,category,blogData }) => {
  console.log("Blogdata" , data);
  return (
    <section className="news-standard-page rel z-1 rpt-35 pb-130 rpb-100">
      {data && (
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mt-65">
            <div className="image pt-5 wow fadeInUp delay-0-2s">
                    <img
                      src={JSON.parse(data.icon)? JSON.parse(data.icon)[0].url:""}
                      alt=""
                    />
              </div>
              <div dangerouslySetInnerHTML={{
              __html: data && data.description,
            }}>
              </div>
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
                {BlogRecent({ blogData })}
               { <BlogCategory data={category}/>}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const BlogCategory = ({data}) => {
  return (
    <div className="widget widget-menu wow fadeInUp delay-0-4s">
      <h4 className="widget-title">
        <i className="flaticon-leaf-1" />
        Category
      </h4>
      {data.map((item) => (
      <ul>
        <li>
          <Link href="#">{item.name?item.name:""}</Link>
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

export default BlogDetailsInner;
