import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mobile1 from "../assets/images/mobile-1.png";
import mobile2 from "../assets/images/mobile-2.png";
import mobile3 from "../assets/images/mobile-3.png";
import mobile4 from "../assets/images/mobile-4.png";
import mobile5 from "../assets/images/mobile-5.png";
// import dashboardImg from "../assets/images/Dashboard-1.png";

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: "-10px", right: "5%" }}
      onClick={onClick}
    ></div>
  );
};
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", top: "-10px", left: "90%" }}
      onClick={onClick}
    ></div>
  );
};

const Screenshot = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 669,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-2" id="screenshot">
      <h2 className="font-primaryAgrandirBold text-3xl text-center py-8">
        Our App Screenshot
      </h2>
      <div className="">
        <Slider {...settings} className="py-4">
          <div className="mx-auto px-6">
            {/* <h1>1</h1> */}
            <img src={mobile1} alt="card screenshot" className=" max-w-full" />
          </div>
          <div className="mx-auto px-6">
            {/* <h1>2</h1> */}
            <img
              src={mobile2}
              alt="transaction screenshot"
              className="max-w-full"
            />
          </div>
          <div className="mx-auto px-6">
            {/* <h1>3</h1> */}
            <img src={mobile3} alt="" className="max-w-full" />
          </div>
          <div className="mx-auto px-6">
            {/* <h1>3</h1> */}
            <img src={mobile4} alt="" className="max-w-full" />
          </div>
          <div className="mx-auto px-6">
            {/* <h1>3</h1> */}
            <img src={mobile5} alt="" className="max-w-full" />
          </div>
        </Slider>
      </div>
      {/* <div className="bg-blue-shade-15 grid grid-cols-3 gap-2">
                <div className="mx-auto">
                    <img src={mobile1} alt="card screenshot"  className=""/>
                </div>
                <div className="mx-auto">
                    <img src={mobile2} alt="transaction screenshot"  className=""/>
                </div>
                <div className="mx-auto">
                    <img src={mobile3} alt="" className=""/>
                </div>
                
            </div> */}
    </div>
  );
};
NextArrow.propTypes = {
  className: PropTypes.any.isRequired,
  style: PropTypes.any,
  onClick: PropTypes.any,
};

PrevArrow.propTypes = {
  className: PropTypes.any.isRequired,
  style: PropTypes.any,
  onClick: PropTypes.any,
};

export default Screenshot;
