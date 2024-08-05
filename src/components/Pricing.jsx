// import Button from "./Button";
import PricingCard from "./PricingCarrd";

const Pricing = () => {
    return (
        <div className="container mx-auto bg-blue-shade-45 px-2 py-8" id="pricing">
            <h2 className="font-primaryAgrandirBold text-blue-shade-20 text-2xl md:text-3xl text-center">
                Pricing
            </h2>

            <div className="flex flex-col lg:flex-row justify-center lg:items-start items-center gap-10 xl:gap-20 sm:px-24 py-8">
                <PricingCard
                        title="Local transaction fee"
                        fee="1.3%"
                        features={[
                            "Support small, medium and large scale local businesses",
                            "Flexible Team setup",
                            "Personal Market Place"
                        ]}
                    />
                    <PricingCard
                        title="International transaction fee"
                        fee="2.5%"
                        features={[
                            "Cross-border payment",
                            "Instant Remittance in Digital Currency",
                            "Exposure to Global Markets",
                            "Offer Localized Payment to Customers"
                        ]}
                    />
                
            </div>
        </div>
    )
}

export default Pricing;



