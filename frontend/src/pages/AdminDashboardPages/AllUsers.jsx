import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import { routedb } from "../../constants";

export default function AllUserss() {

    const { userInfo } = useSelector((state) => state.auth);
    const userId = encodeURIComponent(userInfo.details._id);
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch books listed by the retailer with the given retailerId
        console.log("access_token", userInfo.access_token);
        const fetchAllUsers = async () => {
            try {
                setIsLoading(true);

                const response = await axiosInstance.get(`${routedb}/user`);
                console.log("response", response);
                // Update the books state with the fetched data
                console.log("Users:", response.data);
                setUsers(response.data.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllUsers();
    }, []);


    const deleteUser = async (userId) => {
        try {
            const response = await axiosInstance.delete(
                `${routedb}/user/${userId}`
            );
            setUsers((prevBooks) => prevBooks.filter((book) => book._id !== userId));
            console.log("user deleted successfully:", response);
            toast.success("Deleted successfully");
        } catch (err) {
            if (err.message) {
                toast.error(err.message);
            } else {
                toast.error("An error occurred while Deleting the user");
            }
        }
    };

    if (isLoading) return (<div class="flex items-center justify-center h-screen">
        <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"></div>
    </div>);

    return (
        <div>
            <h1 className='text-4xl font-bold mx-20'>Users</h1>

            {users != null && users.length === 0 ? (
                <p className='text-xl font-medium m-20'>No users</p>
            ) : (
                <ul>
                    {users.map((item) => (
                        <div key={item._id} className="flex flex-row flex-wrap mx-10">
                            <div className='m-3 md:m-8'>
                                <img className="rounded-t-lg w-[192px] h-[280px]" src={item.img ? item.img : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAB8CAMAAAAM/58GAAAAMFBMVEXR1dr////L0dXO0tjl5uj6+vvV2N3z9PXu7/Dx8fPR0tjc3+Lp6ezZ3ODf4eXj6OtPV1aTAAADRklEQVR4nO2cCZKEIAxFURYVRe9/29F2ll4UEkT5TPlOkF8JSYhBIW5ubm5ubi5FzuS2IRZrjRvV0DVN16pelKejFqrT1R/NWOc2iYV107P5K1Nuq+jMATR8Cphpi4klM2zZv6DK0CD7TQ880KYEDVLtClhCyTmBnprk5FOwyhihNcgxqGARkdtMH27/HBRyJixNwVznclu6h9zNpsVoMFQnzPS5jd3Gm0/f0Ca3tVtIhhNAK3XPUVA1gG6oW5aEClCCYMVRVY257f2EF0dVNdjcFr9D6I5e6fDOM72urWg4CbIpXgKnNK/gjQPYEnIb/AlXAZ4Ec0sAgC8BLyNxFQAm1fIlsDMSoARuXWjgJLCrM16bx+6R8JptdqeKd3n2z4M36NEkyJ55da4mB6aB64OHH3Ib/UoXIaGDujHwLzwzunwJWPe2fyBBcAvbAlYgSW5KBZTArc0LWF0Se5a3ANZiED8UvgBW2njfRx6gfeiJOM9dbps/YEsAi6OInAS42sPUMOApEMKSFjC+gbvwrDAaJdSv/5J+aUBdhmGUaIU3vlihDyXR7s2/SKoCtML8h6UehgaqzX6GnFYBv/z/Qry8oR5mQR7pQVbmHyzFDRrYCTOOIGHEliDDCzETchgtBI9Di+2DhcDGMG5JeMLfsBYhwT/MwJp/7RA40P9AAno+EuFbQ277CISyKmyf/URgkgE3PtogMNfDfgezEpAA3aauhEYx+A2GDc0AGngJwd1t3Kv/D+E3APApKTxLAlwHe4HyqQQ7rdJmkqBj7RXiVBV3HmnIOwCgk227/dZ8mwbvQFjjeaq9LcIh1TgrpYrYI+lcDaPCjlG7PEDv8/qYTZ5vWoRwcgcEzOg2syfsEQ8geIJRCLzoIZcAF7MKtsPkrp8vSZNQwIyeLv4Hkdz/a0q8iEu/wEkVWQj8XNd12JgtNhqduSI5pT4Er2h1gQRuO8cWcXKps6FBVwqUPTGa5MFugsiZFyLKJ9kUnBZMJ2aid84a+V3lg4eGUxSQlhOSccaztzp9S+HFpZfAf9B8jPShRN74SkbybZOrnZD+KW7UG4uDpFUQ9/buIIlfmcS9+jpG2kiy3F8HpSBtm8F+CpxEAqk0fAGZhSQJMHvIGAAAAABJRU5ErkJggg=="} alt={item.title} />
                            </div>
                            <div className='m-3 space-y-4 md:m-8'>
                                <h2 className='text-4xl font-medium'>{item.username}</h2>
                                <p className="text-xl">Email: {item.email}</p>
                                <p className="text-xl">First Name: ${item.firstName}</p>
                                <p className="text-xl">Quantity: {item.lastName}</p>
                                <p className="text-xl">Sell Count: {item.address}</p>
                                <p className="text-xl">Featured: {item.phone}</p>
                                <button type="button" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => deleteUser(item._id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
}
