import { Outlet } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/NavBar/Header";

const Shared = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
}

export default  Shared;