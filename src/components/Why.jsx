import thinkingLady from "../assets/images/lady_thinking.png";

const Why = () => {
  return (
    <div className="container flex flex-col-reverse mx-auto py-5 lg:py-[170px] relative">
      <div>
        <h1 className="font-primaryAgrandirBold text-[32px] ml-10">
          Why Leverpay?
        </h1>
        <div className="rounded-[20px] bg-blue-shade-5 max-w-[833px] h-[268px] p-4">
          <p className="font-primarySemiBold italic text-base text-justify sm:text-2xl">
            At Leverpay, we understand the challenges startups face, and
            that&apos;s why we&apos;ve crafted the perfect payment solution for
            you. Our easy integration, instant remittance, and a range of
            features cater specifically to your business needs.
          </p>
        </div>
      </div>

      <div className="flex justify-center lg:block lg:absolute -bottom-6 -right-10">
        <img
          src={thinkingLady}
          alt="a lady in her thought"
          className="h-80 lg:h-full"
        />
      </div>
    </div>
  );
};

export default Why;
