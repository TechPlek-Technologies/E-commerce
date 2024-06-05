import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar1 = () => {

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
        }, 150);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    }, []);

  return (
    <div className="col-xl-3 col-lg-6 col-md-8">
              <div className={`service-sidebar ${isScrolling ? 'no-animation' : ''}`}>
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <ul>
                    <li>
                      <Link href="/">Diabetes Care</Link>
                    </li>
                    <li>
                      <Link href="/">What Causes Diabetes?</Link>
                    </li>
                    <li>
                      <Link href="/">Home Remedies</Link>
                    </li>
                    <li>
                      <Link href="/">Treatment Vedarma offer</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  )
}

export default Sidebar1;
