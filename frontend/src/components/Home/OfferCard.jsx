import { NavLink } from "react-router-dom";
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { homeCard } from "../../constants";

export default function OfferCard() {

  return (
    <div className="flex flex-row flex-wrap mx-10 my-4 justify-between">
      {homeCard.map((card, index) => (
  <div key={index} className="h-[280px] rounded-lg bg-gray-500 flex flex-col justify-end p-8 m-4 w-[75%] sm:w-[40%] md:w-[28%] relative">
    <img src={card.image} alt={card.title} className="w-full h-full absolute top-0 left-0 " />
    <div className="flex flex-col relative z-10 ">
      <h4 className="text-xl sm:text-2xl text-white font-bold mb-2 sm:mb-4 bg-gradient-to-br from-gray-500 to-gray-400 opacity-70">{card.title}</h4>
      <div className="text-white hover:text-green-500 relative z-10">
        <NavLink to="/product">Shop Now<ChevronRightIcon className="inline h-6 w-6 ml-1" /></NavLink>
      </div>
    </div>
  </div>
))}
    </div>
  );
}
