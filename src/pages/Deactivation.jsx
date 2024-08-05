// const Deactivation = () => {
//     return (
//         <div className="bg-blue-500 py-12 min-h-screen">
//             <div className="container mx-auto p-6 bg-blue shadow-lg rounded-lg">
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
//             </div>        
//         </div>
//     )
// }
// export default Deactivation;


const Deactivation = () => {
    return (
        <div className="bg-blue-500 py-12 min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200 
                            relative before:content-[''] before:absolute before:inset-0 before:border before:border-blue-300 
                            before:rounded-lg before:-z-10 before:opacity-50">
                <h1 className="text-3xl font-semibold text-blue-800 text-center mb-6">
                    Account Deactivation
                </h1>
                <h3 className="text-xl font-semibold text-gray-700 text-center mb-6">
                    We would like to know why you want to close your account with us
                </h3>
                <p className="text-lg text-gray-800 mb-4 text-center">
                    Please send an email to: 
                    <a href="mailto:contact@leverpay.io" className="text-blue-600 hover:underline"> contact@leverpay.io</a>
                </p>
                <p className="text-lg text-gray-800 mb-4 text-center">
                    You can also send us a WhatsApp message or request a callback at: 
                    <a href="tel:+2349060898687" className="text-blue-600 hover:underline"> +2349060898687</a>
                </p>  
                <form
                    action="mailto:contact@leverpay.io"
                    method="post"
                    enctype="text/plain"
                    className="space-y-4"
                >
                    <div>
                        <label htmlFor="fullname" className="block text-gray-700 font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">
                            Comments
                        </label>
                        <textarea
                            id="comments"
                            name="comments"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Deactivation;
