import invoice from "../assets/images/invoice.svg";
import affiliate from "../assets/images/affiliate.svg";
import crypto_naira from "../assets/images/crypto_naira.svg";
import customer_service from "../assets/images/customer_service.svg";
import dashboard from "../assets/images/dashboard.svg";
import marketing_support from "../assets/images/marketing_support.svg";
import merchant_payment from "../assets/images/merchant_payment.svg";
import PaymentOption from "./PaymentOption";

const paymentOptions = [
  {
    icon: invoice,
    text: "Invoice link",
  },
  {
    icon: merchant_payment,
    text: "Payment integration on merchant platform",
  },
  {
    icon: crypto_naira,
    text: "Crypto and Naira Checkout",
  },
  {
    icon: affiliate,
    text: "Affiliate Split",
  },
  {
    icon: dashboard,
    text: "Dashboard metrics",
  },
  {
    icon: marketing_support,
    text: "Marketing support",
  },
  {
    icon: customer_service,
    text: "24/7 customer services",
  },
];

const PaymentIntegration = () => {
  return (
    <div className="py-10">
      <h1 className="text-center font-primaryAgrandirBold text-[24px] sm:text-[32px] max-w-[441px] mx-auto mb-4">
        Merchant Payment Integration
      </h1>
      <div className="w-full bg-blue-shade-20 rounded-lg sm:rounded-[50px] px-2 sm:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {paymentOptions.map((option, index) => (
            <PaymentOption key={index} option={option} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentIntegration;
