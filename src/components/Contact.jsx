const Contact = () => {
    return (
        <div className="container mx-auto bg-blue-shade-0 md:p-16 p-5">
            <div className=" font-primarySemiBold md:flex md:justify-between items-center bg-blue-shade-20 rounded-3xl">
                <div className="md:w-2/5 p-4 pl-6 text-center md:text-left">
                    <h2 className="text-3xl leading-tight pb-2">
                        Get in touch with <span className="text-orange-shade-10">LeverPay!</span>
                    </h2>
                    <p className="text-lg italic font">
                        Your Perfect Payment Solution for Startup Success!
                    </p>
                </div>
                <div className="bg-white md:w-3/5 rounded-3xl p-12 text-black" >
                    <form className="flex flex-col gap-3 ">
                        <div className="flex flex-col md:flex-row gap-3">
                            <div className="flex flex-col md:w-1/2">
                                <label className="pb-2">First Name</label>
                                <input type="text" name="first-name" required className="border-2 border-gray-shade-0 rounded p-1" />                 
                            </div>
                            
                            <div className="flex flex-col md:w-1/2">
                                <label className="pb-2">Last Name</label>
                                <input type="text" name="first-name" required className="border-2 border-gray-shade-0 rounded p-1" />
                            </div>

                        </div>
                        <label>Business Email</label>
                        <input type="email" name="first-name" required className="border-2 border-gray-shade-0 rounded p-1" />

                        <label>Phone Number</label>
                        <input type="text" name="first-name" required className="border-2 border-gray-shade-0 rounded p-1" />

                        <div className="text-center my-2 mt-8">
                            <button type="submit" className="bg-blue-shade-10 text-white rounded py-3 w-4/5">Submit</button>
                        </div>

                           
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;