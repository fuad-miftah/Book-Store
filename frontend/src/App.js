import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Shared from "./pages/Shared"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Shared />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
