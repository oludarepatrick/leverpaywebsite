import Slider from "react-slick";
import microsoft from "../assets/images/microsoft-logo1.png";
import providus from "../assets/images/ProvidusBank_logo.png";
import vfd from "../assets/images/vfd-logo.png";
import interswitch from "../assets/images/Interswitch-logo.png";

const Partner = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto overflow-hidden px-2">
      <h2 className="font-primaryAgrandirBold text-blue-shade-20 text-3xl text-center py-8">
        Our Partners
      </h2>
      <Slider {...settings}>
        <div>
          <img src={microsoft} alt="Microsoft" className="w-44" />
        </div>
        <div>
          <img src={providus} alt="Providus Bank" className="w-44" />
        </div>
        <div>
          <img src={vfd} alt="VFD" className="w-44" />
        </div>
        <div>
          <img src={interswitch} alt="Interswitch" className="w-44" />
        </div>
        <div>
          <img src={microsoft} alt="Microsoft" className="w-44" />
        </div>
        <div>
          <img src={providus} alt="Providus Bank" className="w-44" />
        </div>
        <div>
          <img src={vfd} alt="VFD" className="w-44 " />
        </div>
        <div>
          <img src={interswitch} alt="Interswitch" className="w-44" />
        </div>
      </Slider>
    </div>
  );
};

export default Partner;
