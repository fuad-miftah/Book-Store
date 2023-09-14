import React from "react";
import { useState } from "react";
import NavbarItem from "./NavbarItem";
import { logo, menu, cart, user, wishlist, searchIcon } from "./Index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <nav className="flex flex-row px-4 justify-start items-center md:w-auto md:px-8 bg-white border-gray-200 dark:bg-gray-900">
      <div className="w-full flex md:relative lg:flex-row p-4 items-center justify-start lg:justify-between gap-8">
        <div className="flex left-0 md:w-200 md:h-50 items-center justify-start ">
          <a href="/dashboard"
            className="hidden sm:hidden md:block w-32 items-center ">
            <img
              className="w-full h-7 "
              src={menu}
              alt="menu"
            />

          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-center shrink-0 space-y-4 space-x-4">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
            <Link to="/">
              <img
                className=" md:w-200 md:h-50 relative"
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <div className="max-w-screen-x1 flex flex-wrap items-center justify-between mx-auto p-2 shrink-0 space-x-2">
            <div className="flex-reverse flex-grow items-center md:items-center md:w-auto relative">
              <input
                type="text"
                name="query"
                placeholder="Search Books..."
                className="lg:w-[500px] h-[48px] md:w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 pl-8 pr-0"

              />
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <img
                  className="w-5 h-5 text-gray-400 shrink-0"
                  src={searchIcon}
                  alt="Search Icon"
                />
              </div>
            </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 shrink-0"
              aria-controls="navbar-default"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <img
                className=" w-32 h-7 left-0 top-[15.47px] "
                src={menu}
                alt="Menu"
                onClick={() => setToggleMenu(!toggleMenu)}
              />
            </button>
          </div>
        </div>
        <NavbarItem href={userInfo != null ? "/Dashboard" : "/login"} icon={user} text={userInfo != null ? userInfo.details.username : "SignIn"} />
        {
          userInfo == null || userInfo.role !== "Retailer" ? <NavbarItem href="/wishlist" icon={wishlist} text="Wishlist" /> : null

        }
        {
          userInfo == null || userInfo.role !== "Retailer" ? <NavbarItem href="/cart" icon={cart} text="$12.21" /> : null

        }

        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700  ${!toggleMenu ? "h-0" : "h-50px top-[120px] w-full "
            }`}
        >

          <div className="flex flex-col gap-1 font-normal tracking-wider justify-start shrink-0 space-x-2">
            <a href="/signin" className="block border-b-2 py-2 pl-3 pr-4 text-gray-700 bg-green-200 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white" aria-current="page">
              <div className="flex flex-row items-center justify-start">
                <img className="w-5 h-5" src={user} alt="Signin" />
                <span className="ml-2">Signin</span>
              </div>
            </a>

            <a href="/signin" className="block border-b-2 py-2 pl-3 pr-4 text-gray-700 bg-gray-100 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white">
              <div className="flex flex-row items-center justify-start">
                <img className="w-5 h-5" src={wishlist} alt="Wishlist" />
                <span className="ml-2">Wishlist</span>
              </div>
            </a>

            <a href="/signin" className="block border-b-2 py-2 pl-3 pr-4 text-gray-700 bg-gray-100 rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white">
              <div className="flex flex-row items-center justify-start">
                <img className="w-5 h-5" src={cart} alt="Cart" />
                <span className="ml-2">Cart</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;