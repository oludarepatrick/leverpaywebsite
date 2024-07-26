import { useState } from "react";
import logo from "../assets/images/leverpaylogo.svg";
import arrowRight from "../assets/images/arrow-right.svg";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="p-4 w-full bg-gray-shade-0 rounded-full text-white font-primarySemiBold">
        <div className="mx-auto flex justify-between items-center">
          <a href="/">
            <img
              src={logo}
              alt="leverpay logo"
              className="w-[150px] md:w-[246px]"
            />
          </a>
          <button className="lg:hidden block text-white" onClick={toggleMenu}>
            <IoMenu className="text-white w-10 h-10" />
          </button>
          <nav className="hidden lg:flex items-center text-blue-shade-20 gap-1 text-sm uppercase">
            <a
              href="#"
              className="hover:text-gray-200 px-4 py-2 bg-orange-shade-0 rounded-full text-white"
            >
              Home
            </a>
            <a href="#" className="hover:text-gray-200 px-4 py-2">
              Features
            </a>
            <a href="#" className="hover:text-gray-200 px-4 py-2">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-200 px-4 py-2">
              Reviews
            </a>
            <a href="#" className="hover:text-gray-200 px-4 py-2">
              API
            </a>
            <a href="#" className="hover:text-gray-200 px-4 py-2">
              Screenshot
            </a>
            <button className="flex gap-2 items-center bg-orange-shade-5 p-4 text-white rounded-[10px] uppercase">
              Merchant Login <img src={arrowRight} alt="arrow right" />
            </button>
          </nav>
        </div>
      </header>
      <div
        className={`lg:hidden fixed z-10 top-0 left-0 w-full h-full bg-gray-shade-0 text-white px-4 py-7 transition-transform transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="text-white">
            <IoClose className="w-10 h-10" />
          </button>
        </div>
        <nav className="mt-8 flex flex-col gap-3 text-blue-shade-20 font-primarySemiBold uppercase">
          <a
            href="#"
            className="hover:text-gray-200 text-center px-4 py-2 bg-orange-shade-0 rounded-full text-white"
          >
            Home
          </a>
          <a href="#" className="hover:text-gray-200 px-4 py-2 text-center">
            Features
          </a>
          <a href="#" className="hover:text-gray-200 px-4 py-2 text-center">
            Pricing
          </a>
          <a href="#" className="hover:text-gray-200 px-4 py-2 text-center">
            Reviews
          </a>
          <a href="#" className="hover:text-gray-200 px-4 py-2 text-center">
            API
          </a>
          <a href="#" className="hover:text-gray-200 px-4 py-2 text-center">
            Screenshot
          </a>
          <button className="flex gap-2 justify-center items-center bg-orange-shade-5 p-4 text-white rounded-full uppercase">
            Merchant Login <img src={arrowRight} alt="arrow right" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
