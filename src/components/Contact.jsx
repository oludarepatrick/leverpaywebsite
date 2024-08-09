import { useState } from "react";
import axios from "axios";
import Button from "./Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://leverpay-api.azurewebsites.net/api/v1/contact-us",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        alert(response.data.message);
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          subject: "",
          message: "",
        });
      } else {
        alert("failed to send message");
      }
    } catch (error) {
      console.log("Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto md:p-16 p-5">
      <div className="max-w-screen-lg mx-auto font-primarySemiBold md:flex md:justify-between items-center bg-blue-shade-20 rounded-3xl">
        <div className="p-4 lg:pl-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl leading-tight pb-2">
            Get in touch with{" "}
            <span className="text-orange-shade-10">LeverPay!</span>
          </h2>
          <p className="text-lg italic font">
            Your Perfect Payment Solution for Startup Success!
          </p>
        </div>
        <div className="bg-white lg:w-1/2 md:w-full text-sm rounded-3xl md:p-12 p-8 text-black">
          <form
            className="flex flex-col gap-2 font-primaryRegular"
            onSubmit={handleSubmit}
          >
            <label className="font-bold" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border-2 border-gray-shade-0 rounded p-1 mb-2"
            />
            <label htmlFor="email" className="font-bold">
              Business Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-gray-shade-0 rounded p-1 mb-2"
            />
            <label htmlFor="phoneNumber" className="font-bold">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border-2 border-gray-shade-0 rounded p-1 mb-2"
            />
            <label htmlFor="subject" className="font-bold">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="border-2 border-gray-shade-0 rounded p-1 mb-2"
            />
            <label htmlFor="message" className="font-bold">
              Add your message
            </label>
            <textarea
              type="text"
              rows={2}
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="border-2 border-gray-shade-0 rounded p-1 mb-2"
            ></textarea>

            <div className="text-center  mt-8">
              <Button className="bg-blue-shade-10 text-white rounded py-3 w-4/5">
                {loading ? <span>Loading...</span> : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
