import { useState } from "react";
import { Link } from "react-scroll";
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
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:text-gray-200 px-4 py-2 bg-orange-shade-0 rounded-full text-white cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-gray-200 px-4 py-2 cursor-pointer"
            >
              Features
            </Link>
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-gray-200 px-4 py-2 cursor-pointer"
            >
              Pricing
            </Link>
            <a
              href="https://user.leverpay.io/"
              target="_blank"
              className="hover:text-gray-200 px-4 py-2 cursor-pointer"
            >
              User Login
            </a>
            <Link
              to="API"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-gray-200 px-4 py-2 cursor-pointer"
            >
              API
            </Link>
            <Link
              to="screenshot"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-gray-200 px-4 py-2 cursor-pointer"
            >
              Screenshot
            </Link>
            <a
              href="https://merchant.leverpay.io/welcome"
              target="_blank"
              className="flex gap-2 items-center bg-orange-shade-5 p-4 text-white rounded-[10px] uppercase"
            >
              Merchant Login <img src={arrowRight} alt="arrow right" />
            </a>
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
            href="/"
            className="hover:text-gray-200 text-center px-4 py-2 bg-orange-shade-0 rounded-full text-white"
          >
            Home
          </a>
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-gray-200 px-4 py-2 text-center cursor-pointer"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            to="pricing"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-gray-200 px-4 py-2 text-center cursor-pointer"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <a
            href="https://user.leverpay.io/"
            target="_blank"
            className="hover:text-gray-200 px-4 py-2 text-center"
            onClick={toggleMenu}
          >
            User Login
          </a>
          <a href="#" className="hover:text-gray-200 px-4 py-2 text-center">
            API
          </a>
          <Link
            to="screenshot"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={toggleMenu}
            className="hover:text-gray-200 px-4 py-2 text-center cursor-pointer"
          >
            Screenshot
          </Link>
          <a
            href="https://merchant.leverpay.io/welcome"
            target="_blank"
            className="flex gap-2 justify-center items-center bg-orange-shade-5 p-4 text-white rounded-full uppercase"
            onClick={toggleMenu}
          >
            Merchant Login <img src={arrowRight} alt="arrow right" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;

// import { useState } from "react";
// import { Link } from "react-scroll";
// import logo from "../assets/images/leverpaylogo.svg";
// import arrowRight from "../assets/images/arrow-right.svg";

// import { IoMenu } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <header className="p-4 w-full bg-gray-shade-0 rounded-full text-white font-primarySemiBold">
//         <div className="mx-auto flex justify-between items-center">
//           <a href="/">
//             <img
//               src={logo}
//               alt="leverpay logo"
//               className="w-[150px] md:w-[246px]"
//             />
//           </a>
//           <button className="lg:hidden block text-white" onClick={toggleMenu}>
//             <IoMenu className="text-white w-10 h-10" />
//           </button>
//           <nav className="hidden lg:flex items-center text-blue-shade-20 gap-1 text-sm uppercase">
//             <Link
//               to="/"
//               spy={true}
//               smooth={true}
//               offset={50}
//               duration={500}
//               className="hover:text-gray-200 px-4 py-2 bg-orange-shade-0 rounded-full text-white cursor-pointer"
//             >
//               Home
//             </Link>
//             <Link
//               to="features"
//               spy={true}
//               smooth={true}
//               offset={-100}
//               duration={500}
//               className="hover:text-gray-200 px-4 py-2 cursor-pointer"
//             >
//               Features
//             </Link>
//             <Link
//               to="pricing"
//               spy={true}
//               smooth={true}
//               offset={-100}
//               duration={500}
//               className="hover:text-gray-200 px-4 py-2 cursor-pointer"
//             >
//               Pricing
//             </Link>
//             <Link
//               to="reviews"
//               spy={true}
//               smooth={true}
//               offset={-100}
//               duration={500}
//               className="hover:text-gray-200 px-4 py-2 cursor-pointer"
//             >
//               Reviews
//             </Link>
//             <Link
//               to="API"
//               spy={true}
//               smooth={true}
//               offset={-100}
//               duration={500}
//               className="hover:text-gray-200 px-4 py-2 cursor-pointer"
//             >
//               API
//             </Link>
//             <Link
//               to="screenshot"
//               spy={true}
//               smooth={true}
//               offset={-100}
//               duration={500}
//               className="hover:text-gray-200 px-4 py-2 cursor-pointer"
//             >
//               Screenshot
//             </Link>
//             <a href="https://merchant.leverpay.io/welcome" target="_blank" className="flex gap-2 items-center bg-orange-shade-5 p-4 text-white rounded-[10px] uppercase">
//               Merchant Login <img src={arrowRight} alt="arrow right" />
//             </a>
//           </nav>
//         </div>
//       </header>
//       <div
//         className={`lg:hidden fixed z-10 top-0 left-0 w-full h-full bg-gray-shade-0 text-white px-4 py-7 transition-transform transform ${
//           isOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="flex justify-end">
//           <button onClick={toggleMenu} className="text-white">
//             <IoClose className="w-10 h-10" />
//           </button>
//         </div>
//         <nav className="mt-8 flex flex-col gap-3 text-blue-shade-20 font-primarySemiBold uppercase">
//           <a
//             href="#"
//             className="hover:text-gray-200 text-center px-4 py-2 bg-orange-shade-0 rounded-full text-white"
//           >
//             Home
//           </a>
//           <a href="#" className="hover:text-gray-200 px-4 py-2 text-center">
//             Features
//           </a>
//           <a href="#" className="hover:text-gray-200 px-4 py-2 text-center">
//             Pricing
//           </a>
//           <a href="#" className="hover:text-gray-200 px-4 py-2 text-center">
//             Reviews
//           </a>
//           <a href="#" className="hover:text-gray-200 px-4 py-2 text-center">
//             API
//           </a>
//           <a href="#" className="hover:text-gray-200 px-4 py-2 text-center">
//             Screenshot
//           </a>
//           <button className="flex gap-2 justify-center items-center bg-orange-shade-5 p-4 text-white rounded-full uppercase">
//             Merchant Login <img src={arrowRight} alt="arrow right" />
//           </button>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Header;
