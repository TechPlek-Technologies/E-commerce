import React from 'react'

const BlogDetailsInner = ({data}) => {
  return (
    <section className="news-standard-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
    
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mt-65">
            {data && (

            <div
            className="who-we-are-content rmb-35 wow fadeInLeft delay-0-2s"
            dangerouslySetInnerHTML={{
              __html: page && page.content,
            }}
          ></div>)}
          
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
                {BlogCategory()}
              </div>
            </div>
          </div>
        </div>
      
    </section>
  )
}

const BlogCategory = () => {
    return (
      <div className="widget widget-menu wow fadeInUp delay-0-4s">
        <h4 className="widget-title">
          <i className="flaticon-leaf-1" />
          Category
        </h4>
        <ul>
          <li>
            <Link href="/">Organic Fruits</Link>
          </li>
          <li>
            <Link href="/">Fresh Vegetables</Link>
          </li>
          <li>
            <Link href="/">Crisp Bread &amp; Cake</Link>
          </li>
          <li>
            <Link href="/">Sea Foods</Link>
          </li>
          <li>
            <Link href="/">Chiken Eggs</Link>
          </li>
          <li>
            <Link href="/">Milk &amp; Meat</Link>
          </li>
        </ul>
      </div>
    );
  };

export default BlogDetailsInner
