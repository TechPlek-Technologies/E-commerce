const BlogBanner = ({ pageName, pageTitle }) => {
  return (
    <section
    className="page-banner text-white py-165 rpy-130"
    style={{ backgroundImage: "url(assets/images/banner/banner.jpg)" }}
  >
    <div className="container">
      <div className="banner-inner">
        <h1 className="page-title wow fadeInUp delay-0-2s">
          {pageTitle ? pageTitle : pageName}
        </h1>
      </div>
    </div>
  </section>
  )
}

export default BlogBanner;
