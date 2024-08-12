import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <div className="w-full p-2 sm:py-11 flex flex-col gap-8 relative">
        <div className="absolute -z-[1] -top-44 -left-28 bg-brown-shade-0 blur-[150px] w-[444px] h-[444px] rounded-full"></div>
        <div className="container mx-auto">
          <Header />
        </div>
      </div>
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};
export default Layout;
