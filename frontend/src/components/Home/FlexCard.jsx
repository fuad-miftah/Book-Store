import ProductCard from "./ProductCard";

export default function FlexCard({ data }) {
    return (
        <div className='flex flex-row flex-wrap justify-center items-center space-x-1 space-y-8 gap-2'>
            {data.map((book) => (
                <div key={book._id} 
                className='h-[457px] w-[80%] sm:w-[40%] md:w-[20%] lg:w-[15%] bottom-8'>
                    <ProductCard
                        id={book._id}
                        title={book.title}
                        price={book.price}
                        image={book.coverImg}
                        author={book.author}
                        desc={book.productDescription}
                    />
                </div>
            ))}
        </div>
    );
}
