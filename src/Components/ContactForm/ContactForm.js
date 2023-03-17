import React from "react";

const ContactForm = () => {
  return (

    <div className=" bg-gray-100 ">
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-12 lg:space-y-0 mx-auto max-w-5xl ">
      <div className="lg:w-1/2 ">
        <img
          src="https://www.aig.co.uk/content/dam/aig/emea/united-kingdom/images/other/681x383-video-vmc.jpg"
          alt="Contact us"
          className="rounded-lg shadow-md   lg:h-[400px] lg:w-[600px]"
        />
      </div>

      <div className="lg:w-1/2 md:w-1/2 lg:pl-16 p-10 ">
        <form className="flex flex-col ">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">Get In Touch</h2>
          <div className="flex flex-col my-2">
            <label >
           
              <input  className="h-12 w-96 my-2 mt-2 p-2 w-full   text-gray-700 border-indigo-500 border-2  rounded-md focus:border-primary focus:outline-none focus:ring-1 ring-primary " name="name" type="text" placeholder="Enter your name" />
            </label>
          </div>
          <div className="flex flex-col space-y-8">
            <label>
           
              <input name="email" className="h-12 w-96 p-2 my-2  w-full    text-gray-700 border-indigo-500 border-2  rounded-md focus:border-primary focus:outline-none focus:ring-1 ring-primary " type="email" placeholder="Enter your email" />
            </label>
          </div>
          <div className="flex flex-col space-y-2 ">
            <label className="">
             
              <textarea className="h-48 w-96 mt-2 p-2 w-full    text-gray-700 border-indigo-500 border-2  rounded-md focus:border-primary focus:outline-none focus:ring-1 ring-primary" name="message" placeholder="Enter your message " />
            </label>
          </div>
          <div className="flex justify-center">
            <button className=" btn border-0 h-14 bg-gradient-to-r from-purple-500 to-pink-500 ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    </div>
  );
};

export default ContactForm;
