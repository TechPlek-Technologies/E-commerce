import { Link } from "react-router-dom";

const DiabetesCareSection = () => {
  return (
    <div>

<section className="service-details-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mt-65">
              <div className="service-details-content">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details1.jpg"
                    alt="Service"
                  />
                </div>
                <h3>Fruits &amp; Vegetables</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae abillo inventore veritatis et quasi atecto beatae
                  vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                  voluptas sit asnatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
                </p>
                <div className="row py-20">
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-2s">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          <a>
                            Agriculture
                            <br /> Foods
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="flaticon-fruits" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          <a>
                            {" "}
                            Vegetables
                            <br /> &amp; Fruits
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-eggs-1" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          <a>
                            {" "}
                            Farming
                            <br /> Products
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="about-feature-two style-two wow fadeInUp delay-0-5s">
                      <div className="icon">
                        <i className="flaticon-return-box" />
                      </div>
                      <h4>
                        <Link href="/service-details">
                          <a>
                            {" "}
                            Crisp Bread
                            <br /> &amp; Cake’s
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <h4>Healthy and Testy Foods</h4>
                <p>
                  Zemo enim ipsam voluptatem quia voluptas sit asnatur aut odit
                  aut fugit sed sequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam estquis
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                  sed quia non numquam eius tempora incidunt ut labore et dolore
                  magnam aliquam quaerat voluptatem.
                </p>
                <ul className="list-style-two pt-10">
                  <li>Agriculture &amp; Foods</li>
                  <li>Organic Fruits &amp; Vegetables</li>
                  <li>Crispe Bread &amp; Cakes</li>
                </ul>
                <div className="image pt-50 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details2.jpg"
                    alt="Service"
                  />
                </div>
                <h4>Why Need Organic Foods</h4>
                <p>
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moments blinded desire that they cannot
                  foresee the pain and trouble that are bound to ensueand equal
                  blame longs to those who fail in their duty through weakness{" "}
                </p>
                <blockquote>
                  Quis autem veleu mure reprehenderit quin voluptate velit esse
                  quam nihil molestiae consequatur illum dolorem eum fugiat quo
                  voluptas nulla pariatur
                </blockquote>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-8">
              <div className="service-sidebar mt-65">
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">Service Category</h4>
                  <ul>
                    <li>
                      <Link href="/service-details">Agriculture</Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        Fruits &amp; Vegetables
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        Crispe Bread &amp; Cakes
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">
                        Chiken Meat &amp; Eggs
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details">Farming Products</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Details Section End */}
    </div>
  )
}

export default DiabetesCareSection;
