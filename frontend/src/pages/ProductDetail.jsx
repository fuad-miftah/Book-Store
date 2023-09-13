import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Subtitle from "../components/Home/Subtitle";
import Carosel from "../components/Home/Carosel";
import UperDiv from "../components/ProductDetail/UperDiv";
import StatusCode from "../utils/StatusCode";
import ProductCard from '../components/Home/ProductCard';

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

  return (
    <div>
      <div className="flex flex-row flex-wrap px-20 py-4 bg-green-200">
        <p>{location.pathname}</p>
      </div>
      {singleProduct ? (
        <div>
          <UperDiv data={singleProduct} />
          <Subtitle title="Featured Items" />
          {isWindowWidthGreaterThan1200px() ? (
            <>
              <Carosel caroselData={data} />

            </>
          ) : (
            <>
              <div className='flex flex-row flex-wrap justify-between mx-10'>
                {
                  data.map((book) => (
                    <div className='m-3 md:m-8'>
                      <ProductCard
                        key={book._id}
                        id={book._id}
                        title={book.title}
                        price={book.price}
                        image={book.coverImg}
                      />
                    </div>
                  ))
                }

              </div>
            </>
          )}
          <Subtitle title="Best Seller Items" />
          {isWindowWidthGreaterThan1200px() ? (
            <>
              <Carosel caroselData={featuredData} />

            </>
          ) : (
            <>
              <div className='flex flex-row flex-wrap justify-between mx-10'>
                {
                  featuredData.map((book) => (
                    <div className='m-8'>
                      <ProductCard
                        key={book._id}
                        id={book._id}
                        title={book.title}
                        price={book.price}
                        image={book.coverImg}
                      />
                    </div>
                  ))
                }

              </div>
            </>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}