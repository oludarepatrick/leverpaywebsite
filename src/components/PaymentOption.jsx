const PaymentOption = ({ option }) => {
  return (
    <div className="bg-blue-shade-5 rounded-lg flex items-center gap-2 sm:gap-5 p-2 sm:p-5">
      <div className="w-[60px] h-[60px] sm:w-[116px] sm:h-[116px] flex justify-center items-center bg-orange-shade-20 rounded-full">
        <img
          src={option.icon}
          alt={option.text}
          className="w-[40px] h-[40px] sm:w-[80px] sm:h-[80px]"
        />
      </div>
      <p className="font-primaryMedium text-base sm:text-[24px] w-[300px]">
        {option.text}
      </p>
    </div>
  );
};

export default PaymentOption;
