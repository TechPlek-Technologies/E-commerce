import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { useCategory } from '../utils/home-utils';

const Category = () => {

    const Arrow = ({ arrowCls, onClick, icon }) => {
        return (
          <button className={arrowCls} onClick={onClick}>
            <i className={icon}></i>
          </button>
        );
      };

    const categoryActive = {
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        speed: 1000,
        prevArrow: (
          <Arrow arrowCls={"slider-prev slick-arrow"} icon={"fas fa-chevron-left"} />
        ),
        nextArrow: (
          <Arrow arrowCls={"slider-next slick-arrow"} icon={"fas fa-chevron-right"} />
        ),
        focusOnSelect: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      const category=useCategory("category");
console.log("category",category);
      
  return (
    <section className="category-section-two pt-40 rpt-70 pb-20">
        <div className="container">
          <Slider {...categoryActive} className="category-active">

            {
                category?.map((item)=>(
                    <div className="category-item-two wow fadeInUp delay-0-2s" key={item._id}>
                        <div className="image">
                        <img
                            src={item.icon[0].url || ""}
                            alt={item.icon[0].name || "Category"}
                        />
                        </div>
                        <h5>
                           <Link href="/">{item.name}</Link>
                        </h5>
              
                    </div>
                ))
            }

          </Slider>
        </div>
      </section>
  )
}

export default Category
