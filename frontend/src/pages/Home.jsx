import React, { useState, useEffect } from 'react';
import Hero from "../components/Home/Hero";
import OfferCard from "../components/Home/OfferCard";
import Subtitle from "../components/Home/Subtitle";
import CustomCarosel from '../components/Home/CustomCarosel';
import { useSelector } from "react-redux";
import StatusCode from "../utils/StatusCode";
import FlexCard from '../components/Home/FlexCard';
import Loading from '../components/Adds/Loading';

export default function Home() {
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

  if (status === StatusCode.LOADING) {

    return <div className="flex items-center justify-center h-screen">
      <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"></div>
    </div>

  }

  if (status === StatusCode.ERROR) {
    return <p>Error try again</p>
  }

  return (
    <div>
      <Hero />
      <OfferCard />
      <Subtitle title="Featured Items" />
      {isWindowWidthGreaterThan1200px() && data.length > 6 ? (
        <CustomCarosel data={data} />

      ) : (
        <FlexCard data={data} />
      )}
      <Subtitle title="Best Seller Items" />
      {isWindowWidthGreaterThan1200px() && data.length > 6 ? (
        <CustomCarosel data={data} />
      ) : (
        <FlexCard data={featuredData} />
      )}
    </div>
  )
}
