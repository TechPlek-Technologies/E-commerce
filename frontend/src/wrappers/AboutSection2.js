import React from "react";
import { Nav, Tab } from "react-bootstrap";

const AboutSection2 = () => {
  return (
    <section className="about-section pt-85 rpt-55 pb-130 rpb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-images wow fadeInLeft delay-0-2s">
              <div className="row align-items-center">
                  <img src="/assets/img/about/Alohya-mission.png" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content rpt-65 wow fadeInRight delay-0-2s">
              <div className="section-title mb-35">
                <h2>How We Are Shaping A Healthier Future For All?</h2>
              </div>
              <p>
                We have a team of committed Ayurveda experts to ensure our
                products are a source of wellness, vitality, and health. As a
                business, we are not only concerned with promoting good health
                but also protecting the health of our planet.
              </p>

              <p>
                With a rich legacy of offering globally trusted, 100% natural,
                top-tier quality, and reliable Ayurvedic remedies and
                Nutraceuticals since its inception, Vedarma continues to serve a
                diverse clientele with safety and effectiveness at its core.
              </p>
              <Tab.Container defaultActiveKey={"vision"}>
                <Nav className="nav jusctify-content-between">
                  <li>
                    <Nav.Link
                      eventKey="vision"
                      className="nav-link"
                      data-toggle="tab"
                      href="#vision"
                    >
                      <i className="flaticon-spa" />
                      <h4>
                      VISION
                      </h4>
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link
                      eventKey="mission"
                      className="nav-link"
                      data-toggle="tab"
                      href="#mission"
                    >
                      <i className="flaticon-spa" />
                      <h4>
                      MISSION
                      </h4>
                    </Nav.Link>
                  </li>
                </Nav>
                <Tab.Content className="tab-content pt-25">
                  <Tab.Pane className="tab-pane fade" eventKey="vision">
                    <p>
                    We strive to become the world’s trusted and ethical organization by promoting authentic ayurvedic and nutraceutical formulations for a healthy lifestyle. We are committed to create awareness about the benefits of Indian ayurveda globally.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane className="tab-pane fade" eventKey="mission">
                    <p>
                    To promote good health in society through best quality ayurvedic and nutraceutical products by maintaining the highest ethical standards and integrity at all times.
                    </p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;
