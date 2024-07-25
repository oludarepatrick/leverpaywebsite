import { GoArrowUpRight } from "react-icons/go";

const GetStarted = () => {
    return (
        <div className="container mx-auto flex flex-col items-center px-2 pb-4 pt-6 my-2 gap-4 md:flex md:flex-row md:justify-between">
            <h2 className="md:w-5/12 md:text-5xl text-3xl font-primarySemiBold leading-tight text-center md:text-left">
                Lets <span className="text-orange-shade-15">Get Started </span>With LeverPay App |
            </h2>
            <div>
                <button className="rounded-2xl bg-orange-shade-0 p-2 text-lg font-primaryRegular">
                    Get started 
                    <GoArrowUpRight size={30} className="inline"/>
                </button>
            </div>
        </div>
    )
}
export default GetStarted;