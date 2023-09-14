import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid"
import { add } from "../../store/cartSlice"
import { addToWishlist } from "../../store/wishlistSlice";
import { useDispatch } from "react-redux"
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function UperDiv({ data }) {

    console.log("upperdiv - ", data);
    const dispatch = useDispatch();

    const addToCart = (id, price, totalPrice, quantity, coverImg, title) => {
        dispatch(
            add({
                bookId: id,
                price,
                totalPrice,
                quantity,
                coverImg,
                title
            })
        );
        toast.success("Added to cart");
    };

    const addToWishlistHandler = (id, price, totalPrice, quantity, coverImg, title) => {
        dispatch(
            addToWishlist({
                bookId: id,
                price,
                totalPrice,
                quantity,
                coverImg,
                title
            })
        );
        toast.success("Added to wishlist");
    };
    const [buyQuantity, setBuyQuantity] = useState(1);
    const [showError, setShowError] = useState("");
    const [discount, setDiscount] = useState((data.price * 15) / 100);

    useEffect(() => {
        setBuyQuantity(1); // Reset buyQuantity to 1 when a new item is selected
        setDiscount((data.price * 15) / 100); // Recalculate discount based on the new data

        // Scroll to the top of the window
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [data]);

    const increaseQuantity = () => {
        if (data.quantity > buyQuantity) {
            const newBuyQuantity = buyQuantity + 1;
            setBuyQuantity(newBuyQuantity);
            setDiscount((data.price * newBuyQuantity * 15) / 100);
            setShowError("");
        }

        else
            setShowError("Quantity is more than the stock");
        toast.error("Quantity is more than the stock");
    }

    const decreaseQuantity = () => {
        if (buyQuantity > 1) {
            const newBuyQuantity = buyQuantity - 1;
            setBuyQuantity(newBuyQuantity);
            setDiscount((data.price * newBuyQuantity * 15) / 100);
            setShowError("");
        }
        else
            setShowError("Quantity can't be less than 1");
        toast.error("Quantity can't be less than 1");
    }

    return (
        <div className="flex flex-row flex-wrap w-screen p-10">

            <img class="rounded-t-lg w-[40%] h-[500px]" src={data.coverImg} alt="" />

            <div className="flex flex-col p-10 ">
                <div className="flex flex-wrap flex-col space-y-8">
                    <h1 className="text-4xl font-medium w-[500px]">{data.title}</h1>
                    <div className="h-[40px]">
                        <div className="h-[40px] bg-green-100 inline-flex items-center justify-center mr-4">
                            <p className="inline">-15%</p>
                        </div>
                        <p className="h-[40px] inline-flex items-center line-through">{discount} birr</p>
                    </div>
                    <p className="text-4xl">{(data.price * buyQuantity) - discount} Birr</p>
                </div>
                <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div>
                    <div className="flex flex-row flex-wrap items-center">
                        <button className="inline bg-gray-200 h-[40px] w-[40px] p-2" onClick={decreaseQuantity}><MinusIcon /></button>
                        <p className="inline text-4xl m-4">{buyQuantity}</p>
                        <button className="inline bg-green-400 h-[40px] w-[40px] text-white p-2" onClick={increaseQuantity}><PlusIcon /></button>
                    </div>

                    <p className="text-gray-500">{showError}</p>
                    {/* <p className="text-gray-500">{cart}</p> */}
                    <div className="my-2">
                        <button className="bg-green-700 hover:bg-green-600 text-white w-full h-[40px]" onClick={() => addToCart(data._id, data.price, ((data.price * buyQuantity) - discount), buyQuantity, data.coverImg, data.title)}>Add to Cart</button>
                    </div>
                    <div>
                        <button className="border border-gray-200 bg-gray-200 hover:bg-gray-700 text-green-500 w-full h-[40px]" onClick={() => addToWishlistHandler(data._id, data.price, ((data.price * buyQuantity) - discount), buyQuantity, data.coverImg, data.title)}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}