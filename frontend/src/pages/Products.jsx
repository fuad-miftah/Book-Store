import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Filter from "../components/Product/Filter";
import ProductCard from "../components/Home/ProductCard";
import Loading from "../components/Adds/Loading";

export default function Products() {
  const { searchQuery } = useParams();
  const location = useLocation();
  const paths = location.pathname.split("/");
  const newPaths = paths.filter((path) => path !== "");
  newPaths.unshift("Home");
  const newPath = newPaths.join(" > ");

  const { data, featuredData, bestSellerData, status } = useSelector(
    (state) => state.books
  );
  const filter = useSelector((state) => state.filter);

  const [searchTerm, setSearchTerm] = useState("");

  // Use a separate state to track filter changes
  const [isFilterApplied, setFilterApplied] = useState(false);

  const handleApplyFilters = useCallback(() => {
    // Set the filter applied state to true when "Apply Filter" is clicked
    setFilterApplied(true);
  }, []);

  useEffect(() => {
    setSearchTerm(searchQuery || "");
  }, [searchQuery]);

  // Filter data based on the isFilterApplied state
  const filteredData = isFilterApplied
    ? data.filter((book) => {
        const { selectedCategories, selectedBrands, minPrice, maxPrice, isAvailable } = filter;
        const isCategoryMatch =
          selectedCategories.length === 0 || selectedCategories.includes(book.genre);
        const isBrandMatch =
          selectedBrands.length === 0 || selectedBrands.includes(book.brand);
        const isPriceMatch =
          (minPrice === "" || Number(book.price) >= Number(minPrice)) &&
          (maxPrice === "" || Number(book.price) <= Number(maxPrice));
        const isAvailabilityMatch = isAvailable ? book.quantity > 30 : true;

        const isSearchMatch =
          searchTerm === "" ||
          book.title.toLowerCase().includes(searchTerm.toLowerCase());

        return (
          isCategoryMatch &&
          isBrandMatch &&
          isPriceMatch &&
          isAvailabilityMatch &&
          isSearchMatch
        );
      })
    : data;

  return (
    <div>
      <div className="flex flex-row flex-wrap px-20 py-4 bg-green-200 mb-16">
        <p>{newPath}</p>
      </div>
      <div className="mb-4 ml-20 items-end justify-center relative border-spacing-1">
        <input
          className="lg:w-[450px] h-[48px] md:w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 pl-8 pr-0"
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center">
        <Filter applyFilters={handleApplyFilters} />
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-lg gap-4 items-center justify-center md:items-start md:gap-16 space-y-2 grow">
          {filteredData.map((book) => (
            <ProductCard
              key={book._id}
              id={book._id}
              title={book.title}
              price={book.price}
              image={book.coverImg}
            />
          ))}
        </div>

      ) : (
        <Loading />
      )}

    </div>
  );
}
