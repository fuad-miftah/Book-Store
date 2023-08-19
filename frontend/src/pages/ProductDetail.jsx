//import {useParams} from "react-router-dom"
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Subtitle from "../components/Home/Subtitle"
import Carosel from "../components/Home/Carosel"
import UperDiv from "../components/ProductDetail/UperDiv";
import StatusCode from "../utils/StatusCode";
import { getBook } from "../store/singleBookSlice";
import { getBooks } from "../store/bookSlice";

export default function ProductDetail() {
  const { productId } = useParams();
  const { mainData, featuredData, bestSellerData, mainStatus } = useSelector(state => state.books);
  const { data, status } = useSelector(state => state.singleBook);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(productId);
    dispatch(getBook(productId));
  }, [productId])

  useEffect(() => {
    dispatch(getBooks(productId));
  }, [productId]);


  const location = useLocation();
  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>
  }

  if (status === StatusCode.ERROR) {
    return <p>Error try again</p>
  }
  return (
    <div>
      <div className="flex flex-row flex-wrap px-20 py-4 bg-green-200">
        <p>{location.pathname}</p>
      </div>
      <UperDiv data={data} />
      <Subtitle title="Featured Items" />
      <Carosel caroselData={featuredData} />
      <Subtitle title="Best Seller In Your Area" />
      <Carosel caroselData={bestSellerData} />
    </div>
  )
}