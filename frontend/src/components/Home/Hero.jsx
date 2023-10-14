import GreenButton from "../Common/GreenButton"
import { useNavigate } from "react-router-dom";
import {Image} from "@nextui-org/react";

export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the product page
    navigate("/product"); // Replace "/product" with your actual product page URL
  };
  return (
    <div className="bg-white  w-screen h-[400px] lg:h-[624px] grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
      <div className="p-[12%]">
        <h1 className="text-5xl text-gray-600 font-medium">Where your search<br />ends?</h1>
        <GreenButton title="Order Online" onClick={handleClick} className="py-8" />
      </div>
      <Image
      isZoomed
      width={500}
      alt="Hero"
      src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80"
      className="hidden lg:block w-screen rounded-3xl shadow-xl w-full h-[350px] md:h-[560px]"
    />
      {/* <img src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80"
        alt="hero"
        className="hidden lg:block mr-8 rounded-3xl shadow-xl w-[40%] h-[350px] md:h-[560px]"
      /> */}
    </div>

  )
}