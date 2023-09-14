import { useSelector } from "react-redux";

export default function Dashboard() {
    const { userInfo } = useSelector((state) => state.auth);

    return (
        <div className="flex flex-row flex-wrap">
            <h1 className="text-4xl font-medium">Wellcome to your Dashboard {userInfo.details.username}</h1>
        </div>
    )
}