import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Filter from "../components/Product/Filter";

export default function Products() {
  const location = useLocation();
  const { productId } = useParams();
  const { data, featuredData, bestSellerData, status } = useSelector(state => state.books);

  return (
    <div>
      <div className="flex flex-row flex-wrap px-20 py-4 bg-green-200 mb-16">
        <p>{location.pathname}</p>
      </div>
      {data ? (
        <div className="flex flex-col md:flex-row">
          <Filter />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}