import { ChevronDownIcon, ChevronUpIcon, MinusIcon } from "@heroicons/react/24/solid";
import CheckboxList from "./CheckboxList";
import { useState } from "react";
import GreenButton from "../Common/GreenButton";

export default function Filter() {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);

    const toggleCategoryDropdown = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const toggleBrandDropdown = () => {
        setIsBrandOpen(!isBrandOpen);
    };

    const togglePriceDropdown = () => {
        setIsPriceOpen(!isPriceOpen);
    };

    const toggleAvailabilityDropdown = () => {
        setIsAvailabilityOpen(!isAvailabilityOpen);
    };

    return (

        // <Card>
        //     <List>
        //         <CheckboxList />
        //     </List>
        // </Card> 
        <div className="flex flex-col w-[310px] border rounded-lg ml-10 p-6">

            <div className="category-dropdown">
                <div className="category-title cursor-pointer mb-4" onClick={togglePriceDropdown}>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-2xl font-medium">Price</p>
                        {isPriceOpen ? <ChevronUpIcon className="h-6 w-6 ml-4 mt-1" /> : <ChevronDownIcon className="h-6 w-6 ml-4 mt-1" />}
                    </div>
                </div>
                {isPriceOpen && (
                    <div className="price-content flex flex-row flex-wrap">
                        <div>
                            <span className="text-xl font-medium mr-1">$</span>
                            <input type="number" placeholder="Min" className="border border-gray-300 rounded-md w-24 h-8 p-2" />
                        </div>
                        <p className="text-xl mx-2 mt-1 text-gray-500">to</p>
                        <div>
                            <span className="text-xl font-medium mr-1">$</span>
                            <input type="number" placeholder="Max" className="border border-gray-300 rounded-md w-24 h-8 p-2" />
                        </div>

                    </div>
                )}
                <div />


                <div className="category-title cursor-pointer my-4" onClick={toggleCategoryDropdown}>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-2xl font-medium">Category</p>
                        {isCategoryOpen ? <ChevronUpIcon className="h-6 w-6 ml-4 mt-1" /> : <ChevronDownIcon className="h-6 w-6 ml-4 mt-1" />}
                    </div>
                </div>
                {isCategoryOpen && (
                    <div className="category-content">
                        <CheckboxList />
                    </div>
                )}
                <div />

                <div className="category-title cursor-pointer my-4" onClick={toggleBrandDropdown}>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-2xl font-medium">Brand</p>
                        {isBrandOpen ? <ChevronUpIcon className="h-6 w-6 ml-4 mt-1" /> : <ChevronDownIcon className="h-6 w-6 ml-4 mt-1" />}
                    </div>
                </div>
                {isBrandOpen && (
                    <div className="category-content">
                        <CheckboxList />
                    </div>
                )}
                <div />

                <div className="category-title cursor-pointer my-4" onClick={toggleAvailabilityDropdown}>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-2xl font-medium">Availability</p>
                        {isAvailabilityOpen ? <ChevronUpIcon className="h-6 w-6 ml-4 mt-1" /> : <ChevronDownIcon className="h-6 w-6 ml-4 mt-1" />}
                    </div>
                </div>
                {isAvailabilityOpen && (
                    <div className="category-content">
                        <CheckboxList />
                    </div>
                )}
                <div />


            </div>

            <GreenButton title="Filter" className="" />
        </div>
    );
}