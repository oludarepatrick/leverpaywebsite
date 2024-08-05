// Home.jsx
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Features from "../components/Features";
import Wallet from "../components/Wallet";
import Partnership from "../components/Partnership";
import VideoDemo from "../components/VideoDemo";
import Partner from "../components/Partner";
import Screenshot from "../components/Screenshot";
import Contact from "../components/Contact";
import GetStarted from "../components/GetStarted";
import Why from "../components/Why";
import PaymentIntegration from "../components/PaymentIntegration";
import Reseller from "../components/Reseller";
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  return (
    <>
        <Fade direction="up" triggerOnce>
            <div className="w-full p-2 sm:py-11 flex flex-col gap-8 relative">
                <div className="container mx-auto" >
                    <Hero />
                </div>
            </div>
        </Fade>
        <Slide direction="left" triggerOnce>
            <div className='bg-white'>
                <Why />
            </div>
        </Slide>
        <Zoom triggerOnce>
            <div className="container mx-auto py-10" id="features">
                <Features />
            </div>
        </Zoom>
        <Slide direction="right" triggerOnce>
            <div className="bg-white">
                <div className="container mx-auto">
                    <PaymentIntegration />
                </div>
            </div>
        </Slide>
        <Fade direction="down" triggerOnce>
            <div className="bg-blue-shade-25">
                <div className="container mx-auto">
                    <Reseller />
                </div>
            </div>
        </Fade>
        <Zoom triggerOnce>
            <Pricing />
        </Zoom>
        <Slide direction="up" triggerOnce>
            <Wallet />
        </Slide>
        <Fade direction="left" triggerOnce>
            <Partnership />
        </Fade>
      <Zoom triggerOnce>
            <VideoDemo />
      </Zoom>
      <Fade direction="top" triggerOnce>
            <Partner />
      </Fade>
      <Fade direction="up" triggerOnce>
            <Screenshot />
      </Fade>
      <Zoom triggerOnce>
            <Contact />
      </Zoom>
      <Fade direction="down" triggerOnce>
            <GetStarted />
      </Fade>
      <hr className="container mx-auto my-4 border-white-shade-5" />
      <ScrollToTop/>
    </>
  );
};

export default Home;




// import Hero from "../components/Hero";
// import Pricing from "../components/Pricing";
// import Features from "../components/Features";
// import Wallet from "../components/Wallet";
// import Partnership from "../components/Partnership";
// import VideoDemo from "../components/VideoDemo";
// import Partner from "../components/Partner";
// import Screenshot from "../components/Screenshot";
// import Contact from "../components/Contact";
// import GetStarted from "../components/GetStarted";
// import Why from "../components/Why";
// import PaymentIntegration from "../components/PaymentIntegration";
// import Reseller from "../components/Reseller";

// const Home = () => {
//     return (
//         <>
//             <div className="w-full p-2 sm:py-11 flex flex-col gap-8 relative">
//                 <div className="container mx-auto">
//                     <Hero />
//                 </div>
//             </div>
//             <Why />
//             <div className="container mx-auto py-10">
//                 <Features />
//             </div>
//             <div className="bg-blue-shade-40">
//                 <div className="container mx-auto">
//                     <PaymentIntegration />
//                 </div>
//             </div>
//             <div className="bg-blue-shade-5">
//                 <div className="container mx-auto">
//                     <Reseller />
//                 </div>
//             </div>
//             <Pricing />
//             <Wallet />
//             <Partnership />
//             <VideoDemo />
//             <Partner />
//             <Screenshot />
//             <Contact />
//             <GetStarted />
//             <hr className="container mx-auto my-4 border-white-shade-5" />
//         </>
//     )
// }
// export default Home;


// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
// import Features from "./components/Features";
// import Wallet from "./components/Wallet";
// import Partnership from "./components/Partnership";
// import VideoDemo from "./components/VideoDemo";
// import Partner from "./components/Partner";
// import Screenshot from "./components/Screenshot";
// import Contact from "./components/Contact";
// import GetStarted from "./components/GetStarted";
// import Why from "./components/Why";
// import PaymentIntegration from "./components/PaymentIntegration";
// import Reseller from "./components/Reseller";

// const Home = () => {
//     return (
//         <div className="">
//             <div className="w-full p-2 sm:py-11 flex flex-col gap-8 relative">
//                 <div className="absolute -z-[1] -top-44 -left-28 bg-brown-shade-0 blur-[150px] w-[444px] h-[444px] rounded-full"></div>
//                 <div className="container mx-auto">
//                     <Header />
//                 </div>
//                 <div className="h-full container my-5 mx-auto">
//                     <Hero />
//                 </div>
//             </div>
//             <div className="bg-blue-shade-30">
//                 <Why />
//             </div>
//             <div className="container mx-auto py-10">
//                 <Features />
//             </div>

//             <div className="bg-blue-shade-40">
//                 <div className="container mx-auto">
//                     <PaymentIntegration />
//                 </div>
//             </div>

//             <div className="bg-blue-shade-5">
//                 <div className="container mx-auto">
//                     <Reseller />
//                 </div>
//             </div>
//             <Pricing />
//             <Wallet />
//             <Partnership />
//             <VideoDemo />
//             <Partner />
//             <Screenshot />
//             <Contact />
//             <GetStarted />
//             <hr className=" container mx-auto my-4 border-white-shade-5" />
//         </div>
//     )
// }
// export default Home;