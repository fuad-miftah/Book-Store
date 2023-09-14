import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GreenButton from "../Common/GreenButton";
import { toggleCategory, toggleBrand, setMinPrice, setMaxPrice, toggleIsAvailable } from "../../store/filterSlice";

export default function Filter({ applyFilters }) {
    const category = [
        "Food",
        "Drink",
        "Life Style",
        "Electronic",
        "Fashion",
        "Sport",
    ];

    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);

    const handleCategoryChange = (category) => {
        dispatch(toggleCategory(category));
    };

    const handleBrandChange = (brand) => {
        dispatch(toggleBrand(brand));
    };

    const handleMinPriceChange = (e) => {
        dispatch(setMinPrice(e.target.value));
    };

    const handleMaxPriceChange = (e) => {
        dispatch(setMaxPrice(e.target.value));
    };

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


    const handleApplyFilters = () => {
        // Construct the filter object based on user input
        applyFilters();
    };

    return (
        <div className="flex flex-col w-[450px] border rounded-lg ml-10 mr-6 p-6">

            <div className="category-dropdown">
                <div className="category-title cursor-pointer mb-4" onClick={togglePriceDropdown}>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-2xl font-medium">Price</p>
                        {isPriceOpen ? <ChevronUpIcon className="h-6 w-6 ml-4 mt-1" /> : <ChevronDownIcon className="h-6 w-6 ml-4 mt-1" />}
                    </div>
                </div>
                {isPriceOpen && (
                    <div className="price-content flex flex-row flex-wrap s">
                        <div>
                            <span className="text-xl font-medium mr-1">$</span>
                            <input type="number"
                                placeholder="Min"
                                className="border border-gray-300 rounded-md w-24 h-8 p-2"
                                value={filter.minPrice}
                                onChange={handleMinPriceChange}
                            />
                        </div>
                        <p className="text-xl mx-2 mt-1 text-gray-500">to</p>
                        <div>
                            <span className="text-xl font-medium mr-1">$</span>
                            <input type="number"
                                placeholder="Max"
                                className="border border-gray-300 rounded-md w-24 h-8 p-2"
                                value={filter.maxPrice}
                                onChange={handleMaxPriceChange}
                            />
                        </div>

                    </div>
                )}
                <div />


                <div className="category-dropdown">
                    <div className="category-title cursor-pointer my-4" onClick={toggleCategoryDropdown}>
                        <div className="flex flex-row items-center justify-between">
                            <p className="text-2xl font-medium">Category</p>
                            {isCategoryOpen ? <ChevronUpIcon className="h-6 w-6 ml-4 mt-1" /> : <ChevronDownIcon className="h-6 w-6 ml-4 mt-1" />}
                        </div>
                    </div>
                    {isCategoryOpen && (
                        <div className="category-content">
                            <div className="flex flex-col">
                                {category.map((item) => (
                                    <div className="my-2" key={item}>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 mr-2"
                                                onChange={() => handleCategoryChange(item)} // Call handleCategoryChange with the selected category
                                                checked={filter.selectedCategories.includes(item)} // Check if the category is selected in Redux state
                                            />
                                            <span className="ml-2 text-gray-700">{item}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div />
                </div>

                <div className="category-title cursor-pointer my-4" onClick={toggleBrandDropdown}>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-2xl font-medium">Brand</p>
                        {isBrandOpen ? <ChevronUpIcon className="h-6 w-6 ml-4 mt-1" /> : <ChevronDownIcon className="h-6 w-6 ml-4 mt-1" />}
                    </div>
                </div>
                {isBrandOpen && (
                    <div className="category-content">
                        {/* <CheckboxList /> */}
                        <div className="flex flex-col">
                            {category.map((item) => (
                                <div className="my-2">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-4 w-4 mr-2"
                                            onChange={() => handleBrandChange(item)} // Call handleCategoryChange with the selected category
                                            checked={filter.selectedBrands.includes(item)} // Check if the category is selected in Redux state
                                        />
                                        <span className="ml-2 text-gray-700">{item}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div />

                <div className="category-title cursor-pointer my-4" onClick={toggleAvailabilityDropdown}>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-2xl font-medium">Available</p>
                        {isAvailabilityOpen ? (
                            <ChevronUpIcon className="h-6 w-6 ml-4 mt-1" />
                        ) : (
                            <ChevronDownIcon className="h-6 w-6 ml-4 mt-1" />
                        )}
                    </div>
                </div>
                {isAvailabilityOpen && (
                    <div className="category-content">
                        <div className="flex flex-col">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio h-4 w-4 mr-2"
                                    value="yes"
                                    checked={filter.isAvailable === true}
                                    onChange={() => dispatch(toggleIsAvailable(true))}
                                />
                                <span className="ml-2 text-gray-700">Yes</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio h-4 w-4 mr-2"
                                    value="no"
                                    checked={filter.isAvailable === false}
                                    onChange={() => dispatch(toggleIsAvailable(false))}
                                />
                                <span className="ml-2 text-gray-700">No</span>
                            </label>
                        </div>
                    </div>
                )}


            </div>

            <GreenButton title="Apply Filters" onClick={handleApplyFilters} />

        </div>
    );
}