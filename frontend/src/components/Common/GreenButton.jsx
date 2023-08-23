export default function GreenButton(props) {
    return (
        <button type="submit" className="mt-4 p-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-grren-800">{props.title}</button>
      
    )
}