import React from "react";
import { Link } from "react-router-dom";

const BlogDetailsInner = ({ data,category }) => {
  console.log(data.description);
  return (
    <section className="news-standard-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
      {data && (
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mt-65">
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
export default BlogDetailsInner;
