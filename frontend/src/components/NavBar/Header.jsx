import React from "react";
import { logo, menu, cart, user, wishlist, searchIcon } from "./Index";

const Header = () => {
  const handleLogoClick = () => {
    console.log("Logo clicked!");
  };
  return (
    <div className=" flex flex-col  w-96 h-24 relative">
      <div className=" w-96 h-24 left-0 top-0 absolute bg-white" />
      <div className=" w-32 h-14 left-[208px] top-[24px] absolute">
        <img
          className=" w-32 h-7 left-0 top-[15.47px] absolute"
          src={logo}
          alt="Logo"
          onClick={handleLogoClick}
        />
      </div>
      <a href="/dashboard" className="w-8 h-8 left-[104px] top-[36px] absolute">
        <div>
          <img
            className="w-5 h-5 left-[5.33px] top-[6.67px] absolute"
            src={menu}
            alt="Menu"
          />
        </div>
      </a>
      <div className="w-96  h-12 px-2  left-[420px] top-[30px] absolute">
        <input
          type="text"
          name="query"
          placeholder="Search..."
          className="w-full h-full pl-10 pr-4 py-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700"
        />

        <div className=" w-6 h-6 pr-10 left-[24px] top-[12px] absolute">
          <div className=" w-6 h-6  left-0 top-0 absolute">
            <img
              className=" w-4 h-4 left-[0px]   top-[3px] absolute"
              src={searchIcon}
              alt="searchIcon"
            />
          </div>
        </div>
      </div>
      <a href="/user" className="w-20 h-6 left-[1009px] top-[40px] absolute">
        <div className="w-6 h-6 left-0 top-0 absolute">
          <img
            className="w-5 h-5 left-[1px] top-[1px] absolute"
            src={user}
            alt="User"
          />
        </div>
        <div className="left-[30px] top-[2px] absolute text-grey-500 hover:text-green-500 text-start font-semibold leading-tight tracking-tight">
          SignIn
        </div>
      </a>
      <div className="w-24 h-6 left-[1125px] top-[40px] absolute">
        <a href="/favorite" className="block ">
          <div className="left-[32px] top-[2px] absolute text-grey-500 hover:text-green-500 text-base font-semibold leading-tight tracking-tight">
            Wishlist
          </div>
          <div className="w-6 h-6 left-0 top-0 absolute">
            <div className="w-6 h-6 left-0 top-0 absolute">
              <img
                className="w-5 h-4 left-[2px] top-[3px] absolute"
                src={wishlist}
                alt="Wishlist"
              />
            </div>
          </div>
        </a>
      </div>
      <a href="/cart" className="w-20 h-6 left-[1251px] top-[40px] absolute">
        <div className="left-[32px] top-[2px] absolute text-grey-500 hover:text-green-500 text-base font-semibold leading-tight tracking-tight">
          $12.21
        </div>
        <div className="w-6 h-6 left-0 top-0 absolute">
          <div className="w-6 h-6 left-0 top-0 absolute">
            <img
              className="w-5 h-5 left-[1px] top-[2px] absolute"
              src={cart}
              alt="Cart"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Header;
