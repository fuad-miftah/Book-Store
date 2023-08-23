import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Subtitle from "../components/Home/Subtitle";
import Carosel from "../components/Home/Carosel";
import UperDiv from "../components/ProductDetail/UperDiv";

export default function ProductDetail() {
  const location = useLocation();
  const { productId } = useParams();
  const { data, featuredData, bestSellerData, status } = useSelector(state => state.books);
  const singleProduct = data.find(item => item.id === Number(productId));

  return (
    <div>
      <div className="flex flex-row flex-wrap px-20 py-4 bg-green-200">
        <p>{location.pathname}</p>
      </div>
      {singleProduct ? (
        <div>
          <UperDiv data={singleProduct} />
          <Subtitle title="Featured Items" />
          <Carosel caroselData={data} />
          <Subtitle title="Best Seller In Your Area" />
          <Carosel caroselData={data} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}