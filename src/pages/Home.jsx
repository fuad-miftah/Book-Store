import Hero from "../components/Home/Hero"
import OfferCard from "../components/Home/OfferCard"
import Subtitle from "../components/Home/Subtitle"
import Carosel from "../components/Home/Carosel"
import { useSelector } from "react-redux";
import StatusCode from "../utils/StatusCode";

export default function Home() {
  const { data, featuredData, bestSellerData, status } = useSelector(state => state.books);


  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>
  }

  if (status === StatusCode.ERROR) {
    return <p>Error try again</p>
  }

  return (
    <div>
      <Hero />
      <OfferCard />
      <Subtitle title="Featured Items" />
      <Carosel caroselData={featuredData} />
      <Subtitle title="Best Seller In Your Area" />
      <Carosel caroselData={bestSellerData} />
    </div>
  )
}