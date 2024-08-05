// const Deactivation = () => {
//     return (
//         <div className="container mx-auto h-screen p-4 bg-white text-blue-shade-20">
//            <h1 className="font-primarySemiBold md:text-3xl text-2xl py-4">Account Deactivation!</h1>
//            <h3 className="font-primarySemiBold text-xl py-4">
//                 We will like to know why you want to close your account with us
//             </h3>
//            <p className="text-justify pb-2 leading-7 font-primaryRegular">
//                 Please send an emaill to: contact@leverpay.io
//            </p>
//            <p className="text-justify pb-2 leading-7 font-primaryRegular">
//                 You can also send us a Whatsapp message or request for a callback at: +2349060898687
//            </p>           
//         </div>
//     )
// }
// export default Deactivation;

const Deactivation = () => {
    return (
        <div className="bg-gray-50 py-12 min-h-screen">
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h1 className="text-3xl font-semibold text-blue-800 text-center mb-6">
                    Account Deactivation
                </h1>
                <h3 className="text-xl font-semibold text-gray-700 text-center mb-6">
                    We would like to know why you want to close your account with us
                </h3>
                <p className="text-lg text-gray-800 mb-4">
                    Please send an email to: 
                    <a href="mailto:contact@leverpay.io" className="text-blue-600 hover:underline"> contact@leverpay.io</a>
                </p>
                <p className="text-lg text-gray-800 mb-4">
                    You can also send us a WhatsApp message or request a callback at: 
                    <a href="tel:+2349060898687" className="text-blue-600 hover:underline"> +2349060898687</a>
                </p>
                <div className="text-center mt-8">
                    <a 
                        href="/" 
                        className="text-blue-700 hover:underline text-lg font-medium"
                    >
                        Return to Home
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Deactivation;
