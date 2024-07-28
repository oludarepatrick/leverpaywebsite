import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Wallet from "./components/Wallet";
import Partnership from "./components/Partnership";
import VideoDemo from "./components/VideoDemo";
import Partner from "./components/Partner";
import Screenshot from "./components/Screenshot";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import Why from "./components/Why";
import PaymentIntegration from "./components/PaymentIntegration";
import Reseller from "./components/Reseller";

function App() {
  return (
    <div className="">
      <div className="w-full p-2 sm:py-11 flex flex-col gap-8 relative">
        <div className="absolute -z-[1] -top-44 -left-28 bg-brown-shade-0 blur-[150px] w-[444px] h-[444px] rounded-full"></div>
        {/* <div className="absolute -z-[1] -bottom-44 -right-28 bg-blue-shade-0 blur-[150px] w-[444px] h-[444px] rounded-full"></div> */}
        <div className="container mx-auto">
          <Header />
        </div>
        <div className="h-full container my-5 mx-auto">
          <Hero />
        </div>
      </div>
      <div className="bg-blue-shade-30">
        <Why />
      </div>
      <div className="container mx-auto py-10">
        <Features />
      </div>

      <div className="bg-blue-shade-40">
        <div className="container mx-auto">
          <PaymentIntegration />
        </div>
      </div>

      <div className="bg-blue-shade-5">
        <div className="container mx-auto">
          <Reseller />
        </div>
      </div>
      <Pricing />
      <Wallet />
      <Partnership />
      <VideoDemo />
      <Partner />
      <Screenshot />
      {/* <div className="bg-blue-shade-0"> */}
      <Contact />
      {/* </div> */}
      <GetStarted />
      <hr className=" container mx-auto my-4 border-white-shade-5" />
      <Footer />
    </div>
  );
}

export default App;
