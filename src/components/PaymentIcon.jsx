const PaymentIcon = ({ image }) => {
  return (
    <div className="bg-blue-shade-35 rounded-full w-14 h-14 sm:w-[116px] sm:h-[116px] flex justify-center items-center">
      <img src={image} alt="payment option" className="max-sm:w-7 max-sm:h-7" />
    </div>
  );
};

export default PaymentIcon;
