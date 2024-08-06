import happyWoman from "../assets/images/surprised-happy-african-woman.png";
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
      <div className="px-2 sm:px-0 flex flex-col items-center gap-14 lg:gap-5 lg:flex-row justify-evenly">
        <div className="flex justify-center items-center">
          {/* <div className="relative flex justify-center xl:justify-self-auto rounded-full bg-white w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] xl:w-[548px] xl:h-[548px]"> */}
          <img src={happyWoman} alt="smilling lady" className="" />
          {/* </div> */}
        </div>
        <div className="py-8">
          <h1 className="text-3xl text-center lg:text-left font-primaryAgrandirBold">
            Reseller Agent
          </h1>
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
      </div>
    </div>
  );
};

export default Reseller;

// import portrait from "../assets/images/woman-portrait.png";
// import TextCard from "./TextCard";

// const resellerText = [
//   {
//     text: "Sell our services and earn up to 500k Monthly",
//     color: "orange",
//   },
//   {
//     text: "Sign up at zero cost",
//     color: "orange",
//   },
//   {
//     text: "Fund your account with as low as 1k and start selling",
//     color: "white",
//   },
//   {
//     text: "Refer others and earn additional commission",
//     color: "orange",
//   },
// ];

// const Reseller = () => {
//   return (
//     <div>
//       <div className="py-8 px-10 flex flex-col lg:flex-row lg:justify-evenly items-center">
//         <div >
//           <h1 className="text-3xl text-center lg:text-left font-primaryAgrandirBold">Reseller Agent</h1>
//           <p className="text-orange-shade-20 text-xl font-primaryMedium my-8 w-[357px]">
//             Make <span className="font-primaryExtraBold">Money</span> with us
//             Become our <span className="font-primaryExtraBold">agent</span> and
//             earn up to <span className="font-primaryExtraBold">500k</span>{" "}
//             Monthly.
//           </p>

//           <div className="flex flex-col gap-5 max-w-[592px]">
//             {resellerText.map((item, index) => (
//               <TextCard item={item} key={index} />
//             ))}
//           </div>
//         </div>
//         <div className="py-4">
//           <div className="bg-white rounded-[100%] lg:max-w-[500px] lg:max-h-[500px] max-w-[400px] max-h-[400px] ">
//             <img src={portrait} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reseller;
