import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'react-multi-carousel/lib/styles.css';
import Home from "./pages/Home"
import Shared from "./pages/Shared"
import Products from "./pages/Products"
import Error from "./pages/Error"
import ProductDetail from "./pages/ProductDetail"
import { useEffect } from "react";
import { getBooks } from "./store/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import StatusCode from "./utils/StatusCode";
import Siginup from "./pages/Siginup";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import FavoritePage from "./pages/FavoriteBooks";

function App() {
  const { data, featuredData, bestSellerData, status } = useSelector(state => state.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [])

  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>
  }

  if (status === StatusCode.ERROR) {
    return <p>Error try again</p>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Products />} />
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Siginup />} />
          <Route  path="/checkout" element={<Checkout/>}/>
          <Route path="/favorite" element={<FavoritePage/>}/>
          <Route path="*" element={<Error />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
