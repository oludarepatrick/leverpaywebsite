import { IoIosCheckmark } from "react-icons/io";

const FeatureList = ({ text }) => {
  return (
    <div className="flex gap-1 sm:gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10">
        <IoIosCheckmark className="text-orange-shade-20 w-8 h-8" />
      </div>
      <p className="text-xs sm:text-base font-primaryThin font-semibold flex items-center">
        {text}
      </p>
    </div>
  );
};

export default FeatureList;
