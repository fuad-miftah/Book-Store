import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = ({ href, icon, text }) => {

    return (

        <div className="hidden w-full px-4 md:block md:w-auto" >
            <ul className="font-medium flex flex-col p-4  md:p-0 mt-4  border border-gray-100 rounded-lg bg-gray-700 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-700 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <Link to={href} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page" >

                    <div className="flex flex-row items-center text-white">
                        {icon && <img className="w-full h-5 text-white" src={icon} alt={text} />}
                        <span className="ml-2 text-gray-700 text-white">{text}</span>

                    </div>
                </Link>
            </ul>

        </div>

    );
};

export default NavbarItem;
