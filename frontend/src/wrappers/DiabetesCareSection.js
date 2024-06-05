import ServiceDetail1 from "../components/Diabetes-care/ServiceDetail1";
import Sidebar1 from "../components/Diabetes-care/Sidebar1";

const DiabetesCareSection = () => {


  return (
    <div>
      <section className="service-details-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <ServiceDetail1/>

            <Sidebar1/>
            
          </div>
        </div>
      </section>
      {/* Service Details Section End */}
    </div>
  );
};

export default DiabetesCareSection;
