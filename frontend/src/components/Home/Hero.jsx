import React, { useState, useEffect } from "react";
import GreenButton from "../Common/GreenButton"
import { useNavigate } from "react-router-dom";

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
    <div className="relative w-full h-[400px] lg:h-[624px]">
      <img
        src={images[currentIndex]}
        alt="hero"
        className="absolute inset-0 object-cover w-full h-full shadow-xl slide"
      />
      <div className="flex flex-col justify-center items-center md:left-[104px] top-[104px] absolute opacity-90 p-4" >
        <h1 className="text-3x1 md:text-4xl text-white font-medium">Where your search<br />ends?</h1>
        <GreenButton title="Order Online" onClick={handleClick} className="py-8" />
      </div>

    </div>

  )
}