import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEndpoint = "https://formspree.io/f/xyyrglje";

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        // Form submitted successfully
        console.log("Form submitted successfully");
      } else {
        // Form submission error
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id="contact" className="container m-auto">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-indigo-500 sm:text-2xl">
          Contacter-nous
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      {/* card*/}
      <div className="card-wrapper mt-8 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 w-[90%] sm:w-[100%] mx-auto items-center justify-center sm:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end flex-col sm:w-3/4">
            <div data-aos="zoom-in">
              <h1 className="text-2xl text-gray-600 font-bold sm:text-3xl">
                Une question?
              </h1>
              <h3 className="text-l text-gray-800 sm:text-lg">
                N&apos;hésiter pas, c&apos;est gratuit.
              </h3>
            </div>
          </div>

          <div className="flex p-5 items-center justify-center ">
            <button
              data-aos="zoom-in"
              className="text-indigo-400 font-extrabold text-3xl p-2 rounded-lg shadow-[0 0 10px 1px rgba(255, 255, 255, 0.1)] "
            >
              <BsArrowRight className=" transform ml-12 md:rotate-0 group hover:rotate-180 transition-transform duration-300 ease-in-out cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            action="mailto:contact.moddy@gmail.com"
            onSubmit={handleSubmit}
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="e.g. example@email.com"
              value={formData.email}
              onChange={handleInputChange}
              name="email"
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              placeholder="e.g. Nom"
              value={formData.username}
              onChange={handleInputChange}
              name="username"
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Votre message ici..."
              value={formData.message}
              onChange={handleInputChange}
              name="message"
              id=""
            />
            <button
              className="bg-indigo-500 hover:bg-indigo-600 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Envoyer</span>
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
