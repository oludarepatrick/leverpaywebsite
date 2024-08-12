import { Fade, Slide, Zoom } from "react-awesome-reveal";
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

const Home = () => {
  return (
    <>
      <Fade direction="up" triggerOnce>
        <div className="w-full p-2 sm:py-11 flex flex-col gap-8 relative">
          <div className="container mx-auto min-[1380px]:px-[100px]">
            <Hero />
          </div>
        </div>
      </Fade>
      <div className="bg-white">
        <Slide direction="left" triggerOnce>
          <Why />
        </Slide>
      </div>
      <Zoom triggerOnce>
        <div className="container mx-auto py-10" id="features">
          <Features />
        </div>
      </Zoom>
      <div className="bg-white">
        <Slide direction="right" triggerOnce>
          <div className="container mx-auto">
            <PaymentIntegration />
          </div>
        </Slide>
      </div>
      <Fade direction="down" triggerOnce>
        <div className="bg-orange-shade-5">
          <div className="container mx-auto">
            <Reseller />
          </div>
        </div>
      </Fade>
      <div className="bg-white">
        <Zoom triggerOnce>
          <div className="container mx-auto">
            <Pricing />
          </div>
        </Zoom>
      </div>
      <Slide direction="up" triggerOnce>
        <Wallet />
      </Slide>
      <Fade direction="left" triggerOnce>
        <div className="bg-white">
          <Partnership />
        </div>
      </Fade>
      <Zoom triggerOnce>
        <VideoDemo />
      </Zoom>
      <div className="bg-white">
        <Fade direction="top" triggerOnce>
          <Partner />
        </Fade>
      </div>
      <div className="bg-blue-shade-10">
        <Fade direction="up" triggerOnce>
          <Screenshot />
        </Fade>
      </div>
      <Zoom triggerOnce>
        <div className="bg-gray-shade-0">
          <Contact />
        </div>
      </Zoom>
      <Fade direction="down" triggerOnce>
        <GetStarted />
      </Fade>
      <hr className="container mx-auto my-4 border-white-shade-5" />
    </>
  );
};

export default Home;
