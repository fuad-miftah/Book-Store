import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import Home from "./pages/Home";
import Shared from "./pages/Shared";
import Products from "./pages/Products";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import { useEffect, useState } from "react";
import { getBooks } from "./store/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import StatusCode from "./utils/StatusCode";
import Siginup from "./pages/Siginup";
import Login from "./pages/Login";
import Cart from "./pages/CommonDashboardPages/Cart";
import Whishlist from "./pages/CommonDashboardPages/Wishlist";
import ClientDashboard from "./pages/ClientDashboard";
import RetailerDashboard from "./pages/RetailerDashbord";
import Dashboard from "./pages/Dashbord";
import AdminDashboard from "./pages/AdminDashboard";
import axiosInstance from "./utils/axiosInstance";


function App() {
  const { data, featuredData, bestSellerData, status } = useSelector(state => state.books);
  const { userInfo } = useSelector((state) => state.auth);

  const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
      const verifyUserAuthentication = async () => {
        try {
          // Make an API call to your server to verify authentication
          await axiosInstance.get(`/user/${userInfo.details._id}`);
          console.log("user is authenticated");
          setIsAuthenticated(true); // User is authenticated
        } catch (error) {
          // Handle authentication errors (e.g., token validation failed)
          console.log("user is not authenticated");
          setIsAuthenticated(false); // User is not authenticated
        }
      };

      verifyUserAuthentication();
    }, []); // The empty dependency array ensures this effect runs only once

    if (isAuthenticated === null) {
      // Waiting for authentication check to complete
      return <p>Loading...</p>;
    } else if (!userInfo || isAuthenticated === false) {
      // User is not authenticated
      return <Navigate to="/login" />;
    } else {
      // User is authenticated
      return children;
    }
  };


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);


  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === StatusCode.ERROR) {
    console.log("error", data, status);
    return <p>Error try again</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Products />} />
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Whishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Siginup />} />
          <Route path="*" element={<Error />} />
          <Route path="Dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="clientDashbord" element={
            <ProtectedRoute>
              <ClientDashboard />
            </ProtectedRoute>
          } />
          <Route path="retailerDashboard" element={
            <ProtectedRoute>
              <RetailerDashboard />
            </ProtectedRoute>
          } />
          <Route path="adminDashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;