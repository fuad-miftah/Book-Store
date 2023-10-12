import React, { useEffect } from "react";
import { useState } from "react";
import NavbarItem from "./NavbarItem";
import { Link,useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logo, menu, cart, user, wishlist, searchIcon, selectCartTotal } from "./Index";

import { logo, menu, cart, user, wishlist, searchIcon } from "./Index";

const Header = () => {
  const location = useLocation(); 
  const [activePage, setActivePage] = useState('/login');
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const total = useSelector(selectCartTotal);

  const text = userInfo ? 'Dashboard' : 'SignIn';
  const href = userInfo ? '/dashboard' : '/login';

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const { userInfo } = useSelector((state) => state.auth);

  const handleItemClick = (page) => {
    setActivePage(page);
    setIsWishlistOpen(false); 
    setIsCartOpen(false); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm); // Use 'searchTerm' here
    const searchQuery = urlParams.toString();
    navigate(`/product?${searchQuery}`); 
  };
  
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      if (searchTermFromUrl) {
        setSearchTerm(searchTermFromUrl);
      }    }
  }, [location.search]);
  
  return (
    <nav className="flex flex-row px-4 justify-start items-center md:w-auto md:px-8 bg-white border-gray-200 dark:bg-gray-900">
      <div className="w-full flex md:relative lg:flex-row p-4 items-center justify-start lg:justify-between gap-8">
        <div className="flex left-0 md:w-200 md:h-50 items-center justify-start ">
          <a href="/"
            className="hidden sm:hidden md:block w-32 items-center ">
            <img
              className="w-full h-7 "
              src={menu}
              alt="menu"
            />

          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-center shrink-0 space-y-4 space-x-4">
          <Link to="/" activeClassName="active">

            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
              <img
                className="md:w-200 md:h-50 relative"
                src={logo}
                alt="logo"
              />
            </div>
          </Link>
          
         <form onSubmit={handleSubmit}
          className="max-w-screen-x1 flex flex-wrap items-center">
         <div className="max-w-screen-x1 flex flex-wrap items-center justify-between mx-auto p-2 shrink-0 space-x-2">
            <div className="flex-reverse flex-grow items-center md:items-center md:w-auto relative">
              <input
                type="text"
                name="query"                placeholder="Search Books..."
                className="lg:w-[500px] h-[48px] md:w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 pl-8 pr-0"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}

              />
              <button  type="submit">
              <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                <img
                  className="w-5 h-5 text-gray-400 shrink-0"
                  src={searchIcon}
                  alt="Search Icon"
                />
              </div>
              </button>
              
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

         </form>
//           </div>
//         <NavbarItem href={href} icon={user} text={text} />
//         <NavbarItem href="/wishlist" icon={wishlist} text="Wishlist" />
//         <NavbarItem href="/cart" icon={cart} text={`$${total.toFixed(2)}`} />

//         </div>
        {userInfo ? <NavbarItem href="/Dashboard" icon={user} text="Dashboard" /> :<NavbarItem href="/login" icon={user} text="SignIn" />}
        <NavbarItem href="/wishlist" icon={wishlist} text="Wishlist" />
<NavbarItem href="/cart" icon={cart} text={`$${total.toFixed(2)}`} />
        {userInfo && <NavbarItem href="/logout" icon={user} text="Logout" />}


        <div
          className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700  ${!toggleMenu ? "h-0" : "h-50px top-[120px] w-full left-0 absolute"
            }`}
          >
         <div className="w-full flex flex-col gap-1 font-normal tracking-wider justify-start left-0 shrink-0 space-x-2">
        <a
        href={href}
        onClick={() => handleItemClick('/login')}
        className={`block border-b-2 py-2 pl-3 pr-4 text-gray-700 ${
          activePage === '/login' ? 'bg-green-200' : 'bg-gray-100'
        } rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white`}
        aria-current={activePage === '/login' ? 'page' : undefined}
      >
        <div className="flex flex-row items-center justify-start">
          <img className="w-5 h-5" src={user} alt="Signin" />
          <span className="ml-2">Signin</span>
        </div>
      </a>

      <div className="relative">
        <a
          href="/wishlist"
          onClick={() => handleItemClick('/wishlist')} 
            // setIsWishlistOpen(!isWishlistOpen)}
          className={`block border-b-2 py-2 pl-3 pr-4 text-gray-700 ${
            activePage === '/wishlist' ? 'bg-green-200' : 'bg-gray-100'
          } rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white`}
          aria-current={activePage === '/wishlist' ? 'page' : undefined}
        >
          <div className="flex flex-row items-center justify-start">
            <img className="w-5 h-5" src={wishlist} alt="Wishlist" />
            <span className="ml-2">Wishlist</span>
          </div>
        </a>
</div>
          <div className="relative">
          <a
            href="/cart"
            onClick={()=>handleItemClick('/cart')}
              // setIsCartOpen(!isCartOpen)}
            className={`block border-b-2 py-2 pl-3 pr-4 text-gray-700 ${
              activePage === '/cart' ? 'bg-green-200' : 'bg-gray-100'
            } rounded md:bg-transparent md:text-gray-700 md:p-0 dark:text-white`}
          >
            <div className="flex flex-row items-center justify-start">
              <img className="w-5 h-5" src={cart} alt="Cart" />
              <span className="ml-2">Cart</span>
            </div>
          </a>
        </div>  
      </div>
      </div>
      </div>
    </nav>
  );
};

export default Header;