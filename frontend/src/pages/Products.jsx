import React, { useState, useCallback } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Filter from "../components/Product/Filter";
import ProductCard from "../components/Home/ProductCard";

export default function Products() {
  const location = useLocation();
  const { productId } = useParams();
  const { data, featuredData, bestSellerData, status } = useSelector(state => state.books);
  const filter = useSelector((state) => state.filter);

  // State variable to trigger re-render when filter changes
  const [filterChange, setFilterChange] = useState(false);

  // Callback function to be passed to Filter component
  const handleApplyFilters = useCallback(() => {
    // Update the filterChange state to trigger re-render
    setFilterChange(!filterChange);
  }, [filterChange]);

  // Filter the data based on selected filter properties
  const filteredData = data.filter((book) => {
    const { selectedCategories, selectedBrands, minPrice, maxPrice } = filter;
    const isCategoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(book.genre);
    const isBrandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(book.brand);
    const isPriceMatch =
      (minPrice === "" || Number(book.price) >= Number(minPrice)) &&
      (maxPrice === "" || Number(book.price) <= Number(maxPrice));

    return isCategoryMatch && isBrandMatch && isPriceMatch;
  });


  return (
    <div>
      <div className="flex flex-row flex-wrap px-20 py-4 bg-green-200 mb-16">
        <p>{location.pathname}</p>
      </div>
      {data ? (
        <div className="flex flex-col md:flex-row">
          <Filter applyFilters={handleApplyFilters} />
          <div className="flex flex-row flex-wrap m-4 space-x-16">
            {
              filteredData.map((book) => (
                <ProductCard
                  key={book._id}
                  id={book._id}
                  title={book.title}
                  price={book.price}
                  image={book.coverImg}
                />
              ))
            }
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}