import { book } from "../../assets"
import GreenButton from "../Common/GreenButton"
export default function UperDiv() {
    return (
        <div className="flex flex-row flex-wrap w-screen p-10">
                <img class="rounded-t-lg w-[45%] h-[500px]" src={book} alt="" />
            
            <div className="flex flex-col divide-y p-10">
                <div className="flex flex-col space-y-4">
                <h1 className="text-4xl font-medium">Slicing Tomatoes</h1>
                <div className="h-[40px]">
                    <div className="h-[40px] bg-green-100 inline">
                        <p className="inline">-15%</p>
                    </div>
                    <p className="inline bg-red-100 h-[40px]">-15%</p>
                    <p className="inline line-through">15 birr</p>
                </div>
                <p className="text-4xl">300 Birr</p>
                </div>
                <div>
                    <div className="flex flex-row flex-wrap items-center">
                        <button className="inline bg-gray-200">-</button>
                        <p className="inline">1</p>
                        <GreenButton title="+"/>
                    </div>
                    <GreenButton title="Add to Cart" />
                    <button className="border border-green-500 text-green-500">Save</button>
                </div>

            </div>

        </div>
    )
    
}