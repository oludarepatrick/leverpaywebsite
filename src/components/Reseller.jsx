import TextCard from "./TextCard";

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
      <div className="py-8">
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
        <div></div>
      </div>
    </div>
  );
};

export default Reseller;
