import { useSelector } from "react-redux";

export default function Dashboard() {
    const { userInfo } = useSelector((state) => state.auth);

    return (
        <div className="flex flex-row flex-wrap justify-center items-center h-screen w-screen">
            <h1 className="text-4xl font-medium">Welcome {userInfo.details.username}</h1>
        </div>
    )
}
