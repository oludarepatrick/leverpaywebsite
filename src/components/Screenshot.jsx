import cardImg from "../assets/images/cards-1.png";
import transactionImg from "../assets/images/transaction-1.png";
import transferImg from "../assets/images/transfer-1.png";
import dashboardImg from "../assets/images/Dashboard-1.png";

const Screenshot = () => {
    return (
        <div className="container mx-auto px-2">
            <h2 className="font-primaryAgrandirBold text-3xl text-center py-8">Our App Screenshot</h2>
            <div className="bg-blue-shade-15 grid grid-cols-2 gap-4">
                <div className="mx-auto">
                    <img src={cardImg} alt="card screenshot"  className=""/>
                </div>
                <div className="mx-auto">
                    <img src={transactionImg} alt="transaction screenshot"  className=""/>
                </div>
                <div className="mx-auto">
                    <img src={transferImg} alt="" className="h-64 w-auto object-cover"/>
                </div>
                <div className="mx-auto">
                    <img src={dashboardImg} alt="" className="h-64 w-auto object-cover"/>
                </div>
            </div>
        </div>
    )
}
export default Screenshot;
