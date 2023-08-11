import {logo} from "../assets"
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { phone, email, location, footerPageLink, categories } from "../constants";
function Footer() {
    return (
        <div className="p-5 text-black-800">
          <div className="w-full p-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <div className="mb-5">
                <img 
                  src={logo}
                  alt="logo"
                  className="w-[150px] h-[72.14px] object-right mr-auto"
                />
                <p className="text-gray-500">
                  <MapPinIcon className="inline h-6 w-6 text-green-400 mr-2"/>{location}<br/>
                  <PhoneIcon className="inline h-6 w-6 text-green-400 mr-2" />{phone}<br/>
                  <EnvelopeIcon className="inline h-6 w-6 text-green-400 mr-2"/>{email}<br/>
                </p>
              </div>
              <div className="mb-5">
                <h4 className="pb-4 font-bold">Categories</h4>
                <ul className="text-gray-500">
                  {categories.map((categorie) => (
                      <li className="pb-4"><a href={categorie.link} className="text-grey-500 hover:text-green-500">{categorie.name}</a></li>
                  ))}
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="pb-4 font-bold">Company</h4>
                <ul className="text-gray-500">
                {footerPageLink.map((footerLink) => (
                      <li className="pb-4"><a href={footerLink.link} className="hover:text-green-500">{footerLink.name}</a></li>
                  ))}
                </ul>
              </div>
              <div className="mb-5">
                <h4 className="pb-4 font-bold">Join our Newstler</h4>
                <form className="">
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-500 dark:text-white">Your Email</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5 " placeholder="Enter Your Email" required/>
            <button type="submit" class="mt-4 p-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-grren-800">Subscribe</button>
        </form>
              </div>
            </div>
          </div>
          <div className="w-full text-gray-500 px-10">
            @2020 All rights reserved
          </div>
      </div>
    );
}
  
export default Footer;