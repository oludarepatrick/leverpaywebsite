// import wallet from "../assets/images/wallet.png"

const Wallet = () => {
    return (
        <div className="container mx-auto px-2 md:py-8">
            <h2 className="font-primaryAgrandirBold text-2xl text-center py-2 pt-8 ">Wallet Services</h2>

            <div className="md:flex md:justify-center md:items-center py-10 relative">
                <ul className="flex flex-col gap-4 sm:gap-6">
                    <li className="bg-blue-shade-20 font-primaryRegular  text-orange-shade-20 text-base p-8 px-16 rounded-lg">Integrate and generate unique account number for your users</li>
                    <li className="bg-blue-shade-20 font-primaryRegular text-base p-8 px-16 rounded-lg">Enable your customers to fund their wallet on your platform seamlessly</li>
                </ul>
                {/* <div className="md:ml-[-8rem] ">
                    <img src={wallet} alt="image here" className="md:w-[300px] mx-auto" />
                </div> */}
            </div>
        </div>
    )

}
export default Wallet;