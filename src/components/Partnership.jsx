import portrait from "../assets/images/portrait.png"

const Partnership = () => {
    return (
        <div className="container mx-auto bg-white px-2">
            <h2 className="text-blue-shade-20 font-primarySemiBold text-2xl text-center py-4 pt-8">International
                <span className="block"> Partnership</span>
            </h2>

            <div className="md:flex md:justify-evenly md:items-center md:gap-8 ">
                <ul className="flex flex-col gap-4 md:gap-6">
                    <li className="bg-blue-shade-15 font-primaryRegular text-base p-4 pl-6 rounded-lg">Receive payment in stablecoin as an international company.</li>
                    <li className="bg-blue-shade-15 font-primaryRegular text-orange-shade-5 text-base p-4 pl-6 rounded-lg">Enjoy Instant Remittance</li>
                    <li className="bg-blue-shade-15 font-primaryRegular text-base p-4 pl-6 rounded-lg">Free integration into our mobile app</li>
                </ul>
                <div className="md:mt-[-11rem]">
                    <img src={portrait} alt="image here" className="md:h-[600px] h-[400px] mx-auto" />
                </div>
            </div>
        </div>
    )

}
export default Partnership;