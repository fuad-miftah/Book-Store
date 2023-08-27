import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid"
import { add } from "../../store/cartSlice"
import { useDispatch } from "react-redux"

export default function UperDiv({ data }) {
    console.log("upperdiv - ", data);
    const dispatch = useDispatch();
    const addToCart = (id, price) => {
        const book = [id, price]
        dispatch(add(book))
    }
    return (
        <div className="flex flex-row flex-wrap w-screen p-10">

            <img class="rounded-t-lg w-[40%] h-[500px]" src={data.image} alt="" />

            <div className="flex flex-col p-10 ">
                <div className="flex flex-wrap flex-col space-y-8">
                    <h1 className="text-4xl font-medium w-[500px]">{data.title}</h1>
                    <div className="h-[40px]">
                        <div className="h-[40px] bg-green-100 inline-flex items-center justify-center mr-4">
                            <p className="inline">-15%</p>
                        </div>
                        <p className="h-[40px] inline-flex items-center line-through">15 birr</p>
                    </div>
                    <p className="text-4xl">300 Birr</p>
                </div>
                <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div>
                    <div className="flex flex-row flex-wrap items-center">
                        <button className="inline bg-gray-200 h-[40px] w-[40px] p-2"><MinusIcon /></button>
                        <p className="inline text-4xl m-4">1</p>
                        <button className="inline bg-green-400 h-[40px] w-[40px] text-white p-2"><PlusIcon /></button>
                    </div>
                    <div className="my-2">
                        <button className="bg-green-500 text-white w-full h-[40px]" onClick={() => addToCart(data.id, data.price)}>Add to Cart</button>
                    </div>
                    <div>
                        <button className="border border-gray-200 text-green-500 w-full h-[40px]">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}