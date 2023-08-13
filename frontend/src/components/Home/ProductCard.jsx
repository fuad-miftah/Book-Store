import { NavLink } from "react-router-dom"
import { book } from "../../assets" 
export default function ProductCard() {
    return (
        <div class="max-w-[192px] h-[457px] bg-white rounded-lg">
        <NavLink to="">
            <img class="rounded-t-lg" src={book} alt="" />
        </NavLink>
        <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$ 1.29</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Slicing Tomatoes</p>
        </div>
    </div>
      
    )
}