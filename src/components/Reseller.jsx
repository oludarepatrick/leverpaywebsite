import TextCard from "./TextCard";
import smilingGirl from "../assets/images/smiling-girl.png";

const resellerText = [
  {
    text: "Sell our services and earn up to 500k Monthly",
    color: "orange",
  },
  {
    text: "Sign up at zero cost",
    color: "orange",
  },
  {
    text: "Fund your account with as low as 1k and start selling",
    color: "white",
  },
  {
    text: "Refer others and earn additional commission",
    color: "orange",
  },
];

const Reseller = () => {
  return (
    <div>
      <div className="py-8 px-2 sm:px-0 flex flex-col items-center gap-14 lg:gap-5 lg:flex-row justify-between">
        <div>
          <h1 className="text-3xl font-primaryAgrandirBold">Reseller Agent</h1>
          <p className="text-orange-shade-20 text-xl font-primaryMedium my-8 w-[357px]">
            Make <span className="font-primaryExtraBold">Money</span> with us
            Become our <span className="font-primaryExtraBold">agent</span> and
            earn up to <span className="font-primaryExtraBold">500k</span>{" "}
            Monthly.
          </p>

          <div className="flex flex-col gap-5 max-w-[592px]">
            {resellerText.map((item, index) => (
              <TextCard item={item} key={index} />
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative flex justify-center xl:justify-self-auto rounded-full bg-white w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] xl:w-[648px] xl:h-[648px]">
            <img
              src={smilingGirl}
              alt="smilling lady"
              className="absolute -bottom-8 lg:-bottom-[105px] xl:-bottom-8 w-[250px] sm:w-[300px] lg:w-[420px] xl:w-[576px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reseller;
