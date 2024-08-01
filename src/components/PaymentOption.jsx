import { Fade} from 'react-awesome-reveal';

const PaymentOption = ({ option }) => {
  return (
    <div className="bg-blue-shade-0 rounded-lg flex items-center gap-2 sm:gap-10 p-2 sm:p-5">
        <Fade>
        <div className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] flex justify-center items-center bg-orange-shade-20 rounded-full">
          <img
            src={option.icon}
            alt={option.text}
            className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
          />
        </div>
        <p className="font-primaryRegular text-base md:w-[300px]">
          {option.text}
        </p>
       </Fade>  
      </div>
   
  );
};

export default PaymentOption;
