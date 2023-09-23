import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { toast } from "react-toastify";
import { deleteBookByRetailerId } from "../../store/bookSlice";

export default function ListedBooks() {
    const dispatch = useDispatch();
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
                `http://localhost:5555/api/book/${userInfo.details._id}/${bookId}`
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
        <div className="font-serif bg-blue-100 rounded-3xl pb-12">
            <h1 className='text-4xl font-bold my-2 text-center'>Your Listed Books</h1>

            {books != null && books.length === 0 ? (
                <p className='text-2xl font-serif font-medium text-center py-2'>Your Listed books is empty</p>
            ) : (
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {books.map((item, index) => (
                        <div key={index} className="flex flex-wrap mx-5 bg-gray-50 shadow-lg shadow-black rounded-2xl">
                            <div className='m-3 md:m-8'>
                                <img className="rounded-t-lg w-[192px] h-[280px]" src={item.coverImg} alt={item.title} />
                            </div>
                            <div className='m-3 space-y-4 md:m-8'>
                                <h2 className='text-4xl font-medium'>{item.title}</h2>
                                <p className="text-xl"><span className="font-bold">Author: </span> {item.author}</p>
                                <p className="text-xl"><span className="font-bold">Price: </span> ${item.price}</p>
                                <p className="text-xl"><span className="font-bold">Quantity: </span> {item.quantity}</p>
                                <p className="text-xl"><span className="font-bold">Sell Count: </span> {item.sellCount}</p>
                                <p className="text-xl"><span className="font-bold">Featured: </span> {item.featured ? "Yes" : "No"}</p>
                                <button type="button" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => removeFromListedBooks(item._id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}
