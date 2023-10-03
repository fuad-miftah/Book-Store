import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import { deleteBookByRetailerId } from "../../store/bookSlice";
import { routedb } from "../../constants";

export default function ListedBooks() {
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
                    `${routedb}/book/retailer/${userInfo.details._id}`
                );

                // Update the books state with the fetched data
                console.log("Books listed by the retailer:", response.data);
                setBooks(response.data.data);
            } catch (error) {
                console.error("Error fetching retailer's books:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRetailerBooks();
    }, [userId]);


    const removeFromListedBooks = async (bookId) => {
        try {
            const response = await axiosInstance.delete(
                `${routedb}/book/${userInfo.details._id}/${bookId}`
            );
            setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
            console.log("Book deleted successfully:", response);
            toast.success("Deleted successfully");
        } catch (err) {
            if (err.message) {
                toast.error(err.message);
            } else {
                toast.error("An error occurred while Deleting the book");
                console.error("An error occurred while logging in:", err);
            }
        }
    };

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
                                <button type="button" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => removeFromListedBooks(item._id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}
