import { NavLink } from "react-router-dom"
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { homeCard } from "../../constants"
export default function OfferCard() {
  return (
    <div className="flex flex-row flex-wrap justify-between mx-10 my-6 ">
      {homeCard.map((homeCard) => (
        <div className="w-[400px] h-[280px] rounded-lg bg-gray-500 flex flex-col justify-end p-8 m-4">
          <div className="flex flex-col ">
            <h4 className="text-xl text-white font-bold mr-2 mb-8 sm:mr-8 sm:text-2xl">{homeCard.title}</h4>
            <div className="text-white hover:text-green-500">
              <NavLink to="/">Shop Now<ChevronRightIcon className="inline h-6 w-6 ml-1" /></NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}