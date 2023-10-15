import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect based on user role
        if (userInfo.role === 'Client') {
            navigate('/clientDashbord'); // Redirect to the Client Dashboard
        } else if (userInfo.role === 'Retailer') {
            navigate('/retailerDashboard'); // Redirect to the Retailer Dashboard
        } else if (userInfo.role === 'Admin') {
            navigate('/adminDashboard'); // Redirect to the Admin Dashboard
        }
        else {
            // Handle other roles or scenarios
            toast.error('Unsupported user role');
        }
    }, [userInfo, navigate]);

    return <div class="flex items-center justify-center h-screen">
        <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"></div>
    </div>;
};

export default Dashboard;
