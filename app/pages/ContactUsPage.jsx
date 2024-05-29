import React from "react";
import Slide from "../components/Slide";

const main = (
  <div className="flex items-center">
    <form className="max-w-md mx-auto flex-1">
      <div className="text-white mb-2">Want to discuss your project?</div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-white  focus:ring-0 focus:outline-none peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Full name
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="password"
          name="floating_password"
          id="floating_password"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:border-white  focus:ring-0 focus:outline-none peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
      </div>

      <button type="submit" className="text-white items-end">
        Submit
      </button>
    </form>
    <div className="flex flex-1 gap-24 justify-center">
      <div className="text-white">
        <h3 className="mb-3">LOCATION</h3>
        <h4 className="mb-5 text-sm">
          London, UK
          <br />
          07 Mason Knolls
          <br />
          Lloydfurt WD6 5QD
        </h4>
        <h4 className="mb-2">PHONE</h4>
        <h5 className="text-sm">(204) 564-8765</h5>
      </div>
      <div className="text-white">
        <h3 className="mb-3">EMAIL</h3>
        <h4 className="mb-5 text-sm">agency@gamil.com</h4>
        <h4 className="mb-2 ">SOCIAL</h4>
        <div className="flex items-center gap-4">
          <h5 className="text-sm underline">facebook</h5>
          <h5 className="text-sm underline">twitter</h5>
          <h5 className="text-sm underline">instagram</h5>
        </div>
      </div>
    </div>
  </div>
);

const ContactUsPage = () => {
  return (
    <Slide
      heading={
        <div className="w-full z-10 text-white">
          <h1 className="font-sans text-8xl">CONTACT US</h1>
        </div>
      }
      prevPage={"Our Team"}
      mainContent={main}
      prevPageUrl={"/ourTeam"}
    />
  );
};

export default ContactUsPage;
