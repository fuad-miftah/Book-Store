import { NavLink } from "react-router-dom"
export default function Subtitle(props) {
  return (
    <div className="flex flex-row flex-wrap justify-between mx-20 p-8">
      <h2 className="inline text-2xl font-medium">{props.title}</h2>
      <NavLink to="/product"><p className="text-green-700 font-medium hover:text-green-500">Show All</p></NavLink>
    </div>

  )
}