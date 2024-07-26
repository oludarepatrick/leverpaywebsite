import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Screenshot from "./components/Screenshot";
import Partner from "./components/Partner";
import Contact from "./components/Contact";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <div className="w-full p-4 sm:py-11 flex flex-col gap-8 relative">
        {/* <div className="absolute -z-[1] -top-44 -left-28 bg-brown-shade-0 blur-[150px] w-[444px] h-[444px] rounded-full"></div> */}
        {/* <div className="absolute -z-[1] -bottom-44 -right-28 bg-blue-shade-0 blur-[150px] w-[444px] h-[444px] rounded-full"></div> */}
        <div className="container mx-auto">
          <Header />
        </div>
        <div className="h-full container my-5 mx-auto">
          <Hero />
        </div>
      </div>
      {/* <main className="mt-16">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to My Landing Page
          </h1>
          <p>This is a simple landing page with a responsive header.</p>
        </div>
      </main> */}
      <Pricing /> 
      <Features />
      {/* <div className="bg-blue-shade-0"> */}
      <Partner/>
      <Screenshot/>
        <Contact/>
      {/* </div> */}
      <GetStarted/>
      <hr className=' container mx-auto my-4 border-white-shade-5'/>
      <Footer />
    </div>
   
  );
}

export default App;
