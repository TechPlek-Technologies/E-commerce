import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DiabetesCareSection = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      setIsScrolling(true);

      // Clear the timer if there's already one
      clearTimeout(timer);

      // Set a timer to stop scrolling after 150ms
      timer = setTimeout(() => {
        setIsScrolling(false);
      }, 1000000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const [activeSection, setActiveSection] = useState("Diabetes Care");

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <section className="service-details-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mt-65">
              <div className="service-details-content">
              {activeSection === 'Diabetes Care' && (
                <div id="diabetes-care"> 
                  <h3>Diabetes Care</h3>
                  <p>
                    Common problems in diabetes. Even though diabetes can lead
                    to other health problems, you can prevent or delay these
                    complications in many ways.
                  </p>
                  <h4>Common diabetes health complications include:</h4>
                  <div className="image pt-5 wow fadeInUp delay-0-2s">
                    <img
                      src="/assets/img/service-details/diabetes-symptoms.webp"
                      alt="diabetes-symptoms"
                    />
                  </div>
                  <ul className="list-style-two pt-10 pb-20">
                    <li>Heart Disease</li>
                    <li>Chronic Kidney Disease</li>
                    <li>Nerve Damage</li>
                    <li>Other Problems With Feet</li>
                    <li>Oral Health</li>
                    <li>Vision</li>
                    <li>Hearing</li>
                    <li>Mental Health</li>
                  </ul>
                  <p>
                    Learn how to prevent or delay these diabetes complications
                    and how to improve overall health.
                  </p>
                  <h4>Causes of diabetes</h4>
                  <ul className="list-style-two pt-10 pb-20">
                    <li>Weight</li>
                    <li>Family History</li>
                    <li>Genes</li>
                    <li>Insulin Resistance</li>
                    <li>Physical Inactivity</li>
                    <li>PCOS</li>
                    <li>Heart Disease</li>
                    <li>High BP</li>
                    <li>Hormonal Condition</li>
                    <li>Inactivity</li>
                    <li>Pancreatitis</li>
                    <li>Prediabetes</li>
                    <li>Pregnancy</li>
                  </ul>
                  <h4>Symptoms of Diabetes:</h4>
                  <p>
                    If you have diabetes, you might experience the following
                    symptoms:
                  </p>
                  <ul className="list-style-two pt-10 pb-20">
                    <li>You might feel weak and experience tiredness</li>
                    <li>You might have an urge to frequently urinate</li>
                    <li>You might feel thirsty more often</li>
                    <li>You might experience blurring of vision</li>
                    <li>You might notice an unplanned loss of weight</li>
                    <li>You might notice that sores or cuts heal slower2</li>
                  </ul>
                  <h6>Other symptoms that you might notice are:</h6>
                  <ul className="list-style-two pt-10 pb-20">
                    <li>
                      Men might notice a decrease in the sex drive, decreased
                      muscle strength or erectile dysfunction.
                    </li>
                    <li>
                      Women might notice frequent urinary tract infections,
                      yeast infection and dry and itchy skin.
                    </li>
                  </ul>
                </div>)}

                {activeSection === 'What Causes Diabetes?' && (
                <div id="what-causes-diabetes">
                  <h4>What Causes Diabetes?</h4>
                  <div className="image pt-5 wow fadeInUp delay-0-2s">
                    <img
                      src="/assets/img/service-details/cause-of-diabetes.webp"
                      alt="cause-of-diabetes"
                    />
                  </div>

                  <p>
                    When we eat food, it gets broken down by the digestive
                    system into its various nutrients. The carbohydrate that is
                    present in food is broken down into glucose i.e., sugar,
                    which requires assistance to reach its destination, i.e.,
                    the cells. A hormone called insulin (secreted by the
                    pancreas) assists this glucose transport to cells and plays
                    a key role in glucose absorption into the cells.
                  </p>

                  <p>
                    In diabetes, the pancreas either does not produce enough
                    insulin or the cells do not respond to the presence of
                    insulin and cannot utilize it (Type 2 diabetes), or the
                    pancreas does not produce insulin at all (Type 1 diabetes) .
                    As a result, there is an increase in blood glucose levels,
                    which is referred to as diabetes. However, different reasons
                    can lead to the development of diabetes. Moreover, there are
                    different types of diabetes as well.
                  </p>
                </div>)}

                {activeSection === 'Home Remedies' && (
                <div id="home-remedies">
                  <h4>Home Remedies for Diabetes:</h4>

                  <div className="image pt-5 wow fadeInUp delay-0-2s">
                    <img
                      src="/assets/img/service-details/home-remedies.webp"
                      alt="home-remedies"
                    />
                  </div>

                  <h5>1. Stress management</h5>

                  <p>
                    Stress might be the reason behind your rising blood sugar
                    levels. Learning ways to manage stress might be of help in
                    such conditions. Deep breathing, walking, meditation,
                    working out, pursuing a hobby, gardening, and listening to
                    your favourite music might be helpful to destress.
                  </p>

                  <p>
                    Approaching a mental health counsellor and asking for help
                    might also be a good first step towards coping with stress
                    better. Therefore, you should discuss this with your doctor
                    and reach a proper conclusion regarding methods of stress
                    management.
                  </p>

                  <h5>2. Eating right</h5>

                  <p>
                    It is important to consult a doctor or nutritionist and
                    decide on a suitable diet plan for your health needs. Your
                    doctor might recommend that you eat foods that are rich in
                    fibre, like whole grains, fruits, and vegetables etc. They
                    might recommend drinking water instead of juices and soda.
                    These carefully devised dietary changes, prescribed by your
                    doctor, might prove to be helpful for diabetes.
                  </p>

                  <h5>3. Exercise</h5>

                  <p>
                    Your doctor might recommend that you stay active most of the
                    days and exercise regularly to stay fit and active. This
                    might be helpful to lose weight if you are overweight,
                    maintain a healthy weight, and control blood sugar levels as
                    well. You can start exercising by taking frequent and short
                    walks during the day. Then, you can slightly ramp up your
                    exercise routine by trying out various other forms of
                    exercise like yoga, stretch bands, etc. However, you should
                    consult a professional before deciding on and adapting to a
                    new exercise routine.
                  </p>

                  <h5>4. Onion</h5>

                  <p>
                    An animal study on rabbits found that dried onion powder
                    might have a potential blood sugar-lowering activity
                    (anti-hyperglycaemic). Another study on rats showed that a
                    bioactive compound present in onions might have a blood
                    glucose-lowering effect. In yet another study conducted on
                    patients with diabetes, the blood sugar reducing the
                    potential of onion juice was noted. However, more research
                    is required to prove the effects of diabetes home remedies
                    Ayurveda might have to offer. Kindly consult an Ayurvedic
                    physician before using any herbal supplement or remedy.
                  </p>

                  <h5>5. Bel</h5>

                  <p>
                    Bel, also known as Bengal quince or Bilva, is scientifically
                    referred to as Aegle marmelos. It was seen in studies that
                    the leaves of the bel tree might have the potential to lower
                    the sugar, urea, and cholesterol of the blood. It might also
                    help to stop the sudden rise of blood sugar that usually
                    occurs after taking food. However, more studies are required
                    to prove the effects of such a natural cure for diabetes.
                    Please do not use it without consulting a doctor.
                  </p>

                  <h5>6. Neem</h5>

                  <p>
                    Animal studies have shown that neem might help lower blood
                    sugar. It might help increase glucose uptake by cells and
                    deposition of glycogen (complex sugar-containing glucose) in
                    rats. However, more human studies are required on the
                    possible use of neem for diabetes. You should consult a
                    doctor.
                  </p>

                  <h5>7. Babul</h5>

                  <p>
                    Its scientific name is Acacia arabica. It is found commonly
                    all over India in the wild. It might have an anti-diabetic
                    effect by potentially helping the release of insulin hormone
                    and lowering blood glucose levels. In animal studies, the
                    seeds of babul were found to have the potential to decrease
                    blood glucose levels by affecting the cells of the pancreas,
                    which might help in insulin production. However, more
                    studies are required to prove such claims; therefore, you
                    should consult a doctor.
                  </p>

                  <h5>8. Aloe Vera</h5>

                  <p>
                    Aloe vera is another such herb which might have the
                    potential to aid in managing diabetes. Animal studies have
                    shown that aloe vera might potentially decrease blood
                    glucose and increase the capacity of cells to utilize
                    glucose. It might also influence the secretion of insulin
                    from the pancreatic cells. However, more research is
                    required to prove the potential uses of aloe vera for
                    diabetes. Therefore, please consult a doctor.
                  </p>
                </div>)}

                {activeSection === 'Treatment in Ayurveda' && (
                <div id="treatment-vedarma">
                  <h4>Treatment of Diabetes in Ayurveda</h4>

                  <p>
                    Going by the ancient texts, the diabetes treatments in
                    Ayurveda include herbal medications, Panchakarma treatment,
                    its various processes (Vamana, Virechana, Vasti, etc.) and
                    many more. However, the procedure opted for the treatment
                    largely depends on the severity of the condition that the
                    individual is facing.
                  </p>
                </div>)}

                {activeSection === 'Treatment Vedarma offer' && (
                <div id="treatment-vedarma">
                  <h4>
                    Treatment Vedarma offer to control blood sugar naturally:
                  </h4>

                  <div className="image pt-5 wow fadeInUp delay-0-2s">
                    <img
                      src="/assets/img/service-details/ayurveda-treatment.webp"
                      alt="ayurveda-treatment"
                    />
                  </div>

                  <ul className="pt-10 pb-20">
                    <li>
                      1. A group of disease that results in too much sugar in
                      the blood ( high blood glucose).
                    </li>
                    <li>
                      2. Insulin is a hormone made by the pancreas that helps
                      glucose in your cells to be used for energy. or any-
                      insulin, or does not use insulin properly glucose then
                      stay in your blood and does not reach your cells.
                    </li>
                    <li>
                      3. Diabetes raises the risk of damage to the eye, kidney ,
                      nerves and heart. Diabetes is also related to some types
                      of cancers . Taking steps could be beneficial for diabetes
                      and risk of life.
                    </li>
                  </ul>
                </div>)}

                <div className="pt-20">
                  <h5>BENEFITS</h5>

                  <p>
                    Diabassist is a powerful ally in your diabetes management
                    journey, specially formulated to support healthy blood sugar
                    level ,thin natural supplement helps promote balanced
                    insulin function and enhances glucose metabolism.
                  </p>

                  <h5>INGREDIENTS</h5>

                  <ul className="list-style-two pt-10 pb-20">
                    <li>Neem</li>
                    <li>Kutki</li>
                    <li>Jamun beej</li>
                    <li>Vang bhasma</li>
                    <li>Karela</li>
                    <li>
                      These are some of the major herbs and some other
                      ingredients are used in diabassist to maintain. blood
                      sugar level.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-6 col-md-8">
              <div
                className={`service-sidebar ${
                  isScrolling ? "no-animation" : ""
                }`}
              >
                <div className="widget widget-menu delay-0-4s">
                  <ul>
                    <li>
                      <Link href="/">
                        <a onClick={() => handleLinkClick("Diabetes Care")}>
                          Diabetes Care
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          onClick={() =>
                            handleLinkClick("What Causes Diabetes?")
                          }
                        >
                          What Causes Diabetes?
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a onClick={() => handleLinkClick("Home Remedies")}>
                          Home Remedies
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          onClick={() =>
                            handleLinkClick("Treatment in Ayurveda")
                          }
                        >
                          Treatment in Ayurveda
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a
                          onClick={() =>
                            handleLinkClick("Treatment Vedarma offer")
                          }
                        >
                          Treatment Vedarma offer
                        </a>
                      </Link>
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
  );
};

export default DiabetesCareSection;
