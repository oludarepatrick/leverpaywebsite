import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="relative w-full p-2 sm:py-11 flex flex-col gap-8">
        <div className="absolute -z-[1] -top-44 -left-28 bg-brown-shade-0 blur-[150px] w-[444px] h-[444px] rounded-full"></div>
        <div className="container mx-auto flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {/* Main content area */}
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
