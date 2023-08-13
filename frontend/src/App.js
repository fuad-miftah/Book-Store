import {BrowserRouter, Routes,Route} from "react-router-dom"
import 'react-multi-carousel/lib/styles.css';
import Home from "./pages/Home"
import Shared from "./pages/Shared"
import Products from "./pages/Products"
import Error from "./pages/Error"
import ProductDetail from "./pages/ProductDetail"
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setData(json));
    }, [])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Shared />}>
        <Route index element={<Home data={data}/>}/>
        <Route path="product" element={<Products />}/>
        <Route path="product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
