import Logo from '../assets/leverpay-logo.png';
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='md:flex md:justify-between md: items-start pt-6'>
                <div className='md:w-2/4 pl-2'>
                    <img src={Logo} alt="" className='pb-10'/>
                    <p className='italic font-[LufgaSemiBold] pb-6 text-justify'>
                        At Leverpay, we understand the challenges startups face, 
                        and that&apos;s why we&apos;ve crafted the perfect payment solution for you.
                        Our easy integration, instant remittance, and a range of features cater 
                        specifically to your business needs.
                    </p>
                    <div className='flex gap-1'>
                        <FaFacebookSquare size={20}/>
                        <IoLogoYoutube size={20}/>
                        <IoLogoWhatsapp size={20}/>
                        <PiInstagramLogoFill size={20}/>
                        <FaTwitter size={20}/>

                    </div>
                </div>
                <ul className=''>
                    <li>Navigation</li>
                </ul>
                <ul className=''>
                    <li>Contact</li>
                </ul>
                <div className=''>
                    Get the Latest Update
                </div>
            </div>
            <hr className='my-4'/>
            <div className='pb-6 md:flex md:justify-between font-[LufgaRegular]'>
                <span className='block text-sm'>Copyright© 2024Leverpay. All Rights Reserved.</span>
                <span className='block text-sm'>User Terms & Conditions | Privacy Policy</span>
            </div>
        </>
    )
}
export default Footer;