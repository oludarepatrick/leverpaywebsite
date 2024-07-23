import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="content-grid all | min-h-dvh">
      <Navbar/>
      <HeroSection/>
      <Pricing/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
