import mobile1 from "../assets/images/mobile-1.png";
import mobile2 from "../assets/images/mobile-2.png";
import mobile3 from "../assets/images/mobile-3.png";
// import dashboardImg from "../assets/images/Dashboard-1.png";

const Screenshot = () => {
    return (
        <div className="container mx-auto px-2">
            <h2 className="font-primaryAgrandirBold text-3xl text-center py-8">Our App Screenshot</h2>
            <div className="bg-blue-shade-15 grid grid-cols-3 gap-2">
                <div className="mx-auto">
                    <img src={mobile1} alt="card screenshot"  className=""/>
                </div>
                <div className="mx-auto">
                    <img src={mobile2} alt="transaction screenshot"  className=""/>
                </div>
                <div className="mx-auto">
                    <img src={mobile3} alt="" className=""/>
                </div>
                {/* <div className="mx-auto">
                    <img src={dashboardImg} alt="" className="h-64 w-auto object-cover"/>
                </div> */}
            </div>
        </div>
    )
}
export default Screenshot;
