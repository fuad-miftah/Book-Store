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

function App() {
  const { data, featuredData, bestSellerData, status } = useSelector(state => state.books);
  const { users } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  console.log(users);
  console.log(users === true);

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
          {console.log(users != null)}
          {console.log(users == null)}

          <Route path="product" element={users != null ? <Products /> : <Navigate replace to="/login" />} />
          <Route path="product/:productId" element={users != null ? <ProductDetail /> : <Navigate replace to="/login" />} />
          {/* {users ? <Route path="product/:productId" element={<ProductDetail />} /> : <Navigate replace to="/login" />} */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Siginup />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;