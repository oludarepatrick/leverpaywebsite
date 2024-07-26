import { MdOutlineArrowOutward } from "react-icons/md";

const PaymentButton = ({ link }) => {
  return (
    <a
      href={link}
      className="w-[114px] h-[114px] rounded-full bg-orange-shade-20 flex justify-center items-center"
    >
      <MdOutlineArrowOutward className="w-[50px] h-[50px]" />
    </a>
  );
};

export default PaymentButton;
