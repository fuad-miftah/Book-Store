import Hero from "../components/Home/Hero"
import OfferCard from "../components/Home/OfferCard"
import Subtitle from "../components/Home/Subtitle"
import Carosel from "../components/Home/Carosel"
export default function Home() {
    return (
      <div>
          <Hero />
          <OfferCard />
          <Subtitle title="Featured Items" />
          <Carosel />
          <Subtitle title="Best Seller In Your Area" />
          <Carosel />
      </div>
      
    )
}