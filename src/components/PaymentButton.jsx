import { MdOutlineArrowOutward } from "react-icons/md";

const PaymentButton = ({ link, className }) => {
  return (
    <a
      href={link}
      className={`w-20 h-20 sm:w-[114px] sm:h-[114px] rounded-full bg-orange-shade-20 flex justify-center items-center ${className}`}
    >
      <MdOutlineArrowOutward className="w-10 h-10 sm:w-[50px] sm:h-[50px]" />
    </a>
  );
};

export default PaymentButton;
