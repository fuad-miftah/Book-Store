/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect, useState} from 'react';
import {BiArrowToTop} from "react-icons/bi";

const Search = () => {
    const [values, setValues]=useState([]);
    const fetchData=(value)=>{
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(json => {
            setValues(json);
        });
    };
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 py-10">
        <div className="grid-cols-1 grid gap-5 border-2 border-gray-600 mx-10 h-[600px]">
            <div >
               <div className="flex justify-between items-center px-10 pt-10">
                 <h1 className="font-bold text-serif text-center text-3xl">Department</h1>
                <BiArrowToTop size={30}/>
               </div>
                <div className='flex lg:pl-12 md:pl-8 sm:pl-4 pl-2 my-3'>
                    <input type="checkbox" className="mr-3 text-green-600"/>
                    <p className="ml-2">Fruity and Vegetable</p>
                </div>
                <div className='flex lg:pl-12 md:pl-8 sm:pl-4 pl-2 my-3'>
                    <input type="checkbox" className="mr-3 text-green-600"/>
                    <p className="ml-2">Pantry</p>
                </div>
                <div className='flex lg:pl-12 md:pl-8 sm:pl-4 pl-2 my-3'>
                    <input type="checkbox" className="mr-3 text-green-600"/>
                    <p className="ml-2">Organic Shop</p>
                </div>
                <div className='flex lg:pl-12 md:pl-8 sm:pl-4 pl-2 my-3'>
                    <input type="checkbox" className="mr-3 text-green-600"/>
                    <p className="ml-2">Health Snack</p>
                </div>

                <div className='flex lg:pl-12 md:pl-8 sm:pl-4 pl-2 my-3'>
                    <input type="checkbox" className="mr-3 text-green-600"/>
                    <p className="ml-2">Kitchen and FoodStaffs</p>
                </div>
                <div className='flex lg:pl-12 md:pl-8 sm:pl-4 pl-2 my-3'>
                    <input type="checkbox" className="mr-3 text-green-600"/>
                    <p className="ml-2">Frozen Food</p>
                </div>
            </div>
            <hr className="font-bold text-3xl border-2 border-black px-4"/>
            <div>
            <div className="flex justify-between items-center px-10 pt-10">
                 <h1 className="font-bold text-serif text-center text-3xl">Brands</h1>
                <BiArrowToTop size={30}/>
               </div>            <div className='flex lg:pl-12 md:pl-8 sm:pl-4 pl-2 my-3'>
                    <input type="checkbox" className="mr-3 text-green-600"/>
                    <p className="ml-2">Bare</p>
                </div>
                <div className='flex lg:pl-12 md:pl-8 sm:pl-4 pl-2 my-3'>
                    <input type="checkbox" className="mr-3 text-green-600"/>
                    <p className="ml-2">Bake</p>
                </div>
                <div className='flex lg:pl-12 md:pl-8 sm:pl-4 pl-2 my-3'>
                    <input type="checkbox" className="mr-3 text-green-600"/>
                    <p className="ml-2">Gloomy</p>
                </div>
                <div className='flex lg:pl-12 md:pl-8 sm:pl-4 pl-2 my-3'>
                    <input type="checkbox" className="mr-3 text-green-600"/>
                    <p className="ml-2">Blawd</p>
                </div>
                <div className='flex lg:pl-12 md:pl-8 sm:pl-4 pl-2 my-3'>
                    <input type="checkbox" className="mr-3 text-green-600"/>
                    <p className="ml-2">Berky</p>
                </div>
                <div className='flex lg:pl-12 md:pl-8 sm:pl-4 pl-2 my-3'>
                    <input type="checkbox" className="mr-3 text-green-600"/>
                    <p className="ml-2">Yurz</p>
                </div>
            </div>
        </div>
        <div className='grid col-span-2 gird-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2 xl:grid-cols-4 px-4'>
        {values.map(value =>(
            <div>
                
                <img src={value.url} alt="image importing" />
                <li className="list-none font-serif">{value.title}</li>
            </div>
        ))}
        </div>
    
    </div>
  )
}

export default Search;