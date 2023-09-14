import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function ListNewBook() {
    const axiosInstance = axios.create({
        withCredentials: true, // Include cookies in the request
    });
    const { userInfo } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        description: "",
        genre: "",
        // retailerId: "",
        price: 0,
        featured: false,
        quantity: 0,
        coverImg: "",
        no_of_page: 0,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to your backend to create a new book
            const response = await axiosInstance.post(`http://localhost:5555/api/book/${userInfo.details._id}`, formData);
            console.log("Book created successfully:", response.data);

            // Clear the form after successful submission
            setFormData({
                title: "",
                author: "",
                description: "",
                genre: "",
                // retailerId: "",
                price: 0,
                featured: false,
                quantity: 0,
                coverImg: "",
                no_of_page: 0,
            });

            // Handle any other success actions (e.g., redirection)
        } catch (error) {
            // Handle errors and update the errors state if needed
            if (error.response && error.response.data) {
                setErrors(error.response.data);
            }
            console.error("Error creating book:", error.message);
        }
    };

    return (
        <div>
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                    <input
                        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500"
                        type="text"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleChange}
                    />
                    {errors.title && <span className="error">{errors.title}</span>}
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Author:</label>
                    <input
                        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500"
                        type="text"
                        name="author"
                        required
                        value={formData.author}
                        onChange={handleChange}
                    />
                    {errors.author && <span className="error">{errors.author}</span>}

                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
                    <textarea
                        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Genre:</label>
                    <input
                        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500"
                        type="text"
                        name="genre"
                        required
                        value={formData.genre}
                        onChange={handleChange}
                    />
                    {errors.genre && <span className="error">{errors.genre}</span>}
                </div>
                {/* <div>
          <label>Retailer ID:</label>
          <input
            type="text"
            name="retailerId"
            value={formData.retailerId}
            onChange={handleChange}
          />
          {errors.retailerId && <span className="error">{errors.retailerId}</span>}
        </div> */}
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
                    <input
                        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500"
                        type="number"
                        name="price"
                        required
                        value={formData.price}
                        onChange={handleChange}
                    />
                    {errors.price && <span className="error">{errors.price}</span>}
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Featured:</label>
                    <input
                        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500"
                        type="checkbox"
                        name="featured"
                        required
                        checked={formData.featured}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Quantity:</label>
                    <input
                        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500"
                        type="number"
                        name="quantity"
                        required
                        value={formData.quantity}
                        onChange={handleChange}
                    />
                    {errors.quantity && <span className="error">{errors.quantity}</span>}
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Cover Image URL:</label>
                    <input
                        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500"
                        type="text"
                        name="coverImg"
                        required
                        value={formData.coverImg}
                        onChange={handleChange}
                    />
                    {errors.coverImg && <span className="error">{errors.coverImg}</span>}
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Number of Pages:</label>
                    <input
                        className="border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-green-500"
                        type="number"
                        name="no_of_page"
                        value={formData.no_of_page}
                        onChange={handleChange}
                    />
                </div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg" type="submit">Add Book</button>
            </form>
        </div>
    );
}

