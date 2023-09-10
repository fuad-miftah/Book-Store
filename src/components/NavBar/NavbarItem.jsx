import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarItem = ({ to, icon, text }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const location = useLocation();

  return (
    <div className="hidden w-full px-4 md:block md:w-auto">
      <ul className="font-medium flex flex-col p-4 ...">
        <li>
          <NavLink
            to={to}
            activeClassName="text-white bg-green-700"
            className={`block py-2 pl-3 pr-4 ... ${isAuthenticated && location.pathname === to ? 'text-white bg-green-700' : 'text-gray-700 bg-blue-700'} rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`}
            aria-current="page"
          >
            <div className="flex flex-row items-center">
              <img className="w-5 h-5" src={icon} alt={text} />
              <span className="ml-2 text-gray-800">{text}</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarItem;
