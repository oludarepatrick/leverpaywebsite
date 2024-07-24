import leverpayHome from "../assets/images/leverpay-home.png";
import googlePlay from "../assets/images/googlePlay.png";

const Hero = () => {
  return (
    <div className="border-[3px] border-solid border-white-shade-5 rounded-3xl md:rounded-[80px] p-7 flex flex-col lg:flex-row gap-8 items-center h-[500px] lg:h-full relative">
      <div>
        <h1 className="max-w-[490px] font-primarySemiBold text-[30px] md:text-[56px] text-white">
          Your Best <span className="text-orange-shade-10">Online</span> Payment
          Solution.
        </h1>
        <p className="w-[324px] font-primarySemiBold italic text-xl text-white">
          Unlocking Endless Possibilities for your Business Success
        </p>

        <div className="mt-8">
          <p className="font-primarySemiBold italic text-lg text-white">
            Download Now!
          </p>
          <button>
            <img src={googlePlay} alt="googlepay" />
          </button>
        </div>
      </div>
      <div className="lg:absolute right-0 top-0">
        <img src={leverpayHome} alt="leverpay home" />
      </div>
    </div>
  );
};

export default Hero;
