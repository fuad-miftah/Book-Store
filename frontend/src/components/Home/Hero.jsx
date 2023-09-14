import GreenButton from "../Common/GreenButton"
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the product page
    navigate("/product"); // Replace "/product" with your actual product page URL
  };
  return (
    <div className="bg-gradient-to-br from-gray-700 to-gray-300 w-full 2xl:h-[624px]">
      <div className="p-[12%]">
        <h1 className="text-5xl text-white font-medium">Where your search<br />ends?</h1>
        <GreenButton title="Order Online" onClick={handleClick} className="py-8" />
      </div>
    </div>

  )
}