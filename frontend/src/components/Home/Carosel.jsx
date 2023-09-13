import Carousel from 'react-multi-carousel';
import ProductCard from './ProductCard';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

export default function Carosel({ caroselData }) {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    minitablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div className="mx-14 my-8">
      <Carousel
        arrows
        containerClass="container"
        customLeftArrow={
          <div class="p-10">
            <button class="absolute top-1/4 left-4 w-14 h-14 rounded-full 
                       bg-green-700 hover:bg-green-500 text-white  flex items-center">
              <ChevronLeftIcon
                className="h-6 w-6 ml-4"
              />
            </button>
          </div>
        }
        customRightArrow={
          <div class="p-10">
            <button class="absolute top-1/4 right-4 w-14 h-14 rounded-full 
                       bg-green-700 hover:bg-green-500 text-white  flex items-center">
              <ChevronRightIcon
                className="h-6 w-6 ml-4"
              />
            </button>
          </div>
        }
        slidesToSlide={1}
        swipeable
        renderButtonGroupOutside={false}
        customButtonGroup={<customRightArrow />}
        responsive={responsive}
        className='px-4'
      >

        {
          caroselData.map((book) => (
            <div className='flex'>
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
      </Carousel>
    </div>

  )
}
