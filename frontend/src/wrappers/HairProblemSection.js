import ServiceDetails from "../components/hair-problem/ServiceDetails";
import Sidebar from "../components/hair-problem/Sidebar";

const HairProblemSection = () => {

  return (
    <div>
      <section className="service-details-page rel z-1 pt-65 rpt-35 pb-50 rpb-100">
        <div className="container">
          <div className="row">
            <ServiceDetails/>

            <Sidebar/>
         
          </div>
        </div>
      </section>
      {/* Service Details Section End */}
    </div>
  );
};

export default HairProblemSection;
