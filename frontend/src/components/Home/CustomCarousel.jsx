import React, { useRef, useEffect, useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import ProductCard from './ProductCard';
import AnotherCard from './AnotherCard';

function CustomCarousel({ data }) {
    const sliderRef = useRef(null);
    const [shouldRenderScrollButtons, setShouldRenderScrollButtons] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (sliderRef.current) {
                const slider = sliderRef.current;
                // Check if there is content to scroll
                if (slider.scrollWidth > slider.clientWidth) {
                    setShouldRenderScrollButtons(true);
                } else {
                    setShouldRenderScrollButtons(false);
                }
            }
        }

        // Initial check on component mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [data]);

    const slideLeft = () => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            slider.scrollLeft = slider.scrollLeft - 200;
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            slider.scrollLeft = slider.scrollLeft + 200;
        }
    };

    return (
        <>
            <div className='relative flex items-center'>
                {shouldRenderScrollButtons && (
                    <div className="p-6 md:p-10" style={{ position: 'relative', zIndex: 1 }}>
                        <button class="absolute top-1/4 left-4 w-7 h-7 md:w-14 md:h-14 rounded-full 
                           bg-green-700 hover:bg-green-500 text-white  flex items-center" onClick={slideLeft}>
                            <ChevronLeftIcon
                                className="h-3 w-3 ml-2 md:h-6 md:w-6 md:ml-4"
                            />
                        </button>
                    </div>
                )}
                <div
                    id='slider'
                    className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide inline-block' // Added inline-block here
                    ref={sliderRef}
                >
                    {data.map((book) => (
                        <div className="inline-block" key={book._id}>
                            <AnotherCard
                                key={book._id}
                                id={book._id}
                                title={book.title}
                                price={book.price}
                                image={book.coverImg}
                            />
                        </div>
                    ))}
                </div>
                {shouldRenderScrollButtons && (
                    <div className="p-6 md:p-10" style={{ position: 'relative', zIndex: 1 }}>
                        <button class="absolute top-1/4 right-4 w-7 h-7 md:w-14 md:h-14 rounded-full 
                           bg-green-700 hover:bg-green-500 text-white  flex items-center" onClick={slideRight}>
                            <ChevronRightIcon
                                className="h-3 w-3 ml-2 md:h-6 md:w-6 md:ml-4"
                            />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default CustomCarousel;
