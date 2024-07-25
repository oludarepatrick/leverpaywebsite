import microsoft from "../assets/images/microsoft-logo.png";
import providus from "../assets/images/ProvidusBank_logo.png";
import visa from "../assets/images/Visa-logo.png";
import interswitch from "../assets/images/Interswitch_logo.png";

const Partner = () => {
    return (
        <div className="container mx-auto bg-white overflow-hidden ">
            <h2 className="font-primarySemiBold text-blue-shade-20 text-3xl text-center py-8">Our Partners</h2>
            <div className="flex justify-center items-center gap-8 pb-8 animate-leftScroll">
                    <img src={microsoft} alt="" className="lg:w-44 md:w-24 w-16"/>
                    <img src={providus} alt="" className="lg:w-44 md:w-24 w-16"/>
                    <img src={visa} alt="" className="lg:w-44 md:w-24 w-16"/>
                    <img src={interswitch} alt="" className="lg:w-44 md:w-24 w-16"/>
                    <img src={microsoft} alt="" className="lg:w-44 md:w-24 w-16"/>
                    <img src={providus} alt="" className="lg:w-44 md:w-24 w-16"/>
                    <img src={visa} alt="" className="lg:w-44 md:w-24 w-16"/>
                    <img src={interswitch} alt="" className="lg:w-44 md:w-24 w-16"/>
            </div>
        </div>
    )
}
export default Partner;