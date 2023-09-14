import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import Home from "./pages/Home";
import Shared from "./pages/Shared";
import Products from "./pages/Products";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import { useEffect } from "react";
import { getBooks } from "./store/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import StatusCode from "./utils/StatusCode";
import Siginup from "./pages/Siginup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Whishlist from "./pages/Wishlist";
import ClientDashboard from "./pages/ClientDashboard";
import RetailerDashboard from "./pages/RetailerDashbord";
import Dashboard from "./pages/Dashbord";


function App() {
  const { data, featuredData, bestSellerData, status } = useSelector(state => state.books);
  const { userInfo } = useSelector((state) => state.auth);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  console.log(userInfo);
  console.log(userInfo === true);

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
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="clientDashbord" element={<ClientDashboard />} />
          <Route path="retailerDashboard" element={<RetailerDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Siginup />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;