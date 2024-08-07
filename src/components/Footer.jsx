import Logo from "../assets/leverpay-logo.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start pt-6 px-4 md:px-2 gap-4 ">
        <div className="md:w-2/5">
          <img src={Logo} alt="leverpay logo" className="pb-12" />
          <p className="italic font-primaryRegular pb-10 text-justify">
            At Leverpay, we understand the challenges startups face, and
            that&apos;s why we&apos;ve crafted the perfect payment solution for
            you. Our easy integration, instant remittance, and a range of
            features cater specifically to your business needs.
          </p>
          <p className="italic font-primaryRegular pb-10 text-justify">
            Leverpay is a financial technology companies and not a bank.{" "}
            <span className="text-orange-shade-5">Our Banking</span> services
            are provided by our partner banks who are duly licensed by the{" "}
            <span className="text-orange-shade-5">CBN.</span>
          </p>
          <div className="flex gap-3 pb-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="hover:text-orange-shade-5 transition duration-300"
            >
              <FaFacebookSquare size={20} />
            </a>
            <a
              href="#"
              className="hover:text-orange-shade-5 transition duration-300"
            >
              <IoLogoWhatsapp size={20} />
            </a>
            <a
              href="https://twitter.com/leverpay?t=MWvBxPiogzWTMVAGGqVsPg&s=09"
              className="hover:text-orange-shade-5 transition duration-300"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/leverpay.io?r=nametag"
              className="hover:text-orange-shade-5 transition duration-300"
            >
              <PiInstagramLogoFill size={20} />
            </a>
            <a
              href=""
              className="hover:text-orange-shade-5 transition duration-300"
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="#"
              className="hover:text-orange-shade-5 transition duration-300"
            >
              <IoLogoYoutube size={20} />
            </a>
          </div>
        </div>
        <ul className="mb-2 md:mb-0">
          <li className="text-orange-shade-15 font-primarySemiBold pb-2">
            Navigation
          </li>
          <li className="font-primaryRegular leading-10 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="font-primaryRegular leading-10 cursor-pointer">
            About Us
          </li>
          <li className="font-primaryRegular leading-10 cursor-pointer">
            Features
          </li>
          <li className="font-primaryRegular leading-10 cursor-pointer">
            Pricing
          </li>
          <li className="font-primaryRegular leading-10 cursor-pointer">
            <Link to="/terms-and-conditions">Terms and Condition</Link>
          </li>
          <li className="font-primaryRegular leading-10 cursor-pointer">
            <Link to="privacy-policy">Privacy Policy</Link>
          </li>
          <li className="font-primaryRegular leading-10 cursor-pointer">
            <Link to="risk-policy">Risk Policy</Link>
          </li>
          <li className="font-primaryRegular leading-10 cursor-pointer">
            <Link to="account-deactivation">Account Deactivation</Link>
          </li>
          <li className="font-primaryRegular leading-10 cursor-pointer">
            Invest with us
          </li>
          <li className="font-primaryRegular leading-10 cursor-pointer">
            Partner with us
          </li>
        </ul>
        <ul className="mb-2 md:mb-0">
          <li className="text-orange-shade-15 font-primarySemiBold pb-2">
            Contact
          </li>
          <li className="font-primaryRegular leading-10">+2349060898687</li>
          <li className="font-primaryRegular leading-10">
            contact@leverpay.io
          </li>
        </ul>
        <div className="">
          <p className="text-orange-shade-15 font-primarySemiBold pb-4">
            Get the Latest Update
          </p>
          <div className="bg-white rounded-lg flex justify-between">
            <input
              type="email"
              placeholder="Email Address"
              className="pl-2 max-w-[150px] rounded-lg text-black font-primaryRegular placeholder:text-black focus:outline-none"
            />
            <button className="bg-orange-shade-10 p-3 rounded-r-lg">
              <IoSend />
            </button>
          </div>
        </div>
      </div>
      <hr className=" container mx-auto my-4 border-white-shade-5" />
      <div className=" container mx-auto pb-4 px-2 md:flex md:justify-center font-primaryRegular text-center">
        <span className="block text-sm pb-3">
          Copyright© 2024Leverpay. All Rights Reserved.
        </span>
        {/* <span className='block text-sm'>User Terms & Conditions | Privacy Policy</span> */}
      </div>
    </>
  );
};
export default Footer;
