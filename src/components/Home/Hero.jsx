import GreenButton from "../Common/GreenButton"
export default function Hero() {
    return (
      <div className="bg-gradient-to-br from-gray-700 to-gray-300 w-full 2xl:h-[624px]">
        <div className="p-[12%]">
          <h1 className="text-5xl text-white font-medium">Where your search<br />ends?</h1>
          <GreenButton title="Order Online" className="py-8"/>
        </div>
      </div>
      
    )
}