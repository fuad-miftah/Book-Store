import React, { useState, useEffect } from 'react';
import Hero from "../components/Home/Hero";
import OfferCard from "../components/Home/OfferCard";
import Subtitle from "../components/Home/Subtitle";
import Carosel from "../components/Home/Carosel";
import { useSelector } from "react-redux";
import StatusCode from "../utils/StatusCode";
import FlexCard from '../components/Home/FlexCard';

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
    return <p>Loading...</p>
  }

  if (status === StatusCode.ERROR) {
    return <p>Error try again</p>
  }

  return (
    <div>
      <Hero />
      <OfferCard />
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
  )
}
