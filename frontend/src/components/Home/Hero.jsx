import React, { useState, useEffect } from "react";
import GreenButton from "../Common/GreenButton"
import { useNavigate } from "react-router-dom";
import {Image} from "@nextui-org/react";
import bookshop from './books.png';


export default function Hero() {
  const navigate = useNavigate();

  const images = [
    'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1512&q=80',
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1512&q=80',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleClick = () => {
    // Navigate to the product page
    navigate("/product");
  };
  return (

    <div className="bg-slate-900  w-screen h-[400px] lg:h-[624px] grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
      <div className="p-[12%] flex flex-col justify-center items-center">
        <h1 className="text-5xl text-gray-100 font-medium text-center">Where your search<br />ends?</h1>
        <GreenButton title="Order Online" onClick={handleClick} className="py-8" />
      </div>
      <Image
      isZoomed
      width={500}
      alt="Hero"
      src={bookshop}
      className="hidden lg:block w-screen rounded-3xl shadow-xl w-full h-[350px] md:h-[560px]"
    />
      {/* <img src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80"
        alt="hero"
        className="hidden lg:block mr-8 rounded-3xl shadow-xl w-[40%] h-[350px] md:h-[560px]"
      /> */}

    </div>

  )
}