import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Subtitle from "../components/Home/Subtitle";
import CustomCarosel from '../components/Home/CustomCarosel';
import UperDiv from "../components/ProductDetail/UperDiv";
import StatusCode from "../utils/StatusCode";
import FlexCard from '../components/Home/FlexCard';
import Loading from '../components/Adds/Loading';

export default function ProductDetail() {
  const { data, featuredData, bestSellerData, status } = useSelector(state => state.books);
  // Function to check window width
  const isWindowWidthGreaterThan1200px = () => {
    return window.innerWidth > 1340;
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const location = useLocation();
  const paths = location.pathname.split("/");
  const newPaths = paths.filter((path) => path !== "");
  const { productId } = useParams();

  const singleProduct = data.find(item => item._id === productId);
  if (!singleProduct) {
    return <p>Error try again</p>
  }

  if (status === StatusCode.LOADING) {

    return <div className="flex items-center justify-center h-screen">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"></div>
    </div>
  }

  if (status === StatusCode.ERROR) {
    return <p>Error try again</p>
  }

  newPaths[1] = singleProduct.title;
  newPaths.unshift("Home");
  const newPath = newPaths.join(" > ");




  return (
    <div>
      <div className="flex flex-row flex-wrap px-20 py-4 bg-green-200">
        <p>{newPath}</p>
      </div>

      <div>
        <UperDiv data={singleProduct} />
        <Subtitle title="Featured Items" />
        {isWindowWidthGreaterThan1200px() && data.length > 6 ? (
          <CustomCarosel data={data} />
        ) : (
          <FlexCard data={data} />
        )}
        <Subtitle title="Best Seller Items" />
        {isWindowWidthGreaterThan1200px() && featuredData.length > 6 ? (
          <CustomCarosel data={featuredData} />
        ) : (
          <FlexCard data={featuredData} />
        )}
      </div>

    </div>
  );
}