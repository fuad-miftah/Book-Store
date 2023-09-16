import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Subtitle from "../components/Home/Subtitle";
import Carosel from "../components/Home/Carosel";
import UperDiv from "../components/ProductDetail/UperDiv";
import StatusCode from "../utils/StatusCode";
import FlexCard from '../components/Home/FlexCard';

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
    return <p>Loading...</p>
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
        {isWindowWidthGreaterThan1200px() ? (
          <Carosel caroselData={data} />
        ) : (
          <FlexCard data={data} />
        )}
        <Subtitle title="Best Seller Items" />
        {isWindowWidthGreaterThan1200px() ? (
          <Carosel caroselData={featuredData} />
        ) : (
          <FlexCard data={featuredData} />
        )}
      </div>

    </div>
  );
}