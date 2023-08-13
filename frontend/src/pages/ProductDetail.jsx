//import {useParams} from "react-router-dom"
import { useLocation } from "react-router-dom"
import Subtitle from "../components/Home/Subtitle"
import Carosel from "../components/Home/Carosel"
import UperDiv from "../components/ProductDetail/UperDiv";

export default function ProductDetail(props) {
  //const {productId} = useParams();
  const location = useLocation();
  return (
    <div>
      <div className="flex flex-row flex-wrap px-20 py-4 bg-green-200">
        <p>{location.pathname}</p>
      </div>
      <UperDiv />
        <Subtitle title="Featured Items" />
          <Carosel />
          <Subtitle title="Best Seller In Your Area" />
          <Carosel />
    </div>
    
  )
}