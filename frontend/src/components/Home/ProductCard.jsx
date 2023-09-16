import { Link } from "react-router-dom"
export default function ProductCard({ key, id, title, price, image }) {
    return (
        <div className="h-[400px] bg-white rounded-lg">
            <Link to={`/product/${id}`}>
                <img className="mx-auto rounded-t-lg w-[100%] h-[280px]" src={image} alt="" />
            </Link>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">$ {price}</h5>
                <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">{title}</p>
            </div>
        </div>

    )
}