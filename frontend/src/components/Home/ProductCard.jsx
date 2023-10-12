import { Link } from "react-router-dom"
export default function ProductCard({ key, id, title, price, image }) {
    return (
        <div className="h-[457px] w-3/4 md:w-[192.61px] bg-white rounded-lg ">
            <Link to={`/product/${id}`}>
           
            <img
                    className="mx-auto rounded-xl justify-center items-center
                        w-3/4 md:w-[192.61px]
                     h-[280px]"
                    src={image}
                    alt="Image"
                />
            </Link>
            <div className="p-2">
                <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">$ {price}</h5>
                <p className="mb-3 font-normal text-gray-700 text-center dark:text-gray-400">{title}</p>
            </div>
        </div>

    )
}