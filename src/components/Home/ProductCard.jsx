import { Link } from "react-router-dom"
export default function ProductCard({ key, id, title, price, image }) {
    return (
        <div class="max-w-[192px] h-[457px] bg-white rounded-lg">
            <Link to={`/product/${id}`}>
                <img class="rounded-t-lg w-[192px] h-[280px]" src={image} alt="" />
            </Link>
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">$ {price}</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{title}</p>
            </div>
        </div>

    )
}