import { Link } from "react-router-dom";

export default function AnotherCard({ id, title, price, image }) {
    return (
        <div className="inline-block p-2">
            <Link to={`/product/${id}`}>
                <img
                    className="rounded-t-lg w-[100px] h-[140px] md:w-[192px] md:h-[280px]"
                    src={image}
                    alt=""
                />
            </Link>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    $ {price}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {title}
                </p>
            </div>
        </div>
    );
}
