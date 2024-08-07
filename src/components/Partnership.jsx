import partnerImg from "../assets/images/business-people.png";

const Partnership = () => {
  return (
    <div className="container mx-auto px-2 pb-8">
      <h2 className="text-blue-shade-20 font-primaryAgrandirBold text-2xl text-center pb-4 pt-8">
        International Partnership
        {/* <span className="block">Partnership</span> */}
      </h2>

      <div className="bg-gray-shade-0 rounded-3xl max-w-screen-lg mx-auto">
        <div className="md:flex items-center justify-center">
          <div className="md:max-w-[500px] md-shrink-0">
            <img
              src={partnerImg}
              alt="image here"
              className="h-[300px] md:h-full w-full object-cover md:rounded-none rounded-t-3xl"
            />
          </div>
          <ul className="flex flex-col gap-4 md:gap-6 p-8">
            <li className="bg-blue-shade-15 font-primaryRegular text-base p-4 pl-6 rounded-lg">
              Receive payment in stablecoin as an international company.
            </li>
            <li className="bg-blue-shade-15 font-primaryRegular text-orange-shade-20 text-base p-4 pl-6 rounded-lg">
              Enjoy Instant Remittance
            </li>
            <li className="bg-blue-shade-15 font-primaryRegular text-base p-4 pl-6 rounded-lg">
              Free integration into our mobile app
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Partnership;
