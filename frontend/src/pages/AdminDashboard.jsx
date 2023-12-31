import { useState, useEffect } from "react";
import Dashboard from "./RetailerDashbordPages/Dashboard";
import AllListedBooks from "./AdminDashboardPages/AllListedBooks";
import AllSalehistory from "./AdminDashboardPages/AllSaleHistory";
import AllOrders from "./AdminDashboardPages/AllOrders";
import UpdateProfile from "./CommonDashboardPages/UpdateProfile";
import AllUsers from "./AdminDashboardPages/AllUsers";
import Cart from "./CommonDashboardPages/Cart";
import Wishlist from "./CommonDashboardPages/Wishlist";
import { Link, useNavigate } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import { routedb } from "../constants";

export default function AdminDashboard() {
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);
    const [active, setActive] = useState("Dashboard");
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);

    useEffect(() => {
        const verifyUserAuthentication = async () => {
            try {
                // Make an API call to your server to verify authentication
                const response = await axiosInstance.get(`${routedb}/user/${userInfo.details._id}`);
                if (response.data.data.role !== "Admin") {
                    navigate("/");
                }

            } catch (error) {
                // Handle authentication errors (e.g., token validation failed)
                console.log("user is not authenticated");
                navigate("/");
            }
        };

        verifyUserAuthentication();
    }, [navigate, userInfo.details._id]); // The empty dependency array ensures this effect runs only once

    const handleActive = (path) => {
        setActive(path);
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {
                isSmallScreen && (<div>
                    <div className="w-full bg-gray-800 text-white py-4">
                        <div className="flex justify-between items-center px-4">
                            <button onClick={toggleSidebar} className="text-3xl text-green-500">
                                {showSidebar ? "✕" : "☰"}
                            </button>
                            <Link to="/" className="text-4xl font-bold text-green-500">
                                <HomeIcon className="h-12 w-12" />
                            </Link>
                        </div>
                        {showSidebar && (
                            <div className="flex flex-col items-center">
                                <button
                                    onClick={() => handleActive("Dashboard")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    Dashboard
                                </button>
                                <button
                                    onClick={() => handleActive("AllUsers")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    All Users
                                </button>
                                <button
                                    onClick={() => handleActive("AllSaleHistory")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    All Sale History
                                </button>
                                <button
                                    onClick={() => handleActive("AllListedBooks")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    All Listed Books
                                </button>
                                <button
                                    onClick={() => handleActive("AllOrders")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    All Orders
                                </button>
                                <button
                                    onClick={() => handleActive("Cart")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    Cart
                                </button>
                                <button
                                    onClick={() => handleActive("Wishlist")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    Wishlist Books
                                </button>
                                <button
                                    onClick={() => handleActive("Profile")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    Profile
                                </button>
                            </div>
                        )}
                    </div>
                    <div className={`w-full ${isSmallScreen ? "bg-gray-100" : "bg-gray-800"} p-8`}>
                        <div className="flex">
                            {active === "Dashboard" && <Dashboard />}
                            {active === "AllUsers" && <AllUsers />}
                            {active === "AllSaleHistory" && <AllSalehistory />}
                            {active === "AllListedBooks" && <AllListedBooks />}
                            {active === "AllOrders" && <AllOrders />}
                            {active === "Cart" && <Cart />}
                            {active === "Wishlist" && <Wishlist />}
                            {active === "Profile" && <UpdateProfile />}
                        </div>
                    </div>
                </div>)
            }
            {
                !isSmallScreen && (<div className="flex flex-row flex-wrap">
                    <div className="w-1/6 bg-gray-800 h-screen text-white py-4 border rounded-xl">
                        <div className="flex flex-col items-center">
                            <Link to="/" className="text-4xl font-bold text-green-500 mb-8">
                                <HomeIcon className="h-12 w-12" />
                            </Link>
                            <button
                                onClick={() => handleActive("Dashboard")}
                                className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                            >
                                Dashboard
                            </button>
                            <button
                                onClick={() => handleActive("AllUsers")}
                                className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                            >
                                All Users
                            </button>
                            <button
                                onClick={() => handleActive("AllSaleHistory")}
                                className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                            >
                                All Sale History
                            </button>
                            <button
                                onClick={() => handleActive("AllListedBooks")}
                                className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                            >
                                All Listed Books
                            </button>
                            <button
                                onClick={() => handleActive("AllOrders")}
                                className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                            >
                                All Orders
                            </button>
                            <button
                                onClick={() => handleActive("Cart")}
                                className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                            >
                                Cart
                            </button>
                            <button
                                onClick={() => handleActive("Wishlist")}
                                className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                            >
                                Wishlist Books
                            </button>
                            <button
                                onClick={() => handleActive("Profile")}
                                className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                            >
                                Profile
                            </button>
                        </div>
                    </div>
                    <div className="w-5/6 bg-gray-100 p-8">
                        <div className="flex">
                            {active === "Dashboard" && <Dashboard />}
                            {active === "AllUsers" && <AllUsers />}
                            {active === "AllSaleHistory" && <AllSalehistory />}
                            {active === "AllListedBooks" && <AllListedBooks />}
                            {active === "AllOrders" && <AllOrders />}
                            {active === "Cart" && <Cart />}
                            {active === "Wishlist" && <Wishlist />}
                            {active === "Profile" && <UpdateProfile />}
                        </div>
                    </div>

                </div>)
            }

        </div>

    )
}