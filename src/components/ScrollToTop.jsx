// import { Link, scrollToTop } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div
      className="fixed bottom-10 right-10 bg-orange-shade-20 rounded-[100%] p-2"
      onClick={scrollToTop}
    >
      <FaArrowAltCircleUp size={50} />
    </div>
  );
};
export default ScrollToTop;
