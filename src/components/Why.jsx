// import thinkingLady from "../assets/images/lady_thinking.png";
import thinking from "../assets/images/thinking-icon.png";

const Why = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-4 px-3 py-10 relative">
      {/* <div className="px-3 sm:px-0 bg-white"> */}
        <h1 className="font-primaryAgrandirBold text-blue-shade-30 text-2xl sm:text-[32px] pb-4">
          Why Leverpay?
        </h1>
        <div className="rounded-[20px] bg-blue-shade-30 max-w-[833px] md:px-24 px-4 flex pb-16 flex-col items-center">
          <img src={thinking} alt="thinking-icon" className="py-6"/>
          <p className="font-primaryRegular italic text-base text-justify ">
            At Leverpay, we understand the challenges startups face, and
            that&apos;s why we&apos;ve crafted the perfect payment solution for
            you. Our easy integration, instant remittance, and a range of
            features cater specifically to your business needs.
          </p>
        </div>
      {/* </div> */}

      {/* <div className="flex justify-center lg:block lg:absolute -bottom-6 -right-10">
        <img
          src={thinking}
          alt="a lady in her thought"
          className="h-80 lg:h-full"
        />
      </div> */}
    </div>
  );
};

export default Why;
