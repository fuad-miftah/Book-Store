import ProductCard from "./ProductCard";

export default function FlexCard({ data }) {
    return (
        <div className='flex flex-row flex-wrap justify-between mx-10'>
            {data.map((book) => (
                <div key={book._id} className='m-4 w-[80%] sm:w-[40%] md:w-[20%] lg:w-[15%]'>
                    <ProductCard

                        id={book._id}
                        title={book.title}
                        price={book.price}
                        image={book.coverImg}
                    />
                </div>
            ))}
        </div>
    );
}
