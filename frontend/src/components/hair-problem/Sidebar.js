import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

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
                      <Link href="/">Dandruff</Link>
                    </li>
                    <li>
                      <Link href="/">Split Ends</Link>
                    </li>
                    <li>
                      <Link href="/">Greasy Hair (Oily scalp)</Link>
                    </li>
                    <li>
                      <Link href="/">Hair Loss</Link>
                    </li>
                    <li>
                      <Link href="/">Dry Hair</Link>
                    </li>
                    <li>
                      <Link href="/">Premature Graying</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  )
}

export default Sidebar;
