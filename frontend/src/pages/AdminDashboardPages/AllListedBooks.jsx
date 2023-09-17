import React, { useState } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import { toast } from "react-toastify";

export default function AllListedBooks() {
    const axiosInstance = axios.create({
        withCredentials: true, // Include cookies in the request
    });
    const { userInfo } = useSelector((state) => state.auth);

    const { data } = useSelector(state => state.books);
    const [books, setBooks] = useState(data);


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

    return (
        <div>
            <h1 className='text-4xl font-bold mx-20'>Listed Books</h1>

            {books != null && books.length === 0 ? (
                <p className='text-xl font-medium m-20'>Your Listed books is empty</p>
            ) : (
                <ul>
                    {books.map((item) => (
                        <div key={item._id} className="flex flex-row flex-wrap mx-10">
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
