import { logo } from "../assets"
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { phone, email, location, footerPageLink, categories } from "../constants";
import { NavLink } from "react-router-dom";
import GreenButton from "./Common/GreenButton";
function Footer() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling animation
    });
  };
  const currentYear = new Date().getFullYear();
  return (
    <div className="p-10 text-black-800">
      <div className="w-full pt-10 pr-10 pl-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-2">
          <div className="mb-5">
            <img
              src={logo}
              alt="logo"
              className="w-[150px] h-[72.14px] object-right mr-auto"
            />
            <p className="text-gray-500">
              <MapPinIcon className="inline h-6 w-6 text-green-400 mr-2" />{location}<br />
              <PhoneIcon className="inline h-6 w-6 text-green-400 mr-2" />{phone}<br />
              <EnvelopeIcon className="inline h-6 w-6 text-green-400 mr-2" />{email}<br />
            </p>
          </div>
          <div className="mb-5">
            <h4 className="pb-4 font-bold">Categories</h4>
            <ul className="text-gray-500">
              {categories.map((categorie, index) => (
                <li key={index} className="pb-4" onClick={handleScrollToTop}><NavLink to={categorie.link} className="text-grey-500 hover:text-green-500">{categorie.name}</NavLink></li>
              ))}
            </ul>
          </div>
          <div className="mb-5">
            <h4 className="pb-4 font-bold">Company</h4>
            <ul className="text-gray-500">
              {footerPageLink.map((footerLink, index) => (
                <li key={index} className="pb-4" onClick={handleScrollToTop}><NavLink to={footerLink.link} className="hover:text-green-500">{footerLink.name}</NavLink></li>
              ))}
            </ul>
          </div>
          <div className="mb-5">
            <h4 className="pb-4 font-bold">Join our Newstler</h4>
            <form className="">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Your Email</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 " placeholder="Enter Your Email" required />
              <GreenButton title="Subscribe" />
            </form>
          </div>
        </div>
      </div>
      <div className="w-full text-gray-500 px-10">
        {currentYear} All rights reserved
      </div>
    </div>
  );
}

export default Footer;