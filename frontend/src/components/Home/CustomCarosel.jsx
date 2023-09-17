import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

export default function CustomCarosel({ data }) {
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef(null);
    const [isScrollableLeft, setIsScrollableLeft] = useState(false);
    const [isScrollableRight, setIsScrollableRight] = useState(true); // Assuming initially scrollable right

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.addEventListener('scroll', handleScroll);
            checkScrollable();
        }

        return () => {
            if (sliderRef.current) {
                sliderRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleScroll = () => {
        checkScrollable();
    };

    const checkScrollable = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setIsScrollableLeft(scrollLeft > 0);
            setIsScrollableRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const slideLeft = () => {
        if (sliderRef.current) {
            setScrollLeft(scrollLeft => scrollLeft - 500);
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            setScrollLeft(scrollLeft => scrollLeft + 500);
        }
    };

    // Use useEffect to scroll the element after scrollLeft state changes
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft = scrollLeft;
            checkScrollable();
        }
    }, [scrollLeft]);

    return (
        <div className='relative flex items-center'>
            <button
                className={`absolute top-1/3 left-4 w-14 h-14 rounded-full 
        bg-green-700 hover:bg-green-500 text-white flex items-center ${!isScrollableLeft && 'hidden'}`}
                onClick={slideLeft}
            >
                <ChevronLeftIcon className='h-6 w-6 ml-4' />
            </button>

            <div
                ref={sliderRef}
                className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide m-10'
            >
                {data.map((item) => (
                    <div className='inline-block m-4 w-[80%] sm:w-[40%] md:w-[20%] lg:w-[15%]' key={item._id}>
                        <ProductCard
                            id={item._id}
                            title={item.title}
                            price={item.price}
                            image={item.coverImg}
                        />
                    </div>
                ))}
            </div>
            <button
                className={`absolute top-1/3 right-4 w-14 h-14 rounded-full 
        bg-green-700 hover.bg-green-500 text-white flex items-center ${!isScrollableRight && 'hidden'}`}
                onClick={slideRight}
            >
                <ChevronRightIcon className='h-6 w-6 ml-4' />
            </button>
        </div>
    );
}
