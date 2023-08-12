import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shared from "./pages/Shared";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
