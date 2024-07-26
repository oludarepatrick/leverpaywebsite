const PaymentIcon = ({ image }) => {
  return (
    <div className="bg-blue-shade-35 rounded-full w-[116px] h-[116px] flex justify-center items-center">
      <img src={image} alt="payment option" />
    </div>
  );
};

export default PaymentIcon;
