import Button from "./Button";
import PaymentButton from "./PaymentButton";


const PricingCard = ({ title, fee, features }) => (
    <div className="w-full lg:rounded-[50px] md:w-4/5 md: rounded-3xl bg-blue-shade-5 py-8 px-4 pl-8 relative">
        <div className="absolute -bottom-4 sm:-right-4">
              <PaymentButton link="#" className="sm:w-[90px] sm:h-[90px] w-[65px] h-[65px]" />
        </div>
        <h4 className="font-primarySemiBold text-2xl mb-4">{title}:
            <span className="block text-orange-shade-20 text-3xl">{fee}</span>
        </h4>
        <ul className="py-6 pb-24 px-4 list-disc text-orange-shade-20 space-y-2">
            {features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>
        <div className="text-center">
            <Button className="bg-orange-shade-20 p-2 rounded w-3/5 mx-auto text-black font-primarySemiBold">
                Choose Plan
            </Button>
        </div>
    </div>
);


export default PricingCard;



// const PricingCard = ({ title, fee, features }) => (
//     <div className="w-full lg:rounded-[50px] rounded-3xl bg-blue-shade-5 py-8 px-4">
//         <h4 className="font-primarySemiBold text-2xl mb-4">{title}:
//             <span className="block text-orange-shade-20 text-3xl">{fee}</span>
//         </h4>
//         <ul className="py-6 pb-16 list-disc list-inside text-orange-shade-20 space-y-2">
//             {features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//             ))}
//         </ul>
//         <div className="text-center">
//             <Button className="bg-orange-shade-20 p-2 rounded w-3/5 mx-auto text-black font-primarySemiBold">
//                 Choose Plan
//             </Button>
//         </div>
//     </div>
// );
