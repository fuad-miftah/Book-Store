import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import image from "../../assets/profile.png"

export default function UpdateProfile() {
    const axiosInstance = axios.create({
        withCredentials: true, // Include cookies in the request
    });
    const { userInfo } = useSelector((state) => state.auth);
    const [isLoading, setIsLoading] = useState(true);

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        img: "",
        address: "",
        phone: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setIsLoading(true);
                const response = await axiosInstance.get(`http://localhost:5555/api/user/${userInfo.details._id}`);
                const user = response.data.data;

                setUserData({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    email: user.email,
                    img: user.img || "",
                    address: user.address || "",
                    phone: user.phone || "",
                });
            } catch (error) {
                console.error("Error fetching data:", error);

            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("User data:", userData);
            const response = await axiosInstance.put(`http://localhost:5555/api/user/${userInfo.details._id}`, userData);
            console.log("Profile updated successfully:", response.data);
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <div className="rounded-2xl  grid grid-cols-1 xl:grid-cols-2 font-serif gap-5 py-5 px-10 w-full shadow-2xl shadow-black">
           <img src={image} alt="images of the books" className="h-full"/>
           <div>
           <h2 className="text-3xl font-semibold mb-4">Update Profile</h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <form className="w-72" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="block text-lg font-medium">First Name:</label>
                        <input
                            className="border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
                            type="text"
                            name="firstName"
                            value={userData.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg font-medium">Last Name:</label>
                        <input
                            className="border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
                            type="text"
                            name="lastName"
                            value={userData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg font-medium">Username:</label>
                        <input
                            className="border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg font-medium">Email:</label>
                        <input
                            className="border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg font-medium">Profile Image URL:</label>
                        <input
                            className="border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
                            type="text"
                            name="img"
                            value={userData.img}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg font-medium">Address:</label>
                        <input
                            className="border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
                            type="text"
                            name="address"
                            value={userData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="block text-lg font-medium">Phone:</label>
                        <input
                            className="border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 w-full"
                            type="tel"
                            name="phone"
                            value={userData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg w-full" type="submit">Update Profile</button>
                </form>
            )}
           </div>
        </div>
    );
}
