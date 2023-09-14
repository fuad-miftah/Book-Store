import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";

export default function ListedBooks() {
    const axiosInstance = axios.create({
        withCredentials: true, // Include cookies in the request
    });
    const { userInfo } = useSelector((state) => state.auth);
    const userId = encodeURIComponent(userInfo.details._id);
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch books listed by the retailer with the given retailerId
        const fetchRetailerBooks = async () => {
            try {
                setIsLoading(true);
                const response = await axiosInstance.get(
                    `http://localhost:5555/api/book/retailer/${userInfo.details._id}`
                );

                // Update the books state with the fetched data
                console.log("Books listed by the retailer:", response.data);
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching retailer's books:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRetailerBooks();
    }, [userId]);
    if (isLoading) return (<p>Loading...</p>);

    return (
        <div>
            <h1 className='text-4xl font-bold mx-20'>Your Listed Books</h1>

            {books != null && books.length === 0 ? (
                <p className='text-xl font-medium m-20'>Your Listed books is empty</p>
            ) : (
                <ul>
                    {books.map((item) => (
                        <div className="flex flex-row flex-wrap mx-10">
                            <div className='m-3 md:m-8'>
                                <img className="rounded-t-lg w-[192px] h-[280px]" src={item.coverImg} alt={item.title} />
                            </div>
                            <div className='m-3 space-y-4 md:m-8'>
                                <h2 className='text-4xl font-medium'>{item.title}</h2>
                                <p className="text-xl">Author: {item.author}</p>
                                <p className="text-xl">Price: ${item.price}</p>
                                <p className="text-xl">Quantity: {item.quantity}</p>
                                <p className="text-xl">Sell Count: {item.sellCount}</p>
                                <p className="text-xl">Featured: {item.featured ? "Yes" : "No"}</p>
                            </div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}
