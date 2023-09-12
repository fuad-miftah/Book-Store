import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Subtitle from "../components/Home/Subtitle";
import Carosel from "../components/Home/Carosel";
import UperDiv from "../components/ProductDetail/UperDiv";
import StatusCode from "../utils/StatusCode";

export default function ProductDetail() {
  console.log(useParams());
  const location = useLocation();
  const { productId } = useParams();
  const { data, featuredData, bestSellerData, status } = useSelector(state => state.books);
  console.log(data, productId);
  const singleProduct = data.find(item => item._id === productId);

  if (!singleProduct) {
    return <p>Error try again</p>
  }

  return (
    <div>
      <div className="flex flex-row flex-wrap px-20 py-4 bg-green-200">
        <p>{location.pathname}</p>
      </div>
      {singleProduct ? (
        <div>
          <UperDiv data={singleProduct} />
          <Subtitle title="Featured Items" />
          <Carosel caroselData={featuredData} />
          <Subtitle title="Best Seller In Your Area" />
          <Carosel caroselData={bestSellerData} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}