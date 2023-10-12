import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = ({ href, icon, text }) => {

    return (
        <div className="hidden w-full px-2 md:block md:w-auto" >
            <ul className="font-medium flex flex-col p-2  md:p-0 mt-4  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <Link to={href} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page" >

                    <div className="flex flex-row items-center justify-center">
                        {icon && <img className="w-full h-6" src={icon} alt={text} />}
                        <span className="ml-1 text-gray-700">{text}</span>
                    </div>
                </Link>
            </ul>

        </div>

    );
};

export default NavbarItem;
