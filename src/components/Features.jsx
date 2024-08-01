import PaymentIcon from "./PaymentIcon";
import payment1 from "../assets/images/payment-1.svg";
import payment2 from "../assets/images/payment-2.svg";
import remittance from "../assets/images/remittance.png";
import FeatureList from "./FeatureList";
import PaymentButton from "./PaymentButton";

const firstPayment = ["International payment gateway", "Local payment gateway"];
const secondPayment = [
  "Airtime",
  "Data",
  "Electricity",
  "Internet Subscriptions (Spectranet, Swift, Smile)",
  "Cabletv (DSTV, GOTV, STARTIMES, SHOWMAX)",
  "Betting",
  "States Tax Payment",
  "Transport Tickets (Cowry)",
  "Airlines: flight tickets",
];

const Features = () => {
  return (
    <div className="">
      <h1 className="font-primaryAgrandirBold text-2xl sm:text-[32px] text-center">
        Our Features
      </h1>

      <div className="mt-12 px-3 sm:px-0">
        <h2 className="font-primarySemiBold text-lg sm:text-2xl my-10 ml-0 md:ml-28 lg:ml-40">
          Payment Solutions
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 xl:gap-20">
          <div className="w-full h-[700px] sm:w-[489px] sm:h-[746px] bg-blue-shade-5 rounded-[50px] p-4 relative">
            <div className="absolute -bottom-4 sm:-right-4">
              <PaymentButton link="#" />
            </div>
            <div className="flex justify-center">
              <PaymentIcon image={payment2} />
            </div>

            <h3 className="text-orange-shade-20 font-primaryMedium text-xl sm:text-3xl text-center my-3">
              Transactions
            </h3>

            <div className="flex flex-col gap-1">
              {firstPayment.map((item, index) => (
                <FeatureList text={item} key={index} />
              ))}
            </div>

            <div className="flex justify-center">
              <img src={remittance} alt="remittance diagram" />
            </div>
          </div>
          <div className="w-full h-[700px] sm:w-[489px] sm:h-[746px] bg-blue-shade-5 rounded-[50px] p-4 relative">
            <div className="absolute -bottom-4 sm:-right-4">
              <PaymentButton link="#" />
            </div>
            <div className="flex justify-center">
              <PaymentIcon image={payment1} />
            </div>

            <h3 className="text-orange-shade-20 font-primaryMedium text-xl sm:text-3xl text-center my-3">
              Transactions
            </h3>

            <div className="">
              {secondPayment.map((item, index) => (
                <FeatureList text={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
